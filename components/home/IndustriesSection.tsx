"use client";

import { motion } from "framer-motion";

const industries = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    name: "Automotive",
    description: "AI agents that handle service booking, missed calls, and lead follow-up for dealerships and auto shops.",
    tags: ["Service Scheduling", "Lead Recovery", "Call Answering"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    name: "Real Estate",
    description: "Qualify buyer and seller leads automatically, schedule viewings, and follow up with every enquiry.",
    tags: ["Lead Qualification", "Viewing Scheduler", "CRM Sync"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    name: "Healthcare",
    description: "Appointment booking, reminders, patient intake and after-hours response — HIPAA-ready.",
    tags: ["Appointment Booking", "Patient Intake", "Reminders"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    name: "Education",
    description: "Enrolment support, FAQ automation, and student follow-up for training providers and tutoring businesses.",
    tags: ["Enrolment Flows", "FAQ Agent", "Follow-Up"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    name: "Professional Services",
    description: "Automate client onboarding, consultation booking, and invoice follow-up for law firms, accountants, and consultants.",
    tags: ["Client Onboarding", "Consultation Booking", "Invoicing"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    name: "Retail",
    description: "Product enquiries, order updates, loyalty campaigns, and 24/7 support — handled by AI without extra headcount.",
    tags: ["Order Updates", "Customer Support", "Loyalty Campaigns"],
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">INDUSTRIES</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">Built for the businesses that </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)" }}
            >
              move the world.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl border border-white/6 bg-white/3 hover:border-purple-500/20 transition-all duration-300"
              style={{ backdropFilter: "blur(8px)", background: "linear-gradient(135deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01))" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                style={{
                  background: "linear-gradient(135deg, rgba(107,56,196,0.4) 0%, rgba(26,79,187,0.4) 100%)",
                  border: "1px solid rgba(139,92,246,0.25)",
                }}
              >
                {ind.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{ind.name}</h3>
              <p className="text-white/35 text-sm leading-relaxed mb-4">{ind.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {ind.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium text-white/40 border border-white/8 bg-white/4"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
