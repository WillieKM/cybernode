import ContactForm from "../../components/form-contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto px-4 py-16 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-slate-600">Tell us what you need and we’ll get back to you.</p>
        <ContactForm />
      </section>
    </main>
  );
}
