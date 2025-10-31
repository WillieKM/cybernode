import "./globals.css";

export const metadata = {
  title: "Cyber-Node",
  description: "Proactive cybersecurity for SMBs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="font-semibold">Cyber-Node</a>
            <div className="flex gap-6 text-sm">
              <a href="/services" className="hover:underline">Services</a>
              <a href="/about" className="hover:underline">About</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t mt-20">
          <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-wrap items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Cyber-Node</div>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
