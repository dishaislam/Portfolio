"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  PhoneCall,
  Calendar,
  Users,
  ShieldCheck,
  Zap,
  Clock,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Headphones,
  Sliders,
  DollarSign,
  Languages,
  HeartHandshake,
  Bot,
  Building2,
  Stethoscope,
  Home,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Volume2,
  VolumeX,
  PhoneOff,
  Sparkles,
  FileCheck,
  Send,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { type ProductData, PRODUCTS_CATALOG } from "@/data/productsData";

interface Props {
  product: ProductData;
}

// 26 waveform bars baseline heights
const BARS = [
  20, 35, 55, 80, 50, 70, 100, 75, 45, 85, 95, 65, 35, 60, 90, 75, 40, 80,
  100, 65, 45, 75, 85, 55, 35, 20,
];

// 8 Core Industry Verticals
const INDUSTRIES = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    badge: "HIPAA Compliant",
    description:
      "Triage patient inquiries 24/7, book clinic appointments, send prescription refill reminders, and escalate emergency calls to on-call doctors.",
    stat: "78% fewer hold drops",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Home,
    badge: "Lead Pre-Qual",
    description:
      "Answer property inquiries instantly, pre-screen buyers on budget and timeline, and schedule on-site viewings directly into agent calendars.",
    stat: "3.2x faster tour booking",
  },
  {
    id: "recruitment",
    name: "Recruitment",
    icon: Users,
    badge: "Candidate Screening",
    description:
      "Conduct structured pre-screening interviews, verify candidate qualifications and salary expectations, and schedule hiring manager calls.",
    stat: "12 hrs saved per recruiter/wk",
  },
  {
    id: "mortgage",
    name: "Mortgage & Finance",
    icon: DollarSign,
    badge: "Rate Inquiries",
    description:
      "Handle inbound interest rate inquiries, gather credit score ranges and loan amounts, and route qualified applicants to loan officers.",
    stat: "91% lead capture rate",
  },
  {
    id: "edtech",
    name: "EdTech & Universities",
    icon: GraduationCap,
    badge: "Admissions Triage",
    description:
      "Assist prospective students with admission prerequisites, tuition details, course schedules, and booking academic counselor sessions.",
    stat: "24/7 enrollment support",
  },
  {
    id: "agency",
    name: "Agency & Legal",
    icon: Briefcase,
    badge: "Client Intake",
    description:
      "Qualify incoming prospective clients, capture project scope and retainer budgets, and direct urgent consultations to partners.",
    stat: "100% after-hours response",
  },
  {
    id: "it-solutions",
    name: "IT & Solutions",
    icon: Building2,
    badge: "Tier-1 Diagnostics",
    description:
      "Automate Tier-1 ticket creation, collect diagnostic logs, troubleshoot common outages, and page on-call engineers for critical incidents.",
    stat: "Under 3-min first resolution",
  },
  {
    id: "market-research",
    name: "Market Research",
    icon: BarChart3,
    badge: "Automated Surveys",
    description:
      "Conduct structured, polite telephone surveys with dynamic follow-up questioning, automated transcription, and sentiment scoring.",
    stat: "5,000+ calls/day scale",
  },
];

// In-Depth FAQ List
const FAQS = [
  {
    q: "What is an AI voice agent?",
    a: "An AI voice agent is an autonomous software system that uses real-time speech recognition (ASR), large language models (LLMs), and low-latency neural text-to-speech (TTS) to conduct natural, human-like voice conversations over standard phone lines and SIP trunks. Unlike frustrating robotic IVR menus ('press 1 for sales'), it listens to what the caller says in everyday conversational language, understands context and sentiment, answers inquiries, books meetings, and routes calls intelligently.",
  },
  {
    q: "How does the AI Voice Agent transfer calls to a human agent?",
    a: "Through Contextual Warm Handoff. When a caller requests a human or reaches a complex query threshold, the AI places the caller on a brief hold, dials the appropriate department or on-call staff member via SIP transfer, whispers a concise 10-second summary briefing of the caller's situation and sentiment, and then bridges the call with the complete live transcript forwarded to the staff dashboard.",
  },
  {
    q: "Does the AI Voice Agent have multilingual capabilities?",
    a: "Yes. The voice agent supports over 50 languages—including English, Spanish, French, German, Mandarin, Arabic, and Bengali. It automatically detects the caller's spoken language and dialect in real time, switching its conversational response and accent seamlessly without requiring the caller to press any buttons.",
  },
  {
    q: "What details are available after the call has ended?",
    a: "Immediately following call termination, your dashboard and connected CRM (HubSpot, Salesforce, Zoho) receive: (1) full audio recording and interactive soundwave playback, (2) speaker-diarized timestamped transcript, (3) real-time sentiment and emotion score, (4) extracted caller intent and BANT qualification fields, and (5) automated calendar event confirmation with meeting link and SMS reminder status.",
  },
  {
    q: "How does it handle appointment scheduling?",
    a: "The agent connects bi-directionally to your live Google Calendar, Microsoft Outlook, or Calendly. When a caller asks for a meeting or consultation, the agent checks available time slots in real time, proposes options to the caller, confirms their preferred time, locks the slot on your calendar, and instantly sends an email invite and SMS confirmation to the caller.",
  },
  {
    q: "Does the AI Voice Agent identify itself as AI?",
    a: "Yes. By default, transparency builds caller trust and ensures regulatory compliance. The agent greets callers with a warm, professional disclosure (e.g., 'Hi, I'm Elicia, an AI assistant at Utsho...'). However, the exact greeting, persona name, tone, and disclosure phrasing can be customized to match your brand and industry compliance standards.",
  },
  {
    q: "How do you deliver the software, and what are the ongoing fees?",
    a: "Unlike SaaS platforms that charge hefty recurring per-minute markups, Utsho engineers your custom AI voice agent and hands over 100% full source code, deployment containers, and database ownership. You connect directly to wholesale telecom providers (Twilio, Telnyx, or direct SIP) where calls cost pennies per hour, saving tens of thousands in ongoing operational overhead.",
  },
];


const DEMO_CALL: { who: "caller" | "agent"; text: string }[] = [
  { who: "caller", text: "Hi, do you have anything this week for a check-up? One of my teeth has been sensitive." },
  { who: "agent", text: "Hello, this is Elicia at Brightside Dental. Sorry to hear that. I have Thursday at 2:30 or Friday at 9:00. Which suits you?" },
  { who: "caller", text: "Thursday works." },
  { who: "agent", text: "Booked for Thursday at 2:30 with Dr. Rahman. I've just texted you a confirmation." },
];

const CALL_STEPS = [
  {
    title: "It picks up on the first ring",
    body: "No hold music and no menu tree. Speech recognition and the voice stream together, so the caller hears a reply in under 280 ms.",
    sample: ["Answered in 0.26 s", "Greeting: Brightside Dental, Elicia speaking"],
  },
  {
    title: "It works out what the caller needs",
    body: "It answers from your own FAQs and price list, and asks for anything it is missing: a name, the reason for calling, a budget, a timeline.",
    sample: ["Reason: sensitive tooth, wants a check-up", "Name: Maya Hossain (asked, confirmed)"],
  },
  {
    title: "It books into your real calendar",
    body: "It reads Google Calendar, Outlook or Calendly live, offers slots that are actually open, holds one, and texts the caller a confirmation.",
    sample: ["Thu 2:30 pm held for Dr. Rahman", "SMS confirmation sent"],
  },
  {
    title: "It hands over when a person is needed",
    body: "If the caller asks for a human, or the topic is sensitive, it dials the right person and gives a 10-second briefing first, so nobody repeats themselves.",
    sample: ["Transferring to front desk", "Briefing: Maya, tooth pain, booked Thursday"],
  },
];

const INDUSTRY_CALLS: Record<string, { lines: { who: "caller" | "agent"; text: string }[]; outcome: string[] }> = {
  healthcare: {
    lines: [
      { who: "caller", text: "I need to move my appointment, and I'm nearly out of my blood pressure tablets." },
      { who: "agent", text: "I can move you to Friday at 10:00. For the refill, I'll send a request to Dr. Rahman's team now and text you when it's approved." },
    ],
    outcome: ["Appointment moved to Fri 10:00", "Refill request sent to the clinic"],
  },
  "real-estate": {
    lines: [
      { who: "caller", text: "Is the two-bedroom on Elm Street still available? My budget is around 450." },
      { who: "agent", text: "It is. When are you hoping to move in? I can book a viewing with the agent this Saturday at 11:00." },
    ],
    outcome: ["Lead qualified: budget 450, move-in asked", "Viewing booked Sat 11:00"],
  },
  agency: {
    lines: [
      { who: "caller", text: "I was served papers yesterday and I need to speak to someone today." },
      { who: "agent", text: "I'm sorry, that sounds stressful. I'm connecting you to Ms. Alvi now, and I've already told her what happened so you don't have to repeat it." },
    ],
    outcome: ["Marked urgent", "Transferred with a 10-second briefing"],
  },
  "it-solutions": {
    lines: [
      { who: "caller", text: "Our checkout has been down since nine this morning." },
      { who: "agent", text: "I've opened a priority ticket and I'm paging the on-call engineer. Can you read me the error code on the screen?" },
    ],
    outcome: ["P1 ticket created", "On-call engineer paged"],
  },
};

const FAQ_SHORT = [FAQS[0], FAQS[1], FAQS[2], FAQS[4]];
const SHOWN_INDUSTRIES = INDUSTRIES.filter((i) =>
  ["healthcare", "real-estate", "agency", "it-solutions"].includes(i.id)
).map((i) =>
  i.id === "agency" ? { ...i, name: "Legal & Agency" } : i.id === "it-solutions" ? { ...i, name: "IT & Support" } : i
);

export default function AiVoiceAgentProductView({ product }: Props) {
  // --- Persona Selection for Live Simulator ---
  const [activePersona, setActivePersona] = useState<"elicia" | "mark">("elicia");

  // --- Interactive Audio Call State ---
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<
    { sender: "user" | "agent"; text: string; time: string }[]
  >([]);

  const isSessionActiveRef = useRef(false);
  const isSpeakingRef = useRef(false);
  const isThinkingRef = useRef(false);
  const isMutedRef = useRef(false);
  const activePersonaRef = useRef<"elicia" | "mark">("elicia");

  const recognitionRef = useRef<any>(null);
  const latestTranscriptRef = useRef<string>("");
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const restartTimerRef = useRef<NodeJS.Timeout | null>(null);

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
  useEffect(() => {
    activePersonaRef.current = activePersona;
  }, [activePersona]);

  // --- ROI Calculator State ---
  const [monthlyCalls, setMonthlyCalls] = useState(15000);
  const [avgCallDuration, setAvgCallDuration] = useState(4); // minutes
  const [repDailyTalkHours, setRepDailyTalkHours] = useState(5); // hours
  const [repYearlySalary, setRepYearlySalary] = useState(45000); // USD
  const [aiManagePercent, setAiManagePercent] = useState(75); // %

  // ROI Calculations
  const { monthlySavings, monthlyHoursSaved, repHourlyRate } = useMemo(() => {
    // 52 weeks * 5 days = 260 working days per year
    // Total working hours per month ~ 160 hrs
    const hourlyRate = repYearlySalary / 2080;
    const perMinuteCost = hourlyRate / 60;

    const totalMinutesPerMonth = monthlyCalls * avgCallDuration;
    const aiMinutes = totalMinutesPerMonth * (aiManagePercent / 100);

    const hoursSaved = Math.round(aiMinutes / 60);
    // Telecom infrastructure cost is ~$0.03/min vs human labor
    const humanCost = aiMinutes * perMinuteCost;
    const aiCost = aiMinutes * 0.035;
    const netSavings = Math.max(0, Math.round(humanCost - aiCost));

    return {
      monthlySavings: netSavings,
      monthlyHoursSaved: hoursSaved,
      repHourlyRate: hourlyRate.toFixed(2),
    };
  }, [monthlyCalls, avgCallDuration, repDailyTalkHours, repYearlySalary, aiManagePercent]);

  // --- Active Tab for Software Showcase ---
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<number>(0);

  // --- Selected Industry Vertical ---
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  // --- Open FAQ item ---
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [industryIdx, setIndustryIdx] = useState(0);

  // --- Voice Call Helpers ---
  const playAudio = useCallback((audioSrc: string, onEnd?: () => void) => {
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
    audioPlayerRef.current = audio;

    audio.onplay = () => setIsSpeaking(true);
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

    audio.play().catch((err) => {
      console.warn("Autoplay blocked:", err);
      setIsSpeaking(false);
      onEnd?.();
    });
  }, []);

  const sendQueryToGemini = useCallback(
    async (userQuery: string) => {
      if (!isSessionActiveRef.current) return;
      const query = userQuery.trim();
      if (!query) {
        if (isSessionActiveRef.current && !isSpeakingRef.current) {
          startListening();
        }
        return;
      }

      setIsThinking(true);
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      setConversationHistory((prev) => [...prev, { sender: "user", text: query, time: currentTime }]);

      try {
        const res = await fetch("/api/voice-receptionist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: query,
            persona: activePersonaRef.current,
            history: conversationHistory.map((c) => ({
              role: c.sender === "user" ? "user" : "model",
              parts: [{ text: c.text }],
            })),
          }),
        });

        const data = await res.json();
        setIsThinking(false);

        if (!isSessionActiveRef.current) return;

        const reply = data.reply || "I am here to help you. Would you like to schedule an appointment?";
        setConversationHistory((prev) => [
          ...prev,
          { sender: "agent", text: reply, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
        ]);

        if (data.audio) {
          playAudio(data.audio, () => {
            if (isSessionActiveRef.current) {
              startListening();
            }
          });
        } else {
          if (isSessionActiveRef.current) {
            startListening();
          }
        }
      } catch (err) {
        console.error("Voice query failed:", err);
        setIsThinking(false);
        if (isSessionActiveRef.current) {
          startListening();
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [playAudio, conversationHistory]
  );

  const startListening = useCallback(() => {
    if (typeof window === "undefined" || !isSessionActiveRef.current) return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech recognition not supported in this browser");
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

  const startSession = (persona: "elicia" | "mark") => {
    setActivePersona(persona);
    activePersonaRef.current = persona;
    setIsSessionActive(true);
    isSessionActiveRef.current = true;
    setConversationHistory([]);

    const greetingText =
      persona === "mark"
        ? "Hi, I'm Mark with Utsho sales. How can I help evaluate voice AI for your team today?"
        : "Hello! I'm Elicia with Utsho inbound support. How can I assist you with your booking or inquiry?";

    setConversationHistory([
      {
        sender: "agent",
        text: greetingText,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    // Send initial query or start listening
    setTimeout(() => {
      if (isSessionActiveRef.current) {
        startListening();
      }
    }, 1000);
  };

  const endSession = () => {
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
  };

  // Pre-set prompt triggers
  const triggerSamplePrompt = (prompt: string) => {
    if (!isSessionActive) {
      startSession(activePersona);
    }
    sendQueryToGemini(prompt);
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
    <>
      {/* Hero: dark navy stage shared with the home page */}
      <div className="relative bg-[#070E1E] text-white overflow-hidden">
        <Navbar theme="dark" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <div className="absolute -top-[20%] right-[-5%] lg:right-[2%] w-[850px] h-[850px] rounded-full bg-[radial-gradient(circle,_rgba(23,37,84,0.30)_0%,_rgba(15,23,42,0.15)_45%,_transparent_72%)] blur-[90px]" />
          <div className="absolute top-[25%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(30,41,59,0.25)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <section className="relative z-10 max-w-[1180px] mx-auto px-6 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,500px)] gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.08] text-white max-w-xl">
                AI voice agent for handling inbound calls
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
                It picks up in under 280 ms, answers from your own information, books into your calendar, and passes the call to a person when it should. You get the source code and own it.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-gradient-to-r from-[#172554] via-[#1E293B] to-[#334155] hover:from-[#1E3A8A] hover:to-[#475569] border border-slate-700/80 hover:border-slate-600 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-black/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
                >
                  <span>Build your voice agent</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
                >
                  Estimate your savings
                </a>
              </div>
              <p className="mt-8 text-sm text-slate-400 max-w-md leading-relaxed">
                Full source code handover. Live in 2 to 4 weeks. No per-minute markup from us.
              </p>
            </div>

            {/* The call: scripted once on load, replaced by the live demo when a call starts */}
            <div className="rounded-2xl bg-[#0E1830]/90 border border-[#1E2B47] shadow-2xl shadow-black/40 overflow-hidden">
              <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-[#1E2B47]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${isSessionActive ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}`} aria-hidden="true" />
                  <span className="text-sm font-medium text-slate-200 truncate">
                    {isSessionActive
                      ? `Live call with ${activePersona === "elicia" ? "Elicia" : "Mark"}`
                      : "Incoming call to Brightside Dental"}
                  </span>
                </div>
                {isSessionActive ? (
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
                      aria-pressed={isMuted}
                      className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
                    </button>
                    <button
                      type="button"
                      onClick={endSession}
                      className="h-9 px-3 rounded-lg bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <PhoneOff className="w-3.5 h-3.5" aria-hidden="true" />
                      End call
                    </button>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 shrink-0">Sample call</span>
                )}
              </div>

              <div
                className="px-5 py-5 h-[410px] overflow-y-auto space-y-4"
                aria-live={isSessionActive ? "polite" : "off"}
              >
                {!isSessionActive &&
                  DEMO_CALL.map((line, n) => (
                    <div
                      key={n}
                      className={`motion-safe:animate-[call-in_0.5s_ease-out_both] pl-3 border-l-2 ${line.who === "agent" ? "border-indigo-400" : "border-slate-700"}`}
                      style={{ animationDelay: `${0.4 + n * 1.2}s` }}
                    >
                      <div className={`text-xs font-medium ${line.who === "agent" ? "text-indigo-300" : "text-slate-500"}`}>
                        {line.who === "agent" ? "Elicia" : "Caller"}
                      </div>
                      <p className={`mt-0.5 text-sm leading-relaxed ${line.who === "agent" ? "text-white" : "text-slate-300"}`}>{line.text}</p>
                    </div>
                  ))}
                {!isSessionActive && (
                  <div
                    className="motion-safe:animate-[call-in_0.5s_ease-out_both] flex items-center gap-3 rounded-lg bg-slate-950/60 border border-[#1E2B47] px-3.5 py-3"
                    style={{ animationDelay: `${0.4 + DEMO_CALL.length * 1.2}s` }}
                  >
                    <Calendar className="w-4 h-4 text-indigo-300 shrink-0" aria-hidden="true" />
                    <div className="text-sm text-slate-200">
                      Thursday 2:30 pm booked <span className="text-slate-500">with Dr. Rahman, SMS sent</span>
                    </div>
                  </div>
                )}

                {isSessionActive && conversationHistory.length === 0 && (
                  <p className="text-sm text-slate-400">Connecting. Speak normally when you hear the greeting.</p>
                )}
                {isSessionActive &&
                  conversationHistory.map((item, idx) => (
                    <div
                      key={idx}
                      className={`pl-3 border-l-2 ${item.sender === "agent" ? "border-indigo-400" : "border-slate-700"}`}
                    >
                      <div className={`text-xs font-medium ${item.sender === "agent" ? "text-indigo-300" : "text-slate-500"}`}>
                        {item.sender === "agent" ? (activePersona === "elicia" ? "Elicia" : "Mark") : "You"}
                      </div>
                      <p className={`mt-0.5 text-sm leading-relaxed ${item.sender === "agent" ? "text-white" : "text-slate-300"}`}>{item.text}</p>
                    </div>
                  ))}
              </div>

              <div className="px-5 py-4 border-t border-[#1E2B47] bg-slate-950/30">
                {isSessionActive ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-400">
                      <div className="flex items-center gap-[3px] h-5" aria-hidden="true">
                        {BARS.slice(0, 14).map((h, n) => (
                          <span
                            key={n}
                            className={`w-[3px] rounded-full ${isSpeaking ? "anim-wave-speaking bg-indigo-300" : isListening ? "anim-wave-listening bg-slate-300" : "anim-wave-idle bg-slate-600"}`}
                            style={{ height: `${h}%`, animationDelay: `${(n * 85) % 1500}ms` }}
                          />
                        ))}
                      </div>
                      <span>{isListening ? "Listening to you" : isSpeaking ? "Speaking" : isThinking ? "Thinking" : "Connected"}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        ["Book an appointment", "Can you book a discovery appointment for tomorrow afternoon?"],
                        ["What does it cost?", "How much cost do businesses save by switching to an AI voice receptionist?"],
                        ["Transfer me to a person", "What happens when an urgent caller needs to speak with a human doctor or lawyer?"],
                      ].map(([label, prompt]) => (
                        <button
                          key={label}
                          type="button"
                          onClick={() => triggerSamplePrompt(prompt)}
                          className="px-3 h-8 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 transition-colors focus-visible:outline-2 focus-visible:outline-indigo-300"
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-sm text-slate-300">Try it with your voice.</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => startSession("elicia")}
                        className="inline-flex items-center gap-2 px-4 h-10 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
                      >
                        <PhoneCall className="w-4 h-4" aria-hidden="true" />
                        Call Elicia
                      </button>
                      <button
                        type="button"
                        onClick={() => startSession("mark")}
                        className="inline-flex items-center gap-2 px-4 h-10 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-100 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
                      >
                        <PhoneCall className="w-4 h-4" aria-hidden="true" />
                        Call Mark
                      </button>
                    </div>
                  </div>
                )}
                {!isSessionActive && (
                  <p className="mt-2.5 text-xs text-slate-500">Elicia books appointments and answers support questions. Mark qualifies sales leads.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#F8FAFC] text-slate-900">
        {/* How a call goes */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28 pb-20 sm:pb-28">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">From first ring to booked slot</h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Every call goes through the same four stages. Each panel shows what your team sees for the sample call above.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* 1. Answer */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col">
              <h3 className="font-heading text-xl font-semibold text-slate-900">1. It picks up on the first ring</h3>
              <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">No hold music and no menu tree. Speech recognition and the voice stream together, so the caller hears a reply in under 280 ms.</p>
              <div className="mt-6 rounded-xl bg-[#0E1830] p-5 flex-1 flex flex-col justify-end">
                <div className="flex items-end gap-[3px] h-14" aria-hidden="true">
                  {[30,55,80,45,90,60,35,70,50,25,10,8,6,4].map((h, n) => (
                    <span key={n} className={`w-1.5 rounded-full ${n < 10 ? "bg-slate-500" : "bg-indigo-300"}`} style={{ height: `${h}%` }} />
                  ))}
                  <span className="ml-2 mb-0.5 h-full w-px bg-indigo-400/60" />
                  {[20,45,75,95,70,85,55,65,40,30,15].map((h, n) => (
                    <span key={n} className="w-1.5 rounded-full bg-indigo-300" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <div className="text-3xl font-heading font-bold text-white tabular-nums whitespace-nowrap">0.26 s</div>
                  <div className="text-sm text-slate-400 text-right">from the end of the caller's sentence to the first word back</div>
                </div>
              </div>
            </div>

            {/* 2. Understand */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col">
              <h3 className="font-heading text-xl font-semibold text-slate-900">2. It works out what the caller needs</h3>
              <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">It answers from your own FAQs and price list, and asks for anything it is missing, such as a name, the reason for calling or a budget.</p>
              <div className="mt-6 rounded-xl bg-[#0E1830] p-5 flex-1 space-y-2.5">
                {[
                  ["Name", "Maya Hossain", true],
                  ["Reason", "Check-up, sensitive tooth", true],
                  ["Urgency", "Routine", true],
                  ["Insurance", "Asking now", false],
                ].map(([k, v, done]) => (
                  <div key={k as string} className="flex items-center justify-between gap-3 rounded-lg bg-slate-950/50 border border-[#1E2B47] px-3.5 py-2.5 text-sm">
                    <span className="text-slate-400">{k}</span>
                    <span className={`flex items-center gap-2 ${done ? "text-white" : "text-indigo-300"}`}>
                      {v}
                      {done ? <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <span className="w-2 h-2 rounded-full bg-indigo-300 animate-pulse" aria-hidden="true" />}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Book */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col">
              <h3 className="font-heading text-xl font-semibold text-slate-900">3. It books into your real calendar</h3>
              <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">It reads Google Calendar, Outlook or Calendly live, offers slots that are actually open, holds one, and texts the caller a confirmation.</p>
              <div className="mt-6 rounded-xl bg-[#0E1830] p-5 flex-1">
                <div className="grid grid-cols-5 gap-1.5 text-center text-xs text-slate-400">
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => <div key={d} className="pb-1">{d}</div>)}
                  {["9:00", "10:30", "2:30", "4:00"].flatMap((t, r) =>
                    ["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, c) => {
                      const busy = ["Mon-9:00", "Mon-2:30", "Tue-10:30", "Wed-9:00", "Wed-4:00", "Thu-9:00", "Fri-2:30", "Tue-4:00"].includes(`${d}-${t}`);
                      const chosen = d === "Thu" && t === "2:30";
                      const offered = d === "Fri" && t === "9:00";
                      return (
                        <div
                          key={`${d}-${t}`}
                          className={`h-9 rounded-md flex items-center justify-center text-[11px] ${chosen ? "bg-indigo-500 text-white font-semibold" : offered ? "border border-indigo-300/70 text-indigo-200" : busy ? "bg-slate-800/80 text-slate-600" : "border border-slate-700 text-slate-400"}`}
                        >
                          {chosen ? "Held" : offered ? "Offered" : busy ? "" : t}
                        </div>
                      );
                    })
                  )}
                </div>
                <p className="mt-4 text-sm text-slate-300">Thursday 2:30 pm held for Dr. Rahman. Confirmation texted to the caller.</p>
              </div>
            </div>

            {/* 4. Hand over */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col">
              <h3 className="font-heading text-xl font-semibold text-slate-900">4. It hands over when a person is needed</h3>
              <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">If the caller asks for a human, or the topic is sensitive, it dials the right person and gives a 10-second briefing first, so nobody repeats themselves.</p>
              <div className="mt-6 rounded-xl bg-[#0E1830] p-5 flex-1">
                <div className="flex items-center gap-3 text-sm">
                  <span className="px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">Elicia</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-indigo-400/60 to-slate-600" aria-hidden="true" />
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-100 border border-slate-700">Front desk</span>
                </div>
                <div className="mt-4 rounded-lg bg-slate-950/50 border border-[#1E2B47] p-4">
                  <div className="text-xs text-slate-500">What the front desk hears before connecting</div>
                  <p className="mt-1.5 text-sm text-slate-200 leading-relaxed">
                    "Maya Hossain, sensitive tooth. She is booked for Thursday at 2:30 and now wants to ask about payment plans."
                  </p>
                </div>
                <p className="mt-3 text-xs text-slate-500">The full transcript and sentiment are also sent to your dashboard.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#F8FAFC] pb-0">
      <section id="calculator" className="max-w-[1180px] mx-auto px-6 sm:px-8 scroll-mt-24">
        <div className="rounded-3xl bg-gradient-to-b from-[#070E1E] via-[#0B1427] to-[#070E1E] border border-slate-800 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Sliders Left */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  AI that pays for itself
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                  Find out in seconds how much time and money you could save with our custom AI Voice Agent.
                  No spreadsheets, no guesswork—just clear numbers that speak for themselves.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {/* Slider 1: Monthly Call Volume */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">Monthly call volume?</span>
                    <span className="text-indigo-300 font-bold text-sm">
                      {monthlyCalls.toLocaleString()} calls
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={monthlyCalls}
                    onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                    className="w-full accent-indigo-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>1,000 calls</span>
                    <span>100,000 calls</span>
                  </div>
                </div>

                {/* Slider 2: Avg. Call Duration */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">Avg. call duration?</span>
                    <span className="text-indigo-300 font-bold text-sm">
                      {avgCallDuration} min{avgCallDuration > 1 ? "s" : ""}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={avgCallDuration}
                    onChange={(e) => setAvgCallDuration(Number(e.target.value))}
                    className="w-full accent-indigo-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>1 min</span>
                    <span>20 mins</span>
                  </div>
                </div>

                {/* Slider 3: Rep Daily Talk Hours */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">Hours reps talk per day?</span>
                    <span className="text-indigo-300 font-bold text-sm">
                      {repDailyTalkHours} hour{repDailyTalkHours > 1 ? "s" : ""}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    step="0.5"
                    value={repDailyTalkHours}
                    onChange={(e) => setRepDailyTalkHours(Number(e.target.value))}
                    className="w-full accent-indigo-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>1 hour</span>
                    <span>8 hours</span>
                  </div>
                </div>

                {/* Slider 4: Rep's Yearly Salary */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">Rep&apos;s yearly salary?</span>
                    <span className="text-indigo-300 font-bold text-sm">
                      ${repYearlySalary.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20000"
                    max="100000"
                    step="5000"
                    value={repYearlySalary}
                    onChange={(e) => setRepYearlySalary(Number(e.target.value))}
                    className="w-full accent-indigo-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>$20,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                {/* Slider 5: Calls for AI to Manage */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">Calls for AI to manage?</span>
                    <span className="text-indigo-300 font-bold text-sm">
                      {aiManagePercent}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={aiManagePercent}
                    onChange={(e) => setAiManagePercent(Number(e.target.value))}
                    className="w-full accent-indigo-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>10%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculated Output Display Right */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-sm font-semibold text-slate-300">Your estimated impact</span>

                {/* Monthly Cost Savings */}
                <div className="mt-4 pt-4 border-t border-slate-800 space-y-1">
                  <div className="font-heading text-4xl sm:text-5xl font-black text-indigo-300 tracking-tight">
                    ${monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    In monthly costs saved
                  </div>
                  <p className="text-[11px] text-slate-400 italic pt-1">
                    Let&apos;s face it, who doesn&apos;t love saving money?
                  </p>
                </div>

                {/* Hours Saved Each Month */}
                <div className="mt-6 pt-6 border-t border-slate-800 space-y-1">
                  <div className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {monthlyHoursSaved.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Hours saved each month
                  </div>
                  <p className="text-[11px] text-slate-400 italic pt-1">
                    What will your team do with the extra time?
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-gradient-to-r from-[#172554] via-[#1E293B] to-[#334155] hover:from-[#1E3A8A] hover:to-[#475569] border border-slate-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  <span>Build this agent for your team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-[11px] text-center text-slate-400">
                  Full IP handover &middot; No recurring agency markups
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <div className="bg-[#F8FAFC] text-slate-900">
        {/* Industries: pick one, hear the call */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Tuned to your line of work</h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              The same agent learns your vocabulary, your compliance rules and the questions your callers actually ask. Pick a sector to see a sample call.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-5 lg:gap-8">
            <div role="tablist" aria-label="Industries" className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1">
              {SHOWN_INDUSTRIES.map((ind, n) => {
                const Icon = ind.icon;
                const active = n === industryIdx;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setIndustryIdx(n)}
                    className={`text-left shrink-0 lg:shrink rounded-xl border px-4 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${active ? "bg-[#0E1830] border-[#0E1830] text-white" : "bg-white border-slate-200 text-slate-900 hover:border-slate-300"}`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${active ? "text-indigo-300" : "text-slate-500"}`} aria-hidden="true" />
                      <span className="font-heading font-semibold whitespace-nowrap lg:whitespace-normal">{ind.name}</span>
                    </span>
                    <span className={`hidden lg:block mt-1.5 text-sm leading-relaxed ${active ? "text-slate-300" : "text-slate-600"}`}>{ind.description}</span>
                  </button>
                );
              })}
            </div>

            {(() => {
              const ind = SHOWN_INDUSTRIES[industryIdx];
              const call = INDUSTRY_CALLS[ind.id];
              return (
                <div key={ind.id} role="tabpanel" className="rounded-2xl bg-[#0E1830] border border-[#1E2B47] overflow-hidden shadow-xl shadow-slate-900/10">
                  <div className="px-5 py-3.5 border-b border-[#1E2B47] flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-200">Sample call: {ind.name}</span>
                    <span className="text-xs text-indigo-300">{ind.stat}</span>
                  </div>
                  <div className="px-5 py-6 space-y-5 min-h-[250px]">
                    {call.lines.map((line, n) => (
                      <div key={n} className={`pl-3 border-l-2 motion-safe:animate-[call-in_0.4s_ease-out_both] ${line.who === "agent" ? "border-indigo-400" : "border-slate-700"}`} style={{ animationDelay: `${n * 0.25}s` }}>
                        <div className={`text-xs font-medium ${line.who === "agent" ? "text-indigo-300" : "text-slate-500"}`}>{line.who === "agent" ? "Agent" : "Caller"}</div>
                        <p className={`mt-0.5 text-[15px] leading-relaxed ${line.who === "agent" ? "text-white" : "text-slate-300"}`}>{line.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-5 py-4 border-t border-[#1E2B47] bg-slate-950/30 flex flex-wrap gap-x-6 gap-y-2">
                    {call.outcome.map((o) => (
                      <span key={o} className="inline-flex items-center gap-2 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* Ownership: the system you end up holding */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">You own the whole system</h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Most platforms rent you minutes. We hand over the code, so after delivery your only costs are your phone carrier and the AI services you choose.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.3fr_auto_1fr] items-center gap-3 md:gap-4 text-center">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                <PhoneCall className="w-5 h-5 mx-auto text-slate-500" aria-hidden="true" />
                <div className="mt-2 font-heading font-semibold text-slate-900">Caller</div>
                <div className="text-sm text-slate-500">Any phone</div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 mx-auto rotate-90 md:rotate-0" aria-hidden="true" />
              <div className="rounded-xl bg-[#0E1830] text-white px-5 py-5 ring-4 ring-indigo-100 text-left">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-heading font-semibold">Your voice agent</span>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">Yours</span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                  <li>Source code and containers</li>
                  <li>Supervisor dashboard</li>
                  <li>Transcripts and call logs</li>
                </ul>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 mx-auto rotate-90 md:rotate-0" aria-hidden="true" />
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4">
                <Calendar className="w-5 h-5 mx-auto text-slate-500" aria-hidden="true" />
                <div className="mt-2 font-heading font-semibold text-slate-900">Your tools</div>
                <div className="text-sm text-slate-500">Calendar and CRM</div>
              </div>
            </div>
            <div className="mt-5 rounded-lg bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-600 text-center">
              Phone line: Twilio, Telnyx or any SIP trunk, billed to you at carrier rates.
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[15px] text-slate-600">Scoped within 24 hours and delivered in 2 to 4 weeks.</p>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Scope your build
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-[860px] mx-auto px-6 sm:px-8 pt-20 sm:pt-28">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Common questions</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {FAQ_SHORT.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded"
                  >
                    <span className="font-heading text-base sm:text-lg font-semibold text-slate-900">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {isOpen && <p className="pb-6 -mt-1 text-[15px] text-slate-600 leading-relaxed max-w-2xl">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing */}
        <section className="max-w-[1180px] mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <div className="rounded-2xl bg-[#070E1E] text-white px-8 py-12 sm:px-14 sm:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">Put an agent on your phone line</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">
                Tell us your call volume and the calendar you use. We scope the integration within 24 hours and talk to you directly, not through a sales team.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300">
                Schedule a 30-minute call
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center px-6 h-12 rounded-xl border border-slate-600 text-slate-100 text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300">
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
