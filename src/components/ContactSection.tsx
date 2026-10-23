"use client";

import React, { useState } from "react";
import { Check, Copy, Send, Loader2, AlertCircle, Sparkles } from "lucide-react";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";

const AGENCY_EMAIL = "rmtumon@gmail.com";

const field =
  "w-full h-12 px-4 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder-slate-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-600 focus-visible:border-blue-600 transition-colors";
const label = "block text-sm font-semibold text-slate-900 mb-1.5";

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    projectType: "Website or online shop",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(AGENCY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission error:", err);
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      projectType: "Website or online shop",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.12)]">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950">Send us a message</h2>
          <p className="mt-1.5 text-base text-slate-600 leading-relaxed">
            A few lines is enough. We will ask for anything else on the call.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Direct background delivery</span>
        </div>
      </div>

      {status === "success" ? (
        <div role="status" className="mt-8 rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/50 to-white p-8 text-center animate-in fade-in duration-300">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
            <Check className="w-7 h-7" aria-hidden="true" />
          </div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Delivered directly to inbox</span>
          </div>
          <h3 className="mt-3 font-heading text-2xl font-bold text-slate-950">Message Sent Successfully!</h3>
          <p className="mt-2 text-base text-slate-600 leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-slate-900">{data.name}</strong>. Sharmin and Rafi have received your brief and will review it directly. Expect a personalized response at <strong className="text-slate-900">{data.email}</strong> within one working day.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Write another message</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-8 space-y-5">
          {status === "error" && (
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50 text-rose-800 flex items-start gap-3 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
              <div className="flex-1">
                <p className="font-semibold">{errorMessage || "Something went wrong while sending."}</p>
                <p className="mt-1 text-xs text-rose-700">
                  You can try again or directly email us at <a href={`mailto:${AGENCY_EMAIL}`} className="underline font-semibold">{AGENCY_EMAIL}</a>.
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="c-name" className={label}>Your name or company</label>
              <input
                id="c-name"
                type="text"
                required
                autoComplete="name"
                disabled={status === "sending"}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Alex Johnson, GreenGeo"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="c-email" className={label}>Email</label>
              <input
                id="c-email"
                type="email"
                required
                autoComplete="email"
                disabled={status === "sending"}
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="alex@example.com"
                className={field}
              />
            </div>
          </div>

          <div>
            <label htmlFor="c-type" className={label}>What do you need?</label>
            <select
              id="c-type"
              value={data.projectType}
              disabled={status === "sending"}
              onChange={(e) => setData({ ...data, projectType: e.target.value })}
              className={field}
            >
              <option>Website or online shop</option>
              <option>AI assistant or document tool</option>
              <option>Voice agent or computer vision</option>
              <option>Maps, satellite or LiDAR analysis</option>
              <option>Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="c-message" className={label}>Tell us about the project</label>
            <textarea
              id="c-message"
              rows={5}
              required
              disabled={status === "sending"}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="What problem are you solving, what data or systems are involved, and when do you need it?"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder-slate-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-600 focus-visible:border-blue-600 transition-colors resize-y disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 h-12 rounded-xl bg-slate-950 hover:bg-slate-800 disabled:bg-slate-700 text-white text-sm font-semibold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-blue-400" aria-hidden="true" />
                <span>Sending directly...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send message</span>
              </>
            )}
          </button>
        </form>
      )}

      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">Prefer direct email?</p>
          <p className="text-base font-semibold text-slate-950 truncate">{AGENCY_EMAIL}</p>
        </div>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 px-4 h-10 rounded-xl border border-slate-300 hover:border-slate-500 text-slate-800 text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
          <span>{copied ? "Copied" : "Copy email"}</span>
        </button>
      </div>
    </div>
  );
}
