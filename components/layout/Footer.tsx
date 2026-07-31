"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AlgoBrandLogoFooter } from "@/components/brand/AlgoBrandLogo";

// Plain <img> with a hardcoded /easyai prefix -- see Navbar.tsx comment for why.
const siblingProducts = [
  {
    key: "auto",
    label: "Algo Auto",
    href: "/auto",
    icon: "/easyai/algo-auto-icon.png",
    self: false,
  },
  {
    key: "realty",
    label: "Algo Realty",
    href: "/realty",
    icon: "/easyai/algo-realty-icon.png",
    self: false,
  },
  {
    key: "easy",
    label: "Algo Easy",
    href: "/",
    icon: "/easyai/algo-easy-icon.png",
    self: true,
  },
] as const;

const services = [
  { label: "AI Voice & Chat Agents", href: "/services#voice-agents" },
  { label: "Workflow Automation", href: "/services#workflow" },
  { label: "CRM Automation", href: "/services#crm" },
  { label: "Smart Scheduling", href: "/services#scheduling" },
  { label: "Email & Follow-Up", href: "/services#email" },
  { label: "Real-Time Dashboards", href: "/services#dashboards" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const faqs = [
  {
    q: "How secure is our data?",
    a: "All data is encrypted in transit and at rest using AES-256. We are SOC 2 Type II compliant and operate on enterprise-grade cloud infrastructure. Your data is never shared with third parties.",
  },
  {
    q: "Do you train models using customer information?",
    a: "No. We do not use your business data to train any AI models. Your conversations, leads, and operational data remain entirely yours and are never used outside of your implementation.",
  },
  {
    q: "How quickly can implementation begin?",
    a: "Most clients go live within 5–10 business days. Our onboarding process includes a strategy session, integration setup, and training — all handled by our team so you can stay focused on running your business.",
  },
  {
    q: "Can AI integrate with our existing systems?",
    a: "Yes. Sri Saamba AI integrates natively with leading CRMs including HubSpot, Salesforce, and GoHighLevel, as well as calendaring tools, WhatsApp, SMS, email platforms, and thousands more via Zapier and Make.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/6 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-white/60 hover:text-white/80 text-sm font-medium transition-colors"
      >
        {q}
        <ChevronDown
          className={`w-4 h-4 text-white/30 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-white/35 text-sm leading-relaxed pr-8">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#070a10] border-t border-white/5">
      {/* FAQ strip */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-white/25 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          FAQ
        </p>
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>

      {/* Main footer */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-5">
                <AlgoBrandLogoFooter
                  src="/algo-easy-logo-v2.png"
                  href="/"
                  alt="Algo Easy"
                />
              </div>
              <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
                Enterprise AI systems that answer calls, qualify leads, automate
                workflows, and drive measurable revenue — without adding
                headcount.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/6 transition-colors text-white/35 hover:text-white/60"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/6 transition-colors text-white/35 hover:text-white/60"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.855L1.254 2.25H8.08l4.256 5.626L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-semibold text-white/30 mb-5 uppercase tracking-[0.15em]">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-semibold text-white/30 mb-5 uppercase tracking-[0.15em]">
                Company
              </h4>
              <ul className="space-y-3">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-semibold text-white/30 mb-5 uppercase tracking-[0.15em]">
                Products
              </h4>
              <ul className="space-y-1">
                {siblingProducts.map((p) => {
                  const row = (
                    <>
                      <img
                        src={p.icon}
                        alt={p.label}
                        width={24}
                        height={24}
                        className="h-5 w-5 lg:h-6 lg:w-6 shrink-0 rounded-full object-cover"
                      />
                      <span className="flex items-center gap-1.5">
                        {p.self && (
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/50"
                          />
                        )}
                        {p.label}
                      </span>
                    </>
                  );
                  const rowClass = `-ml-1.5 flex cursor-pointer items-center gap-2.5 rounded-lg px-1.5 py-1 text-sm transition-colors hover:bg-white/5${p.self ? " bg-white/5 text-white/90" : " text-white/40 hover:text-white/70"}`;
                  return (
                    <li key={p.key}>
                      {p.self ? (
                        <Link href={p.href} className={rowClass}>
                          {row}
                        </Link>
                      ) : (
                        <a href={p.href} className={rowClass}>
                          {row}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold text-white/30 mb-5 uppercase tracking-[0.15em]">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:abhishek@algobridge.cc"
                    className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-start gap-2"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-purple-400/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    abhishek@algobridge.cc
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918054430418"
                    className="text-sm text-white/40 hover:text-white/70 transition-colors flex items-start gap-2"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-purple-400/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +91 8054430418
                  </a>
                </li>
                <li className="text-sm text-white/30 flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-1 shrink-0 text-purple-400/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="leading-relaxed">
                    SRI SAAMBA PARMESHWARA INDUSTRIES PRIVATE LIMITED
                    <br />
                    SIERRA CARTEL 1207/343, 9th Main Rd, Sector-7,
                    <br />
                    HSR Layout, Bangalore South,
                    <br />
                    Bangalore- 560102, Karnataka
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} AlgoBridge AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://algobridge.cc/privacy.html"
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                Privacy
              </a>
              <a
                href="https://algobridge.cc/terms.html"
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                Terms
              </a>
              <a
                href="https://algobridge.cc/realty/security"
                className="text-xs text-white/20 hover:text-white/40 transition-colors"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
