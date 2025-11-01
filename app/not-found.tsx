export default function NotFound() {
  return (
    <section className="min-h-[60vh] max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight">404</h1>
      <p className="mt-2 text-slate-600">We couldn’t find that page.</p>
      <a href="/" className="inline-flex items-center mt-6 rounded-2xl px-5 py-3 font-medium shadow-sm bg-sky-500 text-white hover:bg-sky-600">
        Back to home
      </a>
    </section>
  );
}
