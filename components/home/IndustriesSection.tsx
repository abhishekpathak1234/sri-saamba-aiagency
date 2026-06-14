"use client";

import { motion } from "framer-motion";

const industries = [
  {
    icon: "🏠",
    name: "Roofing",
    description:
      "Never lose a storm lead again. AI answers every call 24/7, books inspection appointments automatically, and follows up — so no $15,000 job goes to your competitor.",
    tags: ["24/7 Call Answering", "Inspection Booking", "Storm Lead Recovery"],
  },
  {
    icon: "⚡",
    name: "Home Services",
    description:
      "Emergency calls don't wait. AI handles inbound calls, qualifies the job, dispatches your team, and sends quote confirmations — even at 2am.",
    tags: ["Speed-to-Lead", "Quote Automation", "Emergency Dispatch"],
  },
  {
    icon: "💪",
    name: "Gyms & Fitness",
    description:
      "Your front desk can't answer calls during classes. AI captures every membership enquiry, books free trials automatically, and follows up with no-shows — 24/7.",
    tags: ["Membership Enquiries", "Trial Booking", "No-Show Follow-Up"],
  },
  {
    icon: "☀️",
    name: "Solar",
    description:
      "Solar leads go cold in under 60 minutes. AI calls every new lead within 20 seconds, qualifies roof type, ownership and bill size, and books the consultation — before they call your competitor.",
    tags: ["Speed-to-Lead", "Lead Qualification", "Appointment Booking"],
  },
  {
    icon: "🚗",
    name: "Automotive",
    description:
      "Missed calls at a dealership or auto shop cost $380 per lost service appointment. AI answers every call, books test drives and service slots, and recovers after-hours leads automatically.",
    tags: ["Service Scheduling", "Lead Recovery", "After-Hours Capture"],
  },
  {
    icon: "🏡",
    name: "Real Estate",
    description:
      "78% of buyers work with the first agent who responds. AI qualifies every inbound lead instantly, schedules viewings, and follows up automatically — so you're always first.",
    tags: ["Lead Qualification", "Viewing Scheduler", "CRM Sync"],
  },
  {
    icon: "🏨",
    name: "Hospitality",
    description:
      "Every missed reservation call is revenue lost to OTA commissions. AI handles bookings, after-hours enquiries, and guest follow-up for hotels and restaurants — in multiple languages.",
    tags: ["Reservation Handling", "After-Hours Bookings", "Guest Follow-Up"],
  },
  {
    icon: "🩺",
    name: "Healthcare",
    description:
      "Clinics miss 25–40% of inbound calls during peak hours. AI books appointments, sends reminders, handles patient intake, and reduces no-shows — after hours included.",
    tags: ["Appointment Booking", "Patient Intake", "No-Show Reminders"],
  },
];

const cardVariants = {
  default: {
    y: 0,
    backgroundColor: "rgba(255,255,255,0.025)",
    borderColor: "rgba(255,255,255,0.07)",
    boxShadow: "0 0 0px rgba(107,56,196,0)",
  },
  hovered: {
    y: -6,
    backgroundColor: "rgba(107,56,196,0.07)",
    borderColor: "rgba(139,92,246,0.45)",
    boxShadow: "0 16px 48px rgba(107,56,196,0.18), 0 0 0 1px rgba(139,92,246,0.2)",
    transition: { duration: 0.22 },
  },
};

const iconVariants = {
  default: {
    backgroundColor: "rgba(107,56,196,0.22)",
    borderColor: "rgba(139,92,246,0.2)",
  },
  hovered: {
    backgroundColor: "rgba(107,56,196,0.92)",
    borderColor: "rgba(139,92,246,0.7)",
    transition: { duration: 0.22 },
  },
};

const tagVariants = {
  default: { borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.38)" },
  hovered: { borderColor: "rgba(139,92,246,0.35)", color: "rgba(255,255,255,0.65)", transition: { duration: 0.22 } },
};

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover="hovered"
              animate="default"
              variants={cardVariants}
              className="p-6 rounded-2xl border cursor-default"
              style={{ backdropFilter: "blur(10px)" }}
            >
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl border"
              >
                {ind.icon}
              </motion.div>

              <h3 className="text-white font-semibold text-lg mb-2">{ind.name}</h3>
              <p className="text-white/35 text-sm leading-relaxed mb-4">{ind.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {ind.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={tagVariants}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium border bg-white/3"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
