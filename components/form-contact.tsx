"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="p-6 rounded border">✅ Thanks — we’ll reply shortly.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input name="name" placeholder="Name" className="border p-2 rounded w-full" required />
      <input name="email" type="email" placeholder="Email" className="border p-2 rounded w-full" required />
      <textarea name="message" placeholder="Message" className="border p-2 rounded w-full" required />
      <button className="rounded px-4 py-2 bg-sky-600 text-white">Send</button>
    </form>
  );
}
