export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Proactive cybersecurity for SMBs
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Pen tests, vulnerability management, and incident response — delivered by senior engineers.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/contact" className="inline-flex items-center rounded-2xl px-5 py-3 font-medium shadow-sm bg-sky-500 text-white hover:bg-sky-600 transition">
            Book a 15-min consult
          </a>
          <a href="/services" className="inline-flex items-center rounded-2xl px-5 py-3 font-medium border border-slate-300 hover:bg-slate-50">
            Explore services
          </a>
        </div>
      </div>
      <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-blue-100 to-sky-50 border border-slate-200" />
    </section>
  );
}
