export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <p className="text-slate-600">Tell us what you need and we’ll get back to you.</p>
      <form className="space-y-4 max-w-xl">
        <input placeholder="Name" className="border p-2 rounded w-full" required />
        <input type="email" placeholder="Email" className="border p-2 rounded w-full" required />
        <textarea placeholder="Message" className="border p-2 rounded w-full" required />
        <button className="rounded px-4 py-2 bg-sky-600 text-white">Send</button>
      </form>
    </section>
  );
}
