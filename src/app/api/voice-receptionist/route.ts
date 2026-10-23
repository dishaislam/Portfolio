import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, history, persona } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || "";

    const isMark = persona === "mark";
    const agentName = isMark ? "Mark" : "Elicia";
    const agentRole = isMark
      ? "Senior AI Sales & Lead Qualification Specialist at Utsho"
      : "Senior Inbound Support & Appointment Scheduling Specialist at Utsho";

    const systemInstruction = `You are ${agentName}, the ${agentRole}. Utsho is an independent engineering consultancy founded by Sharmin Islam Disha and Rafi Mahmud Tumon.
Your persona is exceptionally polite, knowledgeable, articulate, warm, and helpful. You speak naturally like an experienced professional, avoiding stiff corporate jargon.

${
  isMark
    ? `Your focus as Mark:
- Inbound sales inquiries, solution scoping, project budgeting, and lead qualification.
- You explain how Utsho builds AI Voice Agents, Virtual Try-On systems, and Satellite/LiDAR Geospatial engines with 100% full source code handover.
- You can explain cost savings (how automated voice handling saves up to 80% on call operations) and invite high-intent prospects to book a discovery sprint with founders Sharmin and Rafi.`
    : `Your focus as Elicia:
- 24/7 inbound customer support, FAQ resolution, automated calendar scheduling, and call routing.
- You can look up available slots, confirm meetings, resolve inquiries about Utsho's engineering services, and offer warm transfers to human specialists with full context.
- You reassure callers that their appointment will be confirmed with Google Calendar and SMS notifications.`
}

Key Studio Facts:
- Founders: Sharmin Islam Disha (GIS & remote sensing specialist) and Rafi Mahmud Tumon (Senior AI engineer, ex-German Aerospace Center DLR).
- Offerings: Turnkey production software with 100% IP & source code ownership handed over. Delivery in 2 to 4 weeks.

Crucial Voice Instructions:
- Keep your answers CONCISE: exactly 1 to 2 short sentences (under 32 words), because your reply is spoken aloud in real-time over the phone.
- Do NOT use markdown symbols, asterisks, bullet points, numbered lists, or emojis since they cannot be spoken naturally.
- Speak in clear, professional English (or polite Bengali if addressed in Bengali).
- Conclude naturally by offering to schedule a free 30-minute discovery call with Sharmin and Rafi.`;

    const contents = [
      ...(Array.isArray(history) ? history : []),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }],
          },
          contents,
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      return NextResponse.json({
        reply: isMark
          ? "Hi, I am Mark with Utsho sales. We engineer custom AI voice agents and web platforms with full code ownership. Would you like to discuss your project?"
          : "Hello! I am Elicia with Utsho support. I can answer your questions, book an appointment, or route your call. How can I help you today?",
      });
    }

    const data = await response.json();
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      (isMark
        ? "Hi, I am Mark with Utsho sales. We engineer custom AI voice agents and web platforms with full code ownership. Would you like to discuss your project?"
        : "Hello! I am Elicia with Utsho support. I can answer your questions, book an appointment, or route your call. How can I help you today?");

    const cleanSpeech = replyText.replace(/[*_#`~]/g, "").replace(/\s+/g, " ").trim();

    // Generate natural human voice audio via neural TTS
    let audioBase64: string | null = null;
    const openaiKey = process.env.OPENAI_API_KEY || "";

    if (openaiKey) {
      try {
        const ttsRes = await fetch("https://api.openai.com/v1/audio/speech", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${openaiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "tts-1-hd",
            voice: isMark ? "onyx" : "shimmer", // Mark = deep professional male voice, Elicia = warm natural female voice
            input: cleanSpeech,
          }),
        });

        if (ttsRes.ok) {
          const arrayBuffer = await ttsRes.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          audioBase64 = `data:audio/mp3;base64,${buffer.toString("base64")}`;
        } else {
          console.error("OpenAI TTS error status:", ttsRes.status);
        }
      } catch (ttsErr) {
        console.warn("Neural TTS fetch failed:", ttsErr);
      }
    }

    return NextResponse.json({ reply: cleanSpeech, audio: audioBase64 });
  } catch (error) {
    console.error("Voice receptionist error:", error);
    return NextResponse.json({
      reply:
        "Hello! We engineer production AI voice systems, virtual try-on, and satellite geospatial analysis. Would you like to schedule a free call with our founders?",
    });
  }
}
