export default function Privacy() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-20 space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="text-slate-600">
        Your privacy is important to us. Cyber-Node collects only the data necessary to provide 
        our services, ensure security, and maintain communication with clients.
      </p>
      <ul className="list-disc pl-6 text-slate-600 space-y-2">
        <li>We do not sell or share your personal data.</li>
        <li>All collected information is encrypted and stored securely.</li>
        <li>We comply with GDPR, CCPA, and other applicable privacy laws.</li>
      </ul>
      <p className="text-slate-600">
        For inquiries about your data, contact our Data Protection Officer at privacy@cyber-node.com.
      </p>
    </section>
  );
}
