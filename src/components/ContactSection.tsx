"use client";

import React, { useState } from "react";
import { Check, Copy, Send } from "lucide-react";
import { AGENCY_DISPLAY_NAME } from "@/data/agencyData";

const AGENCY_EMAIL = "rmtumon@gmail.com";

const field =
  "w-full h-12 px-4 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder-slate-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-600 focus-visible:border-blue-600 transition-colors";
const label = "block text-sm font-semibold text-slate-900 mb-1.5";

// Opens the visitor's mail app with a pre-filled message.
export default function ContactSection() {
  const [sent, setSent] = useState(false);
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${AGENCY_DISPLAY_NAME}] ${data.projectType} - ${data.name}`);
    const body = encodeURIComponent(
      `Hello Sharmin & Rafi,\n\nMy name is ${data.name} (${data.email}).\n\nType of project: ${data.projectType}\n\n${data.message}\n\nThank you!`
    );
    window.location.href = `mailto:${AGENCY_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-[0_8px_30px_-14px_rgba(15,23,42,0.12)]">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-950">Send us a message</h2>
      <p className="mt-1.5 text-base text-slate-600 leading-relaxed">
        A few lines is enough. We will ask for anything else on the call.
      </p>

      {sent ? (
        <div role="status" className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-950 text-white flex items-center justify-center">
            <Check className="w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-bold text-slate-950">Your email is ready to send</h3>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            We opened your mail app with the message filled in. If nothing opened, write to us at {AGENCY_EMAIL}.
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-5 text-sm font-semibold text-[#1E3A8A] underline underline-offset-4 cursor-pointer"
          >
            Write another message
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="c-name" className={label}>Your name or company</label>
              <input
                id="c-name"
                type="text"
                required
                autoComplete="name"
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
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="What problem are you solving, what data or systems are involved, and when do you need it?"
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 text-base placeholder-slate-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-blue-600 focus-visible:border-blue-600 transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 h-12 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
            <span>Send message</span>
          </button>
        </form>
      )}

      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">Prefer email?</p>
          <p className="text-base font-semibold text-slate-950 truncate">{AGENCY_EMAIL}</p>
        </div>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 px-4 h-10 rounded-xl border border-slate-300 hover:border-slate-500 text-slate-800 text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
          <span>{copied ? "Copied" : "Copy email"}</span>
        </button>
      </div>
    </div>
  );
}
