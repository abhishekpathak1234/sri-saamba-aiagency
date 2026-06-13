import { Mail, MapPin, Clock, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20 bg-[#080b12] min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(107,56,196,0.12) 0%, rgba(26,79,187,0.07) 40%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Free 30-Min Strategy Call
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 text-white">
            Book Your Free{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)",
              }}
            >
              Consultation
            </span>
          </h1>
          <p className="text-white/45 text-lg leading-relaxed max-w-xl mx-auto">
            Tell us about your business. We&apos;ll respond within 24 hours with
            a tailored AI strategy built around your goals.
          </p>
        </div>
      </section>

      {/* Embedded Google Form */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto" style={{ maxWidth: 800 }}>
          {/* Glassmorphism wrapper */}
          <div
            className="rounded-3xl overflow-hidden border border-white/10"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 0 80px rgba(99,102,241,0.12), 0 40px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Form header strip */}
            <div
              className="px-6 py-4 border-b border-white/6 flex items-center gap-3"
              style={{
                background:
                  "linear-gradient(90deg, rgba(107,56,196,0.15), rgba(26,79,187,0.10), transparent)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #6B38C4 0%, #1A4FBB 100%)",
                }}
              >
                S
              </div>
              <div>
                <div className="text-white text-sm font-semibold">
                  Sri Saamba AI — Free Strategy Session
                </div>
                <div className="text-white/35 text-xs">
                  Secure · Confidential · Response within 24 hours
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open
              </div>
            </div>

            {/* Google Form iframe */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf8qiikxzAqLwi42HKvChSZ8buP0yIkgcuyqq-hrFC40xdEOQ/viewform?embedded=true"
              width="100%"
              height="1100"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="block w-full"
              style={{ minHeight: 1100 }}
              title="Sri Saamba AI — Free Consultation Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      {/* Trust signals strip */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto" style={{ maxWidth: 800 }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Shield,
                title: "Enterprise-grade security",
                sub: "Your data is encrypted and never shared.",
              },
              {
                icon: Clock,
                title: "Response within 24 hours",
                sub: "Monday – Friday, 9 am – 6 pm.",
              },
              {
                icon: Mail,
                title: "Direct line",
                sub: "hello@srisaamba.com",
                href: "mailto:hello@srisaamba.com",
              },
            ].map(({ icon: Icon, title, sub, href }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-4 rounded-2xl border border-white/6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(107,56,196,0.3), rgba(26,79,187,0.3))",
                    border: "1px solid rgba(139,92,246,0.2)",
                  }}
                >
                  <Icon className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <div className="text-white/70 text-sm font-medium mb-0.5">
                    {title}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-white/35 text-xs hover:text-white/60 transition-colors"
                    >
                      {sub}
                    </a>
                  ) : (
                    <div className="text-white/35 text-xs">{sub}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Location note */}
          <div className="flex items-center justify-center gap-2 mt-6 text-white/20 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            Remote-first · Serving clients globally
          </div>
        </div>
      </section>
    </div>
  );
}
