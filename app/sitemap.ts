export default async function sitemap() {
  const base = "https://cybernode.vercel.app"; // swap to your domain after connecting
  const routes = ["", "/services", "/services/ai-integration", "/services/penetration-testing",
                  "/services/vulnerability-management", "/services/incident-response",
                  "/services/compliance", "/about", "/contact", "/privacy", "/terms"];
  const now = new Date().toISOString();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1.0 : 0.7,
  }));
}
