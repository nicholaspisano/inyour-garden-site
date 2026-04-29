"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://formspree.io/f/xaqvwbdl", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(e.currentTarget),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-stone-200 bg-white px-8 py-8 max-w-lg mx-auto text-center space-y-3">
        <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto">
          <Mail size={18} className="text-green-600" />
        </div>
        <p className="text-sm font-semibold text-stone-800">Message sent</p>
        <p className="text-sm text-stone-500">We'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-stone-200 bg-white px-8 py-8 max-w-lg mx-auto space-y-4">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-stone-900">Get in touch</h2>
        <p className="text-stone-500 text-sm leading-relaxed">
          Have a question or ready to get started? We'll get back to you shortly.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-medium text-stone-600">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-stone-600">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-xs font-medium text-stone-600">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600 resize-none"
            placeholder="What are you looking for?"
          />
        </div>
        {status === "error" && (
          <p className="text-xs text-red-500">Something went wrong — email us directly at hello@inyour.garden</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800 transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
