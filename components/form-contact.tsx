"use client";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token) return alert("Please complete captcha");
    setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, "h-captcha-response": token }),
    });
    setLoading(false);
    if (res.ok) setSent(true);
    else alert("Submit failed");
  }

  if (sent) return <p className="p-6 rounded border">✅ Thanks — we’ll reply shortly.</p>;

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input name="name" placeholder="Name" className="border p-2 rounded w-full" required />
      <input name="email" type="email" placeholder="Email" className="border p-2 rounded w-full" required />
      <textarea name="message" placeholder="Message" className="border p-2 rounded w-full" required />
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY ?? "10000000-ffff-ffff-ffff-000000000001"}
        onVerify={(t) => setToken(t)}
      />
      <button className="rounded px-4 py-2 bg-sky-600 text-white" disabled={!token || loading}>
        {loading ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
