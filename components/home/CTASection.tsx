"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Clock } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Enterprise-grade security" },
  { icon: Zap, label: "Setup in days, not months" },
  { icon: Clock, label: "No long-term contracts" },
];

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#080b12] relative overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(107,56,196,0.18) 0%, rgba(26,79,187,0.10) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.06) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Free 30-Min Strategy Call
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="text-white">Ready to see </span>
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)" }}
          >
            AI work for you
          </span>
          <span className="text-white">?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/45 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Discover how AI can save time, increase revenue and automate your operations — tailored to your business.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 40%, #2563eb 100%)",
              boxShadow: "0 0 40px rgba(99,102,241,0.35), 0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white/70 text-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Watch Demo
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/35">
              <Icon className="w-3.5 h-3.5 text-white/25" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
