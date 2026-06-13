"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "Missed Calls = Lost Revenue",
    description: "Leads call after hours and no one picks up.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Slow Response Times",
    description: "Slow replies mean cold leads and lost deals.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Manual Tasks Waste Time",
    description: "Repetitive busywork instead of closing business.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    ),
    title: "Disorganized Workflows",
    description: "Information scattered across tools and inboxes.",
  },
];

const solutions = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Answers 24/7",
    description: "Never miss a call or message again.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Instant Responses",
    description: "Qualify, engage & book automatically.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Automation Handles Busywork",
    description: "Free your team to focus on what matters.",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Smart Workflow & Task Routing",
    description: "The right work to the right person, instantly.",
  },
];

/* Tiny particle dot */
function Particle({ angle, distance, delay }: { angle: number; distance: number; delay: number }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * distance;
  const y = Math.sin(rad) * distance;
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 3,
        height: 3,
        left: "50%",
        top: "50%",
        marginLeft: -1.5,
        marginTop: -1.5,
        background: angle % 60 === 0 ? "#a78bfa" : "#60a5fa",
        boxShadow: "0 0 6px currentColor",
      }}
      animate={{
        x: [x * 0.85, x * 1.15, x * 0.85],
        y: [y * 0.85, y * 1.15, y * 0.85],
        opacity: [0.3, 0.8, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function AIGlobe() {
  const particles = [0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => ({
    angle,
    distance: 105,
    delay: i * 0.4,
  }));

  return (
    <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
      {/* Outermost ambient glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.08) 45%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Orbital ring 1 — clockwise 15s */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: 180,
          height: 180,
          left: "50%",
          top: "50%",
          marginLeft: -90,
          marginTop: -90,
          borderColor: "rgba(139,92,246,0.18)",
          borderWidth: 1,
          transform: "rotateX(70deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {/* Ring 1 dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: 5,
            height: 5,
            top: -2.5,
            left: "50%",
            marginLeft: -2.5,
            background: "#a78bfa",
            boxShadow: "0 0 8px #a78bfa",
          }}
        />
      </motion.div>

      {/* Orbital ring 2 — counter-clockwise 20s */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          width: 160,
          height: 160,
          left: "50%",
          top: "50%",
          marginLeft: -80,
          marginTop: -80,
          borderColor: "rgba(96,165,250,0.15)",
          borderWidth: 1,
          transform: "rotateX(60deg) rotateZ(45deg)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Ring 2 dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: 4,
            height: 4,
            bottom: -2,
            left: "50%",
            marginLeft: -2,
            background: "#60a5fa",
            boxShadow: "0 0 8px #60a5fa",
          }}
        />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <Particle key={p.angle} {...p} />
        ))}
      </div>

      {/* Floating sphere */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex items-center justify-center"
        style={{ width: 120, height: 120 }}
      >
        {/* Pulse rings on sphere */}
        <motion.div
          className="absolute rounded-full border border-indigo-400/20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 120, height: 120 }}
        />
        <motion.div
          className="absolute rounded-full border border-purple-400/15"
          animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          style={{ width: 130, height: 130 }}
        />

        {/* Sphere body */}
        <div
          className="relative w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 32% 30%, #7c3aed 0%, #4f46e5 35%, #1e1b4b 75%, #0d0a1f 100%)",
            boxShadow:
              "0 0 60px rgba(99,102,241,0.55), 0 0 120px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.18), inset -2px -3px 8px rgba(0,0,0,0.4)",
          }}
        >
          {/* Plasma grid lines */}
          <svg viewBox="0 0 96 96" className="absolute inset-0 w-full h-full opacity-25">
            <ellipse cx="48" cy="48" rx="46" ry="46" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="48" cy="48" rx="24" ry="46" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="48" cy="48" rx="8" ry="46" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="48" cy="48" rx="46" ry="18" fill="none" stroke="white" strokeWidth="0.5" />
            <ellipse cx="48" cy="48" rx="46" ry="8" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
          {/* Highlight gloss */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18) 0%, transparent 55%)",
            }}
          />
          <span className="relative z-10 text-white font-bold text-lg tracking-widest select-none">AI</span>
        </div>
      </motion.div>
    </div>
  );
}

/* Premium glassmorphism card */
function ProblemCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.04)",
        transition: { duration: 0.25 },
      }}
      className="flex items-start gap-3 p-4 rounded-xl cursor-default"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white/40"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-white/70 text-sm font-medium mb-0.5">{title}</div>
        <div className="text-white/30 text-xs leading-relaxed">{description}</div>
      </div>
    </motion.div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 24px rgba(99,102,241,0.12)",
        transition: { duration: 0.25 },
      }}
      className="flex items-start gap-3 p-4 rounded-xl cursor-default"
      style={{
        background: "linear-gradient(135deg, rgba(79,70,229,0.12), rgba(37,99,235,0.06))",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white"
        style={{ background: "linear-gradient(135deg, #4f46e5, #2563eb)" }}
      >
        {icon}
      </div>
      <div>
        <div className="text-white/80 text-sm font-medium mb-0.5">{title}</div>
        <div className="text-white/35 text-xs leading-relaxed">{description}</div>
      </div>
    </motion.div>
  );
}

export default function FrictionToFlow() {
  return (
    <section className="py-20 lg:py-28 bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">— THE SHIFT —</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white">From </span>
            <span className="text-white/30">friction</span>
            <span className="text-white"> to </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #3b82f6, #06b6d4)" }}
            >
              flow
            </span>
            <span className="text-white">.</span>
          </h2>
          <p className="text-white/40 text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Everything slowing your business down — solved by AI that runs in the background, 24/7.
          </p>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px_1fr] gap-6 lg:gap-8 items-center">
          {/* Problems */}
          <div className="space-y-3">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">The Problem</p>
            {problems.map((p, i) => (
              <ProblemCard key={p.title} icon={p.icon} title={p.title} description={p.description} index={i} />
            ))}
          </div>

          {/* Globe — centered column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center py-10 lg:py-0"
          >
            <AIGlobe />
          </motion.div>

          {/* Solutions */}
          <div className="space-y-3">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">The Solution</p>
            {solutions.map((s, i) => (
              <SolutionCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
