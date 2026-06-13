"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24/7 AI Assistants",
    description: "Always on. Always answering.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automate & Grow",
    description: "Save time. Increase revenue.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Never Miss an Opportunity",
    description: "Capture. Qualify. Convert.",
  },
];

const metrics = [
  { value: "$25,380", label: "REVENUE RECOVERED" },
  { value: "22s", label: "AVG RESPONSE TIME" },
  { value: "24/7", label: "ALWAYS ANSWERING" },
  { value: "47", label: "APPOINTMENTS BOOKED" },
];

export default function MetricsSection() {
  return (
    <section className="py-8 bg-[#080b12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/6 bg-white/3 p-6 backdrop-blur-sm hover:border-purple-500/20 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
              style={{ willChange: "transform" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%)",
                  boxShadow: "0 4px 16px rgba(109,40,217,0.35)",
                }}
              >
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-1.5">{f.title}</h3>
              <p className="text-white/40 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/6 bg-white/3 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/6">
            {metrics.map((m) => (
              <div key={m.label} className="px-8 py-7 text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #a78bfa 0%, #818cf8 50%, #60a5fa 100%)",
                  }}
                >
                  {m.value}
                </div>
                <div className="text-white/30 text-[10px] font-semibold tracking-widest uppercase">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
