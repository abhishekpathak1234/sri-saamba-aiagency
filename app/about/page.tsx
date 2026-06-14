"use client";

import { Card, CardContent } from "@/components/ui/card";
import IndustriesSection from "@/components/home/IndustriesSection";

const values = [
  {
    title: "Innovation First",
    description:
      "We stay at the cutting edge of AI technology so our clients always have access to the most powerful solutions available.",
    icon: "🚀",
  },
  {
    title: "Radical Transparency",
    description:
      "No black boxes. We explain how our AI systems work, what drives their decisions, and how performance is measured.",
    icon: "🔍",
  },
  {
    title: "Relentless Excellence",
    description:
      "We don't just ship and forget. Every solution is monitored, optimized, and improved continuously over time.",
    icon: "⚡",
  },
  {
    title: "True Partnership",
    description:
      "We're invested in your success, not just your invoice. Your growth is our growth — we measure our success by yours.",
    icon: "🤝",
  },
];

const stats = [
  { value: "2023", label: "Founded" },
  { value: "50+", label: "Clients Served" },
  { value: "22", label: "Engineers" },
  { value: "4", label: "Countries" },
];

const teamStats = [
  { value: "22", label: "Engineers & AI specialists" },
  { value: "4", label: "Countries served" },
  { value: "50+", label: "AI agents deployed" },
  { value: "< 7 days", label: "Average time to go live" },
];

function openCalendly() {
  (window as any).Calendly?.initPopupWidget({
    url: "https://calendly.com/business-srisaamba/30min",
  });
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            We Believe Every Business Deserves{" "}
            <span className="gradient-text">the Advantage of AI</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Sri Saamba AI Agency was founded with a simple conviction: the
            transformative power of AI shouldn&apos;t be limited to enterprises
            with massive budgets. We exist to bring world-class AI automation to
            businesses of all sizes — affordably, quickly, and without requiring
            a single technical hire.
          </p>
        </div>
      </section>

      {/* Stats banner */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Democratizing AI for{" "}
                <span className="gradient-text">Modern Business</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When AI became powerful enough to transform business
                  operations, we saw a massive gap: the tools existed, but the
                  expertise to deploy them correctly didn&apos;t. Most businesses
                  were left behind while tech giants raced ahead.
                </p>
                <p>
                  We built Sri Saamba AI to close that gap. Our team combines
                  deep AI engineering expertise with real business operations
                  experience — so we don&apos;t just build technically impressive
                  systems, we build ones that actually move business metrics.
                </p>
                <p>
                  Today we serve clients across roofing, HVAC, gyms, solar,
                  automotive, real estate, and healthcare — helping them
                  automate the work they hate so they can focus on what matters.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <Card
                  key={v.title}
                  className="bg-card border-border hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-5">
                    <div className="text-2xl mb-3">{v.icon}</div>
                    <h3 className="font-semibold text-foreground mb-1.5 text-sm">
                      {v.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {v.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <IndustriesSection />

      {/* Built by Builders */}
      <section className="py-20 lg:py-24 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Built by Builders
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A founder-led AI agency backed by a 22-person engineering team —
              deploying AI agents for trade and service businesses across USA,
              Australia, UAE and India.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {teamStats.map((s) => (
              <div
                key={s.label}
                className="text-center p-6 rounded-2xl border border-border bg-card"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
                boxShadow: "0 0 30px rgba(255,92,26,0.3)",
              }}
            >
              Ready to work with us? Book a free demo →
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-cyan-500/5" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Let&apos;s have a conversation about how AI can transform your
            specific business.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
              boxShadow: "0 0 30px rgba(255,92,26,0.3)",
            }}
          >
            Book Free Demo
          </button>
        </div>
      </section>
    </div>
  );
}
