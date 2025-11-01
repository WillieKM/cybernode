export const metadata = {
  metadataBase: new URL("https://cybernode.vercel.app"), // temp; swap to your domain later
  title: {
    default: "Cyber-Node",
    template: "%s · Cyber-Node",
  },
  description: "Proactive cybersecurity for SMBs: pen testing, vuln mgmt, incident response, and AI integration.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    siteName: "Cyber-Node",
    type: "website",
    title: "Cyber-Node",
    description: "Proactive cybersecurity for SMBs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber-Node",
    description: "Proactive cybersecurity for SMBs.",
  },
};
