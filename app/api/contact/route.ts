import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({} as any));
  const { name, email, message, ["h-captcha-response"]: token } = body || {};

  if (!name || !email || !message)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  if (!token)
    return NextResponse.json({ error: "Missing captcha" }, { status: 400 });

  const verify = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET || "",
      response: String(token),
    }),
  }).then((r) => r.json());

  if (!verify.success)
    return NextResponse.json({ error: "Captcha failed" }, { status: 400 });

  return NextResponse.json({ ok: true });
}
