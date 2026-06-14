"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Zap } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

function openCalendly() {
  (window as any).Calendly?.initPopupWidget({
    url: "https://calendly.com/business-srisaamba/30min",
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
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Zap className="w-4.5 h-4.5 text-white" fill="white" />
            </div>
            <span className="text-base font-semibold tracking-tight">
              <span className="text-white">Sri Saamba</span>
              <span className="text-blue-400"> AI</span>
            </span>
          </Link>

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
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
                boxShadow: "0 0 20px rgba(255,92,26,0.3)",
              }}
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-[#0d1117] border-white/10 p-0">
              <div className="flex items-center px-5 pt-5 pb-4 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" fill="white" />
                  </div>
                  <span className="text-sm font-semibold text-white">Sri Saamba <span className="text-blue-400">AI</span></span>
                </Link>
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
              <div className="px-4 pb-6">
                <button
                  onClick={() => { setOpen(false); openCalendly(); }}
                  className="flex items-center justify-center w-full py-2.5 rounded-full text-white text-sm font-semibold transition-all"
                  style={{ background: "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)" }}
                >
                  Book Free Demo
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
