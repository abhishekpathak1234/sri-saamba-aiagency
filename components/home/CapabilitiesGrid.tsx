"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "AI Voice & Chat Agents",
    description: "Answer calls, chat with leads, qualify and route.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Personal AI Chief of Staff",
    description: "Your always-on operator across tools.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Smart Scheduling",
    description: "Book appointments, send reminders, reduce no-shows.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email & Follow-Up Automation",
    description: "Tailored follow-ups that nurture every lead.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Workflow Automation",
    description: "Across CRM, calendar, email, WhatsApp & more.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: "CRM Automation",
    description: "Update records, route deals, eliminate manual entry.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Real-Time Dashboards",
    description: "Track performance, leads, revenue and activity.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Data & Reporting",
    description: "Clean data, ready when decisions need to be made.",
    highlight: false,
  },
];

const cardVariants = {
  default: {
    y: 0,
    borderColor: "rgba(255,255,255,0.07)",
    boxShadow: "0 0 0px rgba(99,102,241,0)",
  },
  hovered: {
    y: -6,
    borderColor: "rgba(99,102,241,0.5)",
    boxShadow: "0 16px 40px rgba(99,102,241,0.16), 0 0 0 1px rgba(99,102,241,0.18)",
    transition: { duration: 0.2 },
  },
};

const iconVariants = {
  default: {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.55)",
  },
  hovered: {
    backgroundColor: "rgba(79,70,229,0.9)",
    borderColor: "rgba(99,102,241,0.6)",
    color: "rgba(255,255,255,1)",
    transition: { duration: 0.2 },
  },
};

/* highlighted card (Email & Follow-Up) keeps its own styling */
const highlightIconVariants = {
  default: {
    backgroundColor: "rgba(139,92,246,0.35)",
    borderColor: "rgba(139,92,246,0.4)",
    color: "rgba(255,255,255,0.8)",
  },
  hovered: {
    backgroundColor: "rgba(107,56,196,0.95)",
    borderColor: "rgba(139,92,246,0.7)",
    color: "rgba(255,255,255,1)",
    transition: { duration: 0.2 },
  },
};

export default function CapabilitiesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">CAPABILITIES</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-white">What AI can do </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #8b5cf6, #3b82f6, #f97316)" }}
            >
              for your business.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover="hovered"
              animate="default"
              variants={cardVariants}
              className={`relative p-6 rounded-2xl border cursor-default ${
                cap.highlight
                  ? "bg-gradient-to-br from-purple-500/15 to-blue-500/10"
                  : "bg-white/3"
              }`}
              style={{ backdropFilter: "blur(8px)" }}
            >
              <motion.div
                variants={cap.highlight ? highlightIconVariants : iconVariants}
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border"
              >
                {cap.icon}
              </motion.div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{cap.title}</h3>
              <p className="text-white/35 text-xs leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
