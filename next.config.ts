import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking — stops your site being embedded in iframes on other domains
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Stop browsers guessing file types (MIME sniffing attacks)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Don't leak your URL to third-party sites via the Referer header
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Block camera, microphone, geolocation access by default
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Enforce HTTPS for 2 years, include subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Content Security Policy:
  // - default: only this origin
  // - scripts: self + Calendly CDN (required for booking widget)
  // - styles: self + Calendly CDN + unsafe-inline (required for inline styles in React)
  // - frames: Calendly embed
  // - connect: self only
  // - img: self + data URIs (for inline SVGs/icons)
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "frame-src https://calendly.com",
      "img-src 'self' data: https:",
      "connect-src 'self'",
      "font-src 'self' data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
