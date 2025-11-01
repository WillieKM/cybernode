/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Content Security Policy (tight baseline)
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "img-src 'self' data: https:",
              "script-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data: https:",
              "connect-src 'self' https:",
              "frame-ancestors 'none'",
              "base-uri 'none'",
              "form-action 'self'",
            ].join("; "),
          },
          // Additional hardening
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // HSTS: effective on HTTPS (Vercel preview/prod). Safe to ship.
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Lock down powerful APIs by default
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
