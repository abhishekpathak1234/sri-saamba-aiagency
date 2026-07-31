"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlgoBrandLogoNav } from "@/components/brand/AlgoBrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

// Plain <img> with a hardcoded /easyai prefix -- next/image's basePath
// handling doesn't reach the internal source fetch on this Next.js version
// (confirmed: the optimizer 400s even on the existing brand logo), so we
// bypass it here rather than ship broken cross-product icons.
const siblingProducts = [
  {
    key: "auto",
    label: "Algo Auto AI",
    sub: "AI Employees for Dealerships",
    href: "/auto",
    icon: "/easyai/algo-auto-icon.png",
    self: false,
  },
  {
    key: "realty",
    label: "Algo Realty AI",
    sub: "AI Employees for Real Estate",
    href: "/realty",
    icon: "/easyai/algo-realty-icon.png",
    self: false,
  },
  {
    key: "easy",
    label: "Algo Easy AI",
    sub: "AI Automation Platform for Small Businesses",
    href: "/",
    icon: "/easyai/algo-easy-icon.png",
    self: true,
  },
] as const;

function ProductsMenu() {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex cursor-pointer items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-white/60 transition-all duration-200 hover:text-white"
      >
        Products
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-[70] mt-3 w-72 -translate-x-1/2 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <div className="rounded-xl border border-white/10 bg-[#0d1117]/95 p-2 shadow-2xl backdrop-blur-xl">
          {siblingProducts.map((p) => {
            const row = (
              <>
                <img
                  src={p.icon}
                  alt={p.label}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    {p.self && (
                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60"
                      />
                    )}
                    {p.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-white/40">
                    {p.sub}
                  </span>
                </span>
              </>
            );
            const rowClass = `flex cursor-pointer items-center gap-4 rounded-lg px-2 py-2.5 transition-colors hover:bg-white/5${p.self ? " bg-white/5" : ""}`;
            return p.self ? (
              <Link key={p.key} href={p.href} className={rowClass}>
                {row}
              </Link>
            ) : (
              <a key={p.key} href={p.href} className={rowClass}>
                {row}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function openCalendly() {
  (window as any).Calendly?.initPopupWidget({
    url: "https://calendly.com/abhishek-algobridge/30min",
  });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0d14]/95 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">
          <div className="flex items-center lg:gap-8">
            <AlgoBrandLogoNav
              src="/algo-easy-logo-v2.png"
              href="/"
              alt="Algo Easy"
            />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ProductsMenu />
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={openCalendly}
              className="inline-flex cursor-pointer items-center justify-center px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
                boxShadow: "0 0 20px rgba(255,92,26,0.3)",
              }}
            >
              Book a Discovery Call
            </button>
          </div>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden inline-flex cursor-pointer items-center justify-center w-9 h-9 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-[#0d1117] border-white/10 p-0"
            >
              <div
                className="flex items-center px-5 pt-5 pb-4 border-b border-white/10"
                onClick={() => setOpen(false)}
              >
                <AlgoBrandLogoNav
                  src="/algo-easy-logo-v2.png"
                  href="/"
                  alt="Algo Easy"
                />
              </div>
              <nav className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-white/10 p-4">
                <div className="mb-1 px-1 text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
                  Products
                </div>
                {siblingProducts.map((p) => {
                  const row = (
                    <>
                      <img
                        src={p.icon}
                        alt={p.label}
                        width={40}
                        height={40}
                        className="h-10 w-10 shrink-0 rounded-full object-cover"
                      />
                      <span className="flex min-w-0 flex-1 items-center gap-1.5 text-sm text-white/70">
                        {p.self && (
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60"
                          />
                        )}
                        {p.label}
                      </span>
                    </>
                  );
                  const rowClass = `flex cursor-pointer items-center gap-4 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5${p.self ? " bg-white/5" : ""}`;
                  return p.self ? (
                    <Link
                      key={p.key}
                      href={p.href}
                      onClick={() => setOpen(false)}
                      className={rowClass}
                    >
                      {row}
                    </Link>
                  ) : (
                    <a
                      key={p.key}
                      href={p.href}
                      onClick={() => setOpen(false)}
                      className={rowClass}
                    >
                      {row}
                    </a>
                  );
                })}
              </div>
              <div className="px-4 pb-6">
                <button
                  onClick={() => {
                    setOpen(false);
                    openCalendly();
                  }}
                  className="flex cursor-pointer items-center justify-center w-full py-2.5 rounded-full text-white text-sm font-semibold transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
                  }}
                >
                  Book a Discovery Call
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
