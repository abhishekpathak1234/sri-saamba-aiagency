"use client";

import { motion } from "framer-motion";

function DashboardScreen() {
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-t-lg overflow-hidden text-[6px] font-mono select-none">
      {/* Title bar */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#161b22] border-b border-white/5">
        <div className="flex gap-0.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-white/30 text-[5px]">AI Operations · Dashboard</div>
      </div>

      {/* Sidebar + Main */}
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-8 bg-[#0d1117] border-r border-white/5 flex flex-col gap-1 pt-2 items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-3.5 h-3.5 rounded ${i === 0 ? "bg-blue-500/40" : "bg-white/5"}`} />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-2 overflow-hidden">
          {/* Header row */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-white/80 font-bold text-[7px]">AI Operations</div>
              <div className="text-white/30 text-[5px]">Live Activity</div>
            </div>
            <div className="flex gap-1">
              <div className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[5px]">Live</div>
              <div className="px-1.5 py-0.5 rounded bg-white/5 text-white/30 text-[5px]">Export</div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-1 mb-2">
            {[
              { label: "Revenue", value: "31.4K", color: "text-purple-300" },
              { label: "Response", value: "7.3s", color: "text-blue-300" },
              { label: "Booked", value: "230", color: "text-cyan-300" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white/5 rounded p-1">
                <div className="text-white/30 text-[4px] mb-0.5">{kpi.label}</div>
                <div className={`font-bold text-[8px] ${kpi.color}`}>{kpi.value}</div>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-white/3 rounded p-1.5 mb-1.5">
            <div className="text-white/30 text-[4px] mb-1">Pipeline Growth</div>
            <svg viewBox="0 0 120 30" className="w-full h-8">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,25 C10,22 20,15 30,18 C40,21 50,8 60,10 C70,12 80,5 90,8 C100,11 110,4 120,2" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
              <path d="M0,25 C10,22 20,15 30,18 C40,21 50,8 60,10 C70,12 80,5 90,8 C100,11 110,4 120,2 L120,30 L0,30Z" fill="url(#g1)" />
              <path d="M0,28 C15,26 25,20 40,22 C55,24 65,14 80,16 C95,18 105,10 120,8" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="2,1" />
            </svg>
          </div>

          {/* Agent list */}
          <div className="grid grid-cols-2 gap-1">
            {[
              { name: "Voice Agent", status: "Active", pct: 87, color: "bg-green-400" },
              { name: "Chat Agent", status: "Active", pct: 72, color: "bg-blue-400" },
              { name: "Lead Qual.", status: "Active", pct: 91, color: "bg-purple-400" },
              { name: "CRM Sync", status: "Syncing", pct: 55, color: "bg-orange-400" },
            ].map((a) => (
              <div key={a.name} className="bg-white/3 rounded p-1">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-white/60 text-[4px]">{a.name}</span>
                  <span className={`w-1 h-1 rounded-full ${a.color}`} />
                </div>
                <div className="w-full bg-white/10 rounded-full h-0.5">
                  <div className={`h-0.5 rounded-full ${a.color}`} style={{ width: `${a.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-[14px] overflow-hidden text-[6px] select-none flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-2.5 pt-1.5 pb-1">
        <div className="text-white/50 text-[5px]">9:41</div>
        <div className="flex gap-0.5 items-center">
          <div className="w-2 h-1 bg-white/40 rounded-sm" />
          <div className="w-1 h-1 bg-green-400 rounded-full" />
        </div>
      </div>
      {/* Chat header */}
      <div className="px-2.5 py-1 border-b border-white/5 text-white/70 text-[6px] font-semibold">AI Voice Agent</div>
      {/* Chat messages */}
      <div className="flex-1 px-2 py-2 flex flex-col gap-1.5 overflow-hidden">
        {/* Waveform */}
        <div className="bg-purple-500/20 rounded-lg p-1.5">
          <svg viewBox="0 0 60 16" className="w-full h-4">
            {[3, 6, 9, 5, 12, 8, 4, 10, 7, 5, 11, 6, 8, 4, 9, 6, 3, 8, 5, 10].map((h, i) => (
              <rect
                key={i}
                x={i * 3 + 0.5}
                y={(16 - h) / 2}
                width="2"
                height={h}
                rx="1"
                fill={i < 10 ? "#a78bfa" : "#4c1d95"}
                fillOpacity={i < 10 ? "0.9" : "0.4"}
              />
            ))}
          </svg>
          <div className="text-purple-300 text-[5px] mt-0.5 text-center">Active call · 0:32</div>
        </div>
        {/* Message bubble */}
        <div className="bg-white/5 rounded-lg rounded-tl-sm px-2 py-1 max-w-[80%]">
          <div className="text-white/70 text-[5.5px] leading-relaxed">
            Hello! This is Sri Saamba AI. I noticed you&apos;d like to schedule a demo. I have a slot available Thursday at 2pm. Does that work?
          </div>
        </div>
        <div className="bg-blue-500/20 rounded-lg rounded-tr-sm px-2 py-1 max-w-[80%] self-end">
          <div className="text-blue-200 text-[5.5px]">Yes, that works perfectly!</div>
        </div>
        <div className="bg-white/5 rounded-lg rounded-tl-sm px-2 py-1 max-w-[80%]">
          <div className="text-white/70 text-[5.5px]">Booked! You&apos;ll receive a confirmation shortly.</div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="flex gap-2 items-center justify-center pb-2 pt-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`w-1 h-1 rounded-full ${i === 1 ? "bg-white/60" : "bg-white/20"}`} />
        ))}
      </div>
    </div>
  );
}

export default function DeviceShowcase() {
  return (
    <section className="relative py-10 overflow-hidden bg-[#080b12]">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="w-[600px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Centering strategy:
          - Outer container is flex justify-center.
          - Inner wrapper has a fixed width that encompasses both devices.
          - Laptop sits at the left of the wrapper; phone overlaps from the right.
          - The wrapper itself is centered by flex justify-center on the parent.
        */}
        <div className="flex items-end justify-center" style={{ height: 420 }}>
          {/* Fixed-width composition wrapper */}
          <div className="relative" style={{ width: 560, height: 420 }}>

            {/* MacBook — anchored left of wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              animate={{ y: [0, -8, 0] }}
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: 460,
              }}
            >
              {/* Screen */}
              <div
                className="relative rounded-t-xl overflow-hidden border border-white/10"
                style={{
                  background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
                  boxShadow:
                    "0 -20px 60px rgba(99,102,241,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
                  height: 290,
                  transform: "perspective(1200px) rotateX(4deg)",
                  transformOrigin: "bottom center",
                }}
              >
                <div className="absolute inset-0 rounded-t-xl overflow-hidden">
                  <div className="w-full h-full p-1 bg-[#0a0d14]">
                    <DashboardScreen />
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-t-xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Base */}
              <div
                style={{
                  height: 18,
                  background: "linear-gradient(180deg, #2a2a3e 0%, #1a1a2e 100%)",
                  borderRadius: "0 0 4px 4px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-black/40 rounded-full" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-2.5 bg-white/5 rounded-sm border border-white/5" />
              </div>

              {/* Shadow */}
              <div
                className="mx-auto"
                style={{
                  width: "85%",
                  height: 20,
                  background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
                  marginTop: 2,
                  filter: "blur(8px)",
                }}
              />
            </motion.div>

            {/* iPhone — overlaps laptop from the right */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              animate={{ y: [0, -12, 0] }}
              style={{
                position: "absolute",
                right: 0,
                bottom: 36,
                width: 110,
                zIndex: 10,
              }}
            >
              {/* Phone body */}
              <div
                style={{
                  height: 220,
                  background: "linear-gradient(180deg, #1e1e2e 0%, #12121e 100%)",
                  borderRadius: 16,
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
                  position: "relative",
                }}
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-[#0a0a14] rounded-b-xl z-10" />
                {/* Screen */}
                <div className="absolute inset-[2px] rounded-[14px] overflow-hidden">
                  <PhoneScreen />
                </div>
                {/* Side buttons */}
                <div className="absolute -left-0.5 top-8 w-0.5 h-5 bg-white/20 rounded-r" />
                <div className="absolute -left-0.5 top-16 w-0.5 h-8 bg-white/20 rounded-r" />
                <div className="absolute -right-0.5 top-12 w-0.5 h-10 bg-white/20 rounded-l" />
              </div>

              {/* Shadow */}
              <div
                className="mx-auto mt-1"
                style={{
                  width: "80%",
                  height: 12,
                  background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)",
                  filter: "blur(6px)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
