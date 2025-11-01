export default function Services() {
  const items = [
    { href: "/services/penetration-testing", title: "Penetration Testing", blurb: "Offensive testing to expose real risk." },
    { href: "/services/vulnerability-management", title: "Vulnerability Management", blurb: "Continuous discovery & remediation." },
    { href: "/services/incident-response", title: "Incident Response", blurb: "On-call IR with 1-hour SLA." },
    { href: "/services/compliance", title: "Compliance Readiness", blurb: "NIST CSF, SOC2, HIPAA, PCI." },
    { href: "/services/ai-integration", title: "AI Integration & Automation", blurb: "Secure chatbots, document AI, workflows." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Our Expertise</h1>
      <p className="mt-4 text-slate-600 max-w-2xl">
        Cyber-Node provides full-spectrum cybersecurity and AI-driven automation services.
        Each engagement is led by senior engineers focused on measurable results.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map(s => (
          <a key={s.href} href={s.href} className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition">
            <div className="font-semibold">{s.title}</div>
            <p className="text-slate-600 mt-2">{s.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
