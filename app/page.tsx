export const metadata = {
  title: "Cyber-Node — Cybersecurity for growing businesses",
  description:
    "Pen testing, vulnerability management, incident response, and AI integration for SMBs.",
};

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          Cybersecurity built for growing businesses.
        </h1>
        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          Cyber-Node helps organizations identify, reduce, and prevent cyber threats
          through proactive testing, continuous vulnerability management, and
          AI-powered defense automation.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/contact" className="inline-flex items-center rounded-2xl px-6 py-3 font-medium shadow-sm bg-sky-600 text-white hover:bg-sky-700 transition">
            Schedule a consultation
          </a>
          <a href="/services" className="inline-flex items-center rounded-2xl px-6 py-3 font-medium border border-slate-300 hover:bg-slate-50">
            View our services
          </a>
        </div>
      </div>
      <div className="h-64 md:h-80 w-full rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100 border border-slate-200 flex items-center justify-center">
        <p className="text-slate-500 text-center px-4">
          “Securing your digital world with expertise, precision, and innovation.”
        </p>
      </div>
    </section>
  );
}
