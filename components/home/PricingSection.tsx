"use client";

import { motion } from "framer-motion";

const features = [
  "AI voice agent answering every call 24/7",
  "Appointment booking + SMS confirmations",
  "After-hours lead capture",
  "CRM integration (GoHighLevel, HubSpot, Salesforce & more)",
  "Real-time performance dashboard",
  "Human escalation alerts via SMS/WhatsApp",
  "Month-to-month, no lock-in contracts",
];

function openCalendly() {
  (window as any).Calendly?.initPopupWidget({
    url: "https://calendly.com/business-srisaamba/30min",
  });
}

export default function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            PRICING
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Starts from{" "}
            <span style={{ color: "#FF5C1A" }}>$499/month</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Every business is different — so we build a custom solution around
            your call volume, integrations, and goals. Book a free call and
            we&apos;ll give you an exact number within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ maxWidth: 540, margin: "0 auto" }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
              overflow: "hidden",
            }}
          >
            {/* Orange top accent */}
            <div style={{ height: 3, background: "#FF5C1A" }} />

            <div className="p-8">
              {/* Price */}
              <div className="mb-2">
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 800,
                    color: "#FF5C1A",
                    lineHeight: 1,
                  }}
                >
                  From $499
                </span>
                <span
                  className="ml-2"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: 18 }}
                >
                  / month
                </span>
              </div>

              {/* Subtext */}
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                  marginBottom: 20,
                }}
              >
                Setup · Integration · Training · Dashboard · Support
              </p>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                  marginBottom: 20,
                }}
              />

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span style={{ color: "#FF5C1A", fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={openCalendly}
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
                style={{
                  background: "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
                  boxShadow: "0 4px 20px rgba(255,92,26,0.3)",
                }}
              >
                Book a Discovery Call →
              </button>

              <p
                style={{
                  textAlign: "center",
                  marginTop: 12,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                Most clients are live within 7 days. No technical work required
                from you.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
