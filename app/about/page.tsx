export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">About Cyber-Node</h1>
        <p className="mt-3 text-slate-600 text-lg leading-relaxed">
          We’re a security-focused engineering team helping small and mid-sized
          businesses reduce risk, harden infrastructure, and ship with confidence.
          Our work blends offensive testing, modern defense, and practical AI
          automation—no theater, just measurable outcomes.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What we do</h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Penetration testing and secure architecture reviews</li>
          <li>Continuous vulnerability management and patch cadence</li>
          <li>Incident response readiness and on-call support</li>
          <li>Compliance enablement (NIST CSF, SOC 2, HIPAA, PCI)</li>
          <li>AI integration & automation for security and operations</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Our principles</h2>
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li><b>Outcome-driven:</b> findings translate to fixes, not just reports.</li>
          <li><b>Security first:</b> least privilege, strong defaults, defense-in-depth.</li>
          <li><b>Explainable AI:</b> guardrails, privacy, and clear human oversight.</li>
          <li><b>Right-sized:</b> solutions that fit your stack, budget, and team.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How we work</h2>
        <ol className="list-decimal pl-5 text-slate-700 space-y-2">
          <li><b>Discover:</b> align on risks, assets, and goals.</li>
          <li><b>Assess:</b> test, baseline, and prioritize remediation.</li>
          <li><b>Implement:</b> close gaps, add monitoring, tune alerts.</li>
          <li><b>Enable:</b> hand off playbooks, dashboards, and training.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Tooling & platforms</h2>
        <p className="text-slate-700">
          We work across AWS, Azure, GCP, Microsoft 365, Google Workspace, Slack,
          Jira, CrowdStrike, SentinelOne, Defender, Tenable, Qualys, and more.
        </p>
      </section>

      <a
        href="/contact"
        className="inline-flex items-center rounded-2xl px-6 py-3 font-medium shadow-sm bg-sky-600 text-white hover:bg-sky-700"
      >
        Talk to an engineer
      </a>
    </section>
  );
}
