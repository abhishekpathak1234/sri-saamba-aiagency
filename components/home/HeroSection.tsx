"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

function openCalendly() {
  (window as any).Calendly?.initPopupWidget({
    url: "https://calendly.com/business-srisaamba/30min",
  });
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080b12]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium mb-10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          New · AI Operations Suite for Modern Businesses
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
            <span className="block text-white">AI That</span>
            <span className="block">
              <span
                className="inline bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #8b5cf6 0%, #6366f1 25%, #3b82f6 50%, #06b6d4 70%, #f97316 95%)",
                }}
              >
                Works For You
              </span>
              <span className="text-orange-400">.</span>
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl mx-auto mb-10"
        >
          AI that answers your calls, books your appointments, and follows up
          with every lead — 24/7, automatically, while you sleep.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #FF5C1A 0%, #e04e16 100%)",
              boxShadow: "0 0 30px rgba(255,92,26,0.35)",
            }}
          >
            Book Free Demo
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white/80 text-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            See Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
