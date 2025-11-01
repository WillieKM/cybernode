export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">AI Integration & Automation</h1>
      <p className="text-slate-600 text-lg leading-relaxed">
        Empower your security operations with intelligent automation. Cyber-Node
        integrates AI safely and effectively into existing workflows — from
        chatbots and document intelligence to predictive analytics and
        automated threat detection.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Capabilities</h2>
      <ul className="list-disc pl-6 text-slate-600 space-y-2">
        <li>AI-assisted security monitoring and risk analysis</li>
        <li>Chatbots and virtual assistants for SOC and IT teams</li>
        <li>Document understanding and automated data classification</li>
        <li>Predictive analytics for risk, capacity, and threat modeling</li>
        <li>Custom AI integrations across M365, Google Workspace, Slack, Jira, and more</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Our Approach</h2>
      <ol className="list-decimal pl-6 text-slate-600 space-y-2">
        <li><b>Discover:</b> Identify opportunities to safely apply AI.</li>
        <li><b>Design:</b> Architect and test secure, explainable solutions.</li>
        <li><b>Deploy:</b> Implement with clear guardrails and governance.</li>
        <li><b>Optimize:</b> Measure performance and continuously improve.</li>
      </ol>

      <a href="/contact" className="inline-flex items-center rounded-2xl px-6 py-3 font-medium shadow-sm bg-sky-600 text-white hover:bg-sky-700">
        Schedule an AI consultation
      </a>
    </section>
  );
}
