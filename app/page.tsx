export const metadata = {
  title: "Cyber-Node — Proactive cybersecurity for growing businesses",
  description:
    "Pen testing, vulnerability management, incident response, and secure AI integration for SMBs.",
};

export default function Home() {
  const highlights = [
    { title: "Penetration Testing", blurb: "Expose real-world risk with targeted offensive testing." },
    { title: "Vulnerability Management", blurb: "Continuous discovery, triage, and remediation tracking." },
    { title: "Incident Response", blurb: "On-call containment, forensics, and recovery playbooks." },
    { title: "AI Integration", blurb: "Secure, explainable automation for ops and security teams." },
  ];

  const proof = [
    "Security-first engineering",
    "Outcome-driven reporting",
    "Right-sized to your stack",
    "Cloud + M365 + Google",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-10 items-center py-20">
        <div>
          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            Proactive cybersecurity for SMBs.
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Reduce risk, harden your cloud, and ship with confidence. Cyber-Node blends
            offensive testing, continuous vulnerability management, incident readiness,
            and secure AI integration—focused on measurable outcomes, not theater.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-medium shadow-sm bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              Book a 15-min consult
            </a>
            <a
              href="/services"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-medium border border-slate-300 hover:bg-slate-50"
            >
              Explore services
            </a>
          </div>

          {/* Quick proof points */}
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
            {proof.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" /> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual placeholder */}
        <div className="h-72 md:h-80 w-full rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 border border-slate-200 flex items-center justify-center">
          <p className="text-slate-500 text-center px-6">
            “Securing your digital world with expertise, precision, and innovation.”
          </p>
        </div>
      </div>

      {/* Services preview */}
      <div className="py-12 border-t">
        <h2 className="text-2xl font-semibold tracking-tight">What we do</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <a
              key={h.title}
              href={
                h.title === "Penetration Testing"
                  ? "/services/penetration-testing"
                  : h.title === "Vulnerability Management"
                  ? "/services/vulnerability-management"
                  : h.title === "Incident Response"
                  ? "/services/incident-response"
                  : "/services/ai-integration"
              }
              className="block rounded-2xl border border-slate-200 p-5 hover:shadow-md transition"
            >
              <div className="font-semibold">{h.title}</div>
              <p className="text-slate-600 mt-2 text-sm">{h.blurb}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 border-t">
        <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50">
          <h3 className="text-xl font-semibold">Ready to reduce risk?</h3>
          <p className="text-slate-600 mt-2">
            Get a fast assessment of your current posture and a prioritized action plan.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center rounded-2xl px-6 py-3 font-medium shadow-sm bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              Talk to an engineer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

