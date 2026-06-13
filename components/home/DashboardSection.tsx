"use client";

import { motion } from "framer-motion";

function MiniChart({ color, values }: { color: string; values: number[] }) {
  const max = Math.max(...values);
  const w = 120;
  const h = 40;
  const pts = values.map((v, i) => `${(i / (values.length - 1)) * w},${h - (v / max) * h}`).join(" ");
  const area = `${pts} ${w},${h} 0,${h}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-8" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`cg-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#cg-${color})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function BarChart({ bars }: { bars: { label: string; value: number; color: string }[] }) {
  const max = Math.max(...bars.map((b) => b.value));
  return (
    <div className="flex items-end gap-1.5 h-16 w-full">
      {bars.map((b) => (
        <div key={b.label} className="flex flex-col items-center gap-1 flex-1">
          <div
            className="w-full rounded-t-sm"
            style={{
              height: `${(b.value / max) * 52}px`,
              background: b.color,
              opacity: 0.85,
            }}
          />
          <span className="text-[5px] text-white/25">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function DashboardMockup() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-white/8 select-none"
      style={{
        background: "linear-gradient(180deg, #0d1117 0%, #0a0d14 100%)",
        boxShadow: "0 40px 120px rgba(99,102,241,0.15), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-white/2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <span className="text-white/25 text-[10px] ml-2">AI Analytics · Live</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-2 py-0.5 rounded-full bg-green-500/15 border border-green-500/20 text-green-400 text-[9px]">● Live</div>
          <div className="px-2 py-0.5 rounded bg-white/5 text-white/25 text-[9px]">Export</div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex gap-0 border-b border-white/5">
        {["Overview", "Call Activity", "Response Trends", "Bookings"].map((tab, i) => (
          <div
            key={tab}
            className={`px-4 py-2 text-[10px] font-medium cursor-default ${
              i === 0
                ? "text-white border-b-2 border-indigo-500 bg-white/3"
                : "text-white/25 hover:text-white/50"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Revenue Recovered", value: "$25,380", delta: "+18%", color: "#a78bfa", vals: [12, 18, 15, 22, 19, 28, 25, 31] },
            { label: "Missed Calls Recovered", value: "18", delta: "+6", color: "#60a5fa", vals: [4, 6, 5, 8, 7, 10, 9, 12] },
            { label: "Average Response Time", value: "22s", delta: "-8s", color: "#34d399", vals: [40, 35, 30, 28, 25, 24, 23, 22] },
            { label: "Appointments Booked", value: "47", delta: "+12", color: "#f97316", vals: [20, 24, 22, 28, 30, 35, 40, 47] },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-white/6 bg-white/3 p-3 space-y-2">
              <div className="text-[9px] text-white/35 leading-tight">{kpi.label}</div>
              <div className="font-bold text-base" style={{ color: kpi.color }}>{kpi.value}</div>
              <MiniChart color={kpi.color} values={kpi.vals} />
              <div className="text-[8px]" style={{ color: kpi.color }}>{kpi.delta} this month</div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-3 gap-3">
          {/* Call Activity Metrics */}
          <div className="col-span-2 rounded-xl border border-white/6 bg-white/3 p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-semibold text-white/60">Call Activity Metrics</div>
              <div className="text-[8px] text-white/20">Last 30 days</div>
            </div>
            <BarChart bars={[
              { label: "Mon", value: 42, color: "#6366f1" },
              { label: "Tue", value: 65, color: "#6366f1" },
              { label: "Wed", value: 51, color: "#6366f1" },
              { label: "Thu", value: 78, color: "#a78bfa" },
              { label: "Fri", value: 90, color: "#a78bfa" },
              { label: "Sat", value: 38, color: "#6366f1" },
              { label: "Sun", value: 25, color: "#6366f1" },
              { label: "Mon", value: 55, color: "#6366f1" },
              { label: "Tue", value: 70, color: "#6366f1" },
              { label: "Wed", value: 82, color: "#a78bfa" },
              { label: "Thu", value: 95, color: "#a78bfa" },
              { label: "Fri", value: 88, color: "#a78bfa" },
            ]} />
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span className="text-[8px] text-white/30">Answered</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-[8px] text-white/30">Booked</span>
              </div>
            </div>
          </div>

          {/* Response Trends */}
          <div className="rounded-xl border border-white/6 bg-white/3 p-3">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-semibold text-white/60">Response Trends</div>
            </div>
            <svg viewBox="0 0 80 60" className="w-full h-16">
              <defs>
                <linearGradient id="rt-g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,55 C8,50 16,42 24,38 C32,34 40,30 48,24 C56,18 64,12 80,8" fill="none" stroke="#34d399" strokeWidth="1.5" />
              <path d="M0,55 C8,50 16,42 24,38 C32,34 40,30 48,24 C56,18 64,12 80,8 L80,60 L0,60Z" fill="url(#rt-g)" />
            </svg>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[8px] text-white/25">Avg</span>
              <span className="text-[10px] font-bold text-emerald-400">22s</span>
            </div>
          </div>
        </div>

        {/* Agent status row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { name: "Voice Agent", status: "Active", calls: "142", color: "bg-green-400", bar: "#22c55e" },
            { name: "Chat Agent", status: "Active", leads: "89", color: "bg-blue-400", bar: "#3b82f6" },
            { name: "Lead Qualifier", status: "Active", qualified: "67", color: "bg-purple-400", bar: "#a855f7" },
            { name: "CRM Sync", status: "Syncing", records: "1,204", color: "bg-orange-400", bar: "#f97316" },
          ].map((agent) => (
            <div key={agent.name} className="rounded-xl border border-white/6 bg-white/3 p-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] text-white/50 font-medium">{agent.name}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${agent.color}`} />
              </div>
              <div className="text-[8px] text-white/25 mb-1">{agent.status}</div>
              <div className="w-full bg-white/8 rounded-full h-1">
                <motion.div
                  className="h-1 rounded-full"
                  style={{ background: agent.bar }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#080b12] relative overflow-hidden">
      {/* Aurora glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">ANALYTICS</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
            <span className="text-white">Real systems. </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #8b5cf6, #3b82f6, #06b6d4)" }}
            >
              Real results.
            </span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            A unified command center for every conversation, lead and workflow — built on enterprise-grade infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
