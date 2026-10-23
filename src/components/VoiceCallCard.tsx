"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, PhoneOff, PhoneCall } from "lucide-react";

// 26 waveform bar baseline heights
const BARS = [
  20, 35, 55, 80, 50, 70, 100, 75, 45, 85, 95, 65, 35, 60, 90, 75, 40, 80,
  100, 65, 45, 75, 85, 55, 35, 20,
];

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export default function VoiceCallCard() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const isSessionActiveRef = useRef(false);
  const isSpeakingRef = useRef(false);
  const isThinkingRef = useRef(false);
  const isMutedRef = useRef(false);

  const recognitionRef = useRef<any>(null);
  const latestTranscriptRef = useRef<string>("");
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const historyRef = useRef<ChatMessage[]>([]);
  const restartTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync ref values for async callbacks
  useEffect(() => {
    isSessionActiveRef.current = isSessionActive;
  }, [isSessionActive]);

  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    isThinkingRef.current = isThinking;
  }, [isThinking]);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Play audio track and execute callback on completion
  const playAudio = useCallback(
    (audioSrc: string, onEnd?: () => void) => {
      if (typeof window === "undefined") return;

      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current = null;
      }

      if (isMutedRef.current) {
        onEnd?.();
        return;
      }

      const audio = new Audio(audioSrc);
      audio.preload = "auto";
      audioPlayerRef.current = audio;

      audio.onplay = () => {
        setIsSpeaking(true);
      };

      audio.onended = () => {
        setIsSpeaking(false);
        audioPlayerRef.current = null;
        onEnd?.();
      };

      audio.onerror = () => {
        setIsSpeaking(false);
        audioPlayerRef.current = null;
        onEnd?.();
      };

      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.warn("Audio autoplay blocked by browser policy:", err);
          setIsSpeaking(false);
        });
      }
    },
    []
  );

  // Send message to Gemini with conversation history, then speak reply
  const sendQueryToGemini = useCallback(
    async (userQuery: string) => {
      if (!isSessionActiveRef.current) return;
      const query = userQuery.trim();
      if (!query) {
        // If silence, restart listening if session is still active
        if (isSessionActiveRef.current && !isSpeakingRef.current) {
          startListening();
        }
        return;
      }

      setIsThinking(true);

      try {
        const res = await fetch("/api/voice-receptionist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: query,
            history: historyRef.current,
          }),
        });

        const data = await res.json();
        setIsThinking(false);

        if (!isSessionActiveRef.current) return;

        const reply = data.reply || "";

        // Record history for continuous multi-turn dialogue
        historyRef.current.push({
          role: "user",
          parts: [{ text: query }],
        });
        historyRef.current.push({
          role: "model",
          parts: [{ text: reply }],
        });

        if (data.audio) {
          playAudio(data.audio, () => {
            // CONTINUOUS SESSION: When agent finishes speaking, immediately listen again!
            if (isSessionActiveRef.current) {
              startListening();
            }
          });
        } else {
          // If no audio returned, automatically continue listening
          if (isSessionActiveRef.current) {
            startListening();
          }
        }
      } catch (err) {
        console.error("Voice receptionist query failed:", err);
        setIsThinking(false);
        // Continue listening loop even on error
        if (isSessionActiveRef.current) {
          startListening();
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [playAudio]
  );

  // Start browser speech recognition
  const startListening = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!isSessionActiveRef.current) return;

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition not supported in this browser");
      return;
    }

    try {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (_) {}
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
        latestTranscriptRef.current = "";
      };

      recognition.onresult = (event: any) => {
        let full = "";
        for (let i = 0; i < event.results.length; i++) {
          full += event.results[i][0].transcript;
        }
        latestTranscriptRef.current = full;
      };

      recognition.onend = () => {
        setIsListening(false);
        if (!isSessionActiveRef.current) return;

        const recorded = latestTranscriptRef.current.trim();
        if (recorded) {
          latestTranscriptRef.current = "";
          sendQueryToGemini(recorded);
        } else {
          // User was quiet or paused: keep listening session active
          if (
            isSessionActiveRef.current &&
            !isSpeakingRef.current &&
            !isThinkingRef.current
          ) {
            if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
            restartTimerRef.current = setTimeout(() => {
              if (
                isSessionActiveRef.current &&
                !isSpeakingRef.current &&
                !isThinkingRef.current
              ) {
                startListening();
              }
            }, 300);
          }
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
        // On non-fatal error, retry listening if still in active session
        if (
          isSessionActiveRef.current &&
          !isSpeakingRef.current &&
          !isThinkingRef.current
        ) {
          if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
          restartTimerRef.current = setTimeout(() => {
            if (
              isSessionActiveRef.current &&
              !isSpeakingRef.current &&
              !isThinkingRef.current
            ) {
              startListening();
            }
          }, 400);
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (_) {
      setIsListening(false);
    }
  }, [sendQueryToGemini]);

  // Start continuous conversation session
  const startSession = useCallback(() => {
    if (isSessionActiveRef.current) return;
    setIsSessionActive(true);
    isSessionActiveRef.current = true;
    historyRef.current = [];

    // Play initial greeting, then automatically begin listening loop
    playAudio("/audio/receptionist-greeting.mp3", () => {
      if (isSessionActiveRef.current) {
        startListening();
      }
    });
  }, [playAudio, startListening]);

  // Close session completely until user triggers it again
  const closeSession = useCallback(() => {
    setIsSessionActive(false);
    isSessionActiveRef.current = false;
    setIsSpeaking(false);
    setIsListening(false);
    setIsThinking(false);

    if (restartTimerRef.current) {
      clearTimeout(restartTimerRef.current);
      restartTimerRef.current = null;
    }

    if (audioPlayerRef.current) {
      audioPlayerRef.current.pause();
      audioPlayerRef.current = null;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (_) {}
    }

    historyRef.current = [];
  }, []);

  // Hover does NOT start session (protects API tokens from unwanted usage)
  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
  };

  // Click card or confirmation button explicitly starts session
  const handleCardClick = () => {
    if (!isSessionActiveRef.current) {
      startSession();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
        audioPlayerRef.current = null;
      }
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (_) {}
      }
      if (restartTimerRef.current) {
        clearTimeout(restartTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      className="mt-6 w-full rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 p-5 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden cursor-pointer shadow-lg group transition-all duration-300 hover:border-slate-700 min-h-[140px]"
      role="button"
      tabIndex={0}
      aria-label="AI Voice Receptionist Waveform"
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isSpeaking
            ? "bg-gradient-to-r from-slate-700/30 via-slate-600/35 to-slate-700/30 opacity-100 animate-pulse"
            : isListening
            ? "bg-gradient-to-r from-emerald-500/25 via-teal-500/30 to-emerald-500/25 opacity-100"
            : isThinking
            ? "bg-gradient-to-r from-amber-500/25 via-yellow-500/25 to-amber-500/25 opacity-100 animate-pulse"
            : isSessionActive
            ? "bg-gradient-to-r from-slate-700/25 via-slate-600/25 to-slate-700/25 opacity-80"
            : "opacity-40 bg-gradient-to-r from-slate-800/20 via-slate-700/20 to-slate-800/20"
        }`}
      />

      {/* Top Bar Controls: Live Pulse Dot & Close / Mute Buttons */}
      <div className="absolute top-3.5 inset-x-4 flex items-center justify-between z-20">
        {/* State Indicator Dot */}
        <span
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            isListening
              ? "bg-emerald-400 animate-ping"
              : isSpeaking
              ? "bg-white animate-pulse"
              : isThinking
              ? "bg-amber-400 animate-bounce"
              : isSessionActive
              ? "bg-emerald-500 animate-pulse"
              : "bg-slate-500"
          }`}
        />

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {/* Close / End Conversation Button (Shown when session is active) */}
          {isSessionActive && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeSession();
              }}
              aria-label="Close voice conversation"
              title="Close voice conversation"
              className="w-7 h-7 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 hover:text-white border border-rose-500/40 flex items-center justify-center transition-all shadow-xs cursor-pointer"
            >
              <PhoneOff className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Mute Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const nextMuted = !isMuted;
              setIsMuted(nextMuted);
              if (audioPlayerRef.current) {
                audioPlayerRef.current.pause();
                audioPlayerRef.current = null;
              }
              setIsSpeaking(false);
            }}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            title={isMuted ? "Unmute audio" : "Mute audio"}
            className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 flex items-center justify-center transition-colors shadow-xs cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-slate-200" />
            )}
          </button>
        </div>
      </div>

      {/* Pure Continuous Animated Wave Signal (ALWAYS ANIMATING) */}
      <div className="relative z-10 flex items-center justify-center gap-1 sm:gap-1.5 h-16 w-full px-2 pt-2">
        {BARS.map((h, n) => {
          // Dynamic height and class depending on active status
          const animClass = isSpeaking
            ? "anim-wave-speaking"
            : isListening
            ? "anim-wave-listening"
            : "anim-wave-idle";

          const colorClass = isSpeaking
            ? "bg-gradient-to-t from-[#1E3A8A] via-slate-400 to-white shadow-[0_0_10px_rgba(30,58,138,0.5)]"
            : isListening
            ? "bg-gradient-to-t from-emerald-500 via-teal-300 to-white shadow-[0_0_8px_rgba(52,211,153,0.5)]"
            : isThinking
            ? "bg-gradient-to-t from-amber-500 via-yellow-300 to-white"
            : isSessionActive
            ? "bg-gradient-to-t from-[#172554] via-slate-400 to-white"
            : "bg-gradient-to-t from-slate-700 via-[#1E3A8A] to-slate-400 group-hover:from-[#172554] group-hover:to-slate-300";

          return (
            <span
              key={n}
              className={`w-[3px] sm:w-[3.5px] rounded-full transition-colors duration-200 ${animClass} ${colorClass}`}
              style={{
                height: `${h}%`,
                animationDelay: `${(n * 85) % 1500}ms`,
              }}
            />
          );
        })}
      </div>

      {/* Hover Confirmation Pop-up: Protects API tokens from unwanted usage */}
      {!isSessionActive && (
        <div
          className={`absolute inset-0 z-30 flex items-center justify-center bg-slate-950/80 backdrop-blur-[2px] transition-all duration-300 p-3 ${
            isCardHovered
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } group-hover:opacity-100 group-hover:pointer-events-auto`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              startSession();
            }}
            className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_24px_rgba(52,211,153,0.55)] transition-all hover:scale-105 active:scale-95 cursor-pointer ring-1 ring-emerald-300/60"
          >
            <PhoneCall className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
            <span>Call our voice agent</span>
          </button>
        </div>
      )}
    </div>
  );
}
