"use client";

import { useState } from "react";

// ─── Animation helper ────────────────────────────────────────────────────────
const anim = (name: string, delay: number): React.CSSProperties => ({
  opacity: 0,
  animation: `${name} 0.45s ease ${delay}s forwards`,
});

// ─── Shared sub-components ───────────────────────────────────────────────────

function DemoChrome({ label }: { label: string }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)",
      borderRadius: 8,
      padding: "8px 14px",
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginBottom: 20,
      flexShrink: 0,
    }}>
      {(["#ff5f57","#febc2e","#28c840"] as string[]).map(c => (
        <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block", flexShrink: 0 }} />
      ))}
      <span style={{ fontSize: 12, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", marginLeft: 6 }}>{label}</span>
    </div>
  );
}

function DemoArea({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "#0d1117",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 14,
      padding: 24,
      overflow: "hidden",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    }}>
      {children}
    </div>
  );
}

interface StatItem { label: string; value: string; }
function ContextCard({ headline, body, stats }: { headline: string; body: string; stats: StatItem[] }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 14,
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    }}>
      <h3 style={{ fontSize: 20, fontWeight: 800, color: "white", lineHeight: 1.3, margin: 0 }}>{headline}</h3>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0 }}>{body}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {stats.map(s => (
          <div key={s.label} style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 12, marginTop: 12 }}>
            <div style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#FF5C1A" }}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── TAB 1: Missed Call Recovery ─────────────────────────────────────────────

function MissedCallPanel({ animKey }: { animKey: number }) {
  const aiStyle: React.CSSProperties = {
    background: "#FF5C1A",
    color: "white",
    borderRadius: "16px 16px 4px 16px",
    padding: "12px 16px",
    maxWidth: "80%",
    fontSize: 13,
    lineHeight: 1.5,
  };
  const custStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.08)",
    color: "white",
    borderRadius: "16px 16px 16px 4px",
    padding: "12px 16px",
    maxWidth: "80%",
    fontSize: 13,
    lineHeight: 1.5,
  };
  return (
    <div className="cap-panel-grid">
      <ContextCard
        headline="It's 11:47 PM. A roofing lead just called."
        body="Your phone is off. Normally this lead is gone forever. With Sri Saamba AI, here's what happens in the next 90 seconds:"
        stats={[
          { label: "Average Job Value", value: "$12,000" },
          { label: "Response Time", value: "8 seconds" },
          { label: "Leads Recovered This Week", value: "18" },
        ]}
      />
      <DemoArea>
        <DemoChrome label="SMS Conversation · Live" />
        <div key={animKey} style={{ display: "flex", flexDirection: "column", gap: 12, overflowY: "auto" }}>
          {/* System notification */}
          <div style={{ display: "flex", justifyContent: "center", ...anim("bubbleIn", 0) }}>
            <span style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 99, padding: "6px 14px", fontSize: 12, fontFamily: "monospace", color: "rgba(255,255,255,0.4)" }}>
              📵 Missed call from +1 (512) 448-9021
            </span>
          </div>
          {/* AI → */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", ...anim("bubbleIn", 0.5) }}>
            <div style={aiStyle}>Hi! You just called Johnson Roofing — sorry we missed you. I'm Alex, the 24/7 assistant. What can I help you with? 🙂</div>
            <span style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>11:47:08 PM · 8 seconds after missed call</span>
          </div>
          {/* ← Customer */}
          <div style={{ display: "flex", ...anim("bubbleIn", 1.4) }}>
            <div style={custStyle}>Yeah hi, I got storm damage on my roof, need someone ASAP</div>
          </div>
          {/* AI → */}
          <div style={{ display: "flex", justifyContent: "flex-end", ...anim("bubbleIn", 2.2) }}>
            <div style={aiStyle}>Got it — storm damage is urgent. I can book an inspection for you. Are you available tomorrow morning or afternoon?</div>
          </div>
          {/* ← Customer */}
          <div style={{ display: "flex", ...anim("bubbleIn", 3.0) }}>
            <div style={custStyle}>Morning — like 9am?</div>
          </div>
          {/* AI → */}
          <div style={{ display: "flex", justifyContent: "flex-end", ...anim("bubbleIn", 3.8) }}>
            <div style={aiStyle}>Perfect ✓ Booked for tomorrow 9am. You'll get a confirmation text in 30 seconds. See you then! 🏠</div>
          </div>
          {/* Green stamp */}
          <div style={{ display: "flex", justifyContent: "center", ...anim("bubbleIn", 4.8) }}>
            <span style={{ background: "rgba(26,122,80,0.15)", border: "1px solid rgba(26,122,80,0.3)", borderRadius: 99, padding: "7px 16px", fontSize: 12, fontFamily: "monospace", color: "#3DD68C" }}>
              ✓ Inspection booked · 11:49 PM · Owner was asleep
            </span>
          </div>
        </div>
      </DemoArea>
    </div>
  );
}

// ─── TAB 2: Speed to Lead ────────────────────────────────────────────────────

function SpeedToLeadPanel({ animKey }: { animKey: number }) {
  const items = [
    { time: "2:14:00 PM", dotColor: "#3DD68C", title: "Lead form submitted", body: "Sarah M. · Interested in Personal Training · Texas FITT website", delay: 0.3 },
    { time: "2:14:20 PM", dotColor: "#FF5C1A", title: "AI calls Sarah — 20 seconds later", body: '"Hi Sarah! This is Alex from Texas FITT — I saw you\'re interested in personal training. Got 2 minutes to chat?"', delay: 0.9 },
    { time: "2:14:55 PM", dotColor: "#3b82f6", title: "Lead qualified", body: "Budget confirmed · Wants to start next week · Personal training 3×/week", delay: 1.5 },
    { time: "2:15:10 PM", dotColor: "#3DD68C", title: "Free trial booked", body: "Thursday 6pm · SMS confirmation sent to Sarah", delay: 2.1 },
    { time: "2:15:10 PM", dotColor: "#f59e0b", title: "Owner notified via WhatsApp", body: '"Hot lead: Sarah M. · Trial Thu 6pm · PT package · Est. $1,200/yr"', delay: 2.7 },
  ];
  return (
    <div className="cap-panel-grid">
      <ContextCard
        headline="A gym lead fills your form at 2:14 PM."
        body="Your staff are busy with members. Without AI, first callback is 47 minutes later. That lead has already called 3 other gyms."
        stats={[
          { label: "AI Response Time", value: "20 seconds" },
          { label: "Industry Average", value: "47 minutes" },
          { label: "Conversion Lift", value: "+52% bookings" },
        ]}
      />
      <DemoArea>
        <DemoChrome label="Lead Pipeline · Live" />
        <div key={animKey} style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative", overflowY: "auto" }}>
          {/* Vertical connecting line */}
          <div style={{ position: "absolute", left: 13, top: 10, bottom: 80, width: 2, background: "rgba(255,255,255,0.06)", zIndex: 0 }} />
          {items.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18, position: "relative", ...anim("timelineIn", item.delay) }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: item.dotColor + "22", border: `2px solid ${item.dotColor}`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.dotColor }} />
              </div>
              <div>
                <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", marginBottom: 3 }}>{item.time}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{item.body}</div>
              </div>
            </div>
          ))}
          {/* Without-AI comparison */}
          <div style={{ background: "rgba(192,43,43,0.06)", border: "1px dashed rgba(192,43,43,0.22)", borderRadius: 10, padding: 14, marginTop: 4, ...anim("bubbleIn", 3.3) }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.6 }}>
              ❌ <strong style={{ color: "rgba(255,100,100,0.7)" }}>Without AI:</strong> First callback at 3:01 PM · Sarah already booked a trial at Planet Fitness
            </p>
          </div>
        </div>
      </DemoArea>
    </div>
  );
}

// ─── TAB 3: After Hours ──────────────────────────────────────────────────────

function AfterHoursPanel({ animKey }: { animKey: number }) {
  const cards = [
    { time: "9:14 PM",  emoji: "🔧", bg: "rgba(249,115,22,0.15)", border: "rgba(249,115,22,0.25)", title: "Marcus Brown — HVAC repair",      body: "AI answered in 6s · Job details captured · Callback scheduled 8am ✓", delay: 0.2 },
    { time: "9:31 PM",  emoji: "🏠", bg: "rgba(255,92,26,0.12)",  border: "rgba(255,92,26,0.25)",  title: "Jennifer K — Roofing inspection",  body: "Storm damage · Inspection booked tomorrow 10am ✓",                     delay: 0.6 },
    { time: "10:02 PM", emoji: "☀️", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)", title: "David R — Solar consultation",     body: "Qualified: owns home · $180 bill · Demo Friday ✓",                    delay: 1.0 },
    { time: "10:47 PM", emoji: "💪", bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.25)", title: "Raj P — Gym membership",           body: "Free trial booked Saturday 9am ✓",                                    delay: 1.4 },
    { time: "11:22 PM", emoji: "🚗", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.25)", title: "Sarah Chen — Auto service",        body: "Oil change + brakes · Booked tomorrow 2pm ✓",                         delay: 1.8 },
  ];
  return (
    <div className="cap-panel-grid">
      <ContextCard
        headline="Your business closed at 6 PM. It's now 9:30 PM."
        body="11 leads contacted you after hours this week. Without AI, all 11 go to voicemail and call someone else. Here's what happened instead:"
        stats={[
          { label: "Leads After Hours This Week", value: "11" },
          { label: "Recovered", value: "11 (100%)" },
          { label: "Est. Revenue Protected", value: "$9,720" },
        ]}
      />
      <DemoArea>
        <DemoChrome label="After-Hours Activity · Tonight" />
        <div key={animKey} style={{ display: "flex", flexDirection: "column", gap: 8, overflowY: "auto" }}>
          {cards.map((c, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start", ...anim("bubbleIn", c.delay) }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: c.bg, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
                {c.emoji}
              </div>
              <div>
                <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>{c.time}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "white", marginBottom: 3 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{c.body}</div>
              </div>
            </div>
          ))}
          {/* Total strip */}
          <div style={{ background: "linear-gradient(90deg, rgba(255,92,26,0.1), transparent)", border: "1px solid rgba(255,92,26,0.15)", borderRadius: 10, padding: "14px 16px", marginTop: 4, ...anim("bubbleIn", 2.4) }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#FF5C1A", margin: 0 }}>5 leads captured tonight · Est. value $8,400 · You were asleep.</p>
          </div>
        </div>
      </DemoArea>
    </div>
  );
}

// ─── TAB 4: 21-Day Follow-Up ─────────────────────────────────────────────────

function FollowUpPanel({ animKey }: { animKey: number }) {
  const days = [
    { day: 1,  channel: "✉",  channelName: "Email",        content: "Hi [Name], thanks for your enquiry. Still thinking? Here's what our clients say...", status: "Opened ✓",             statusColor: "#3DD68C", statusBg: "rgba(61,214,140,0.1)", statusBorder: "rgba(61,214,140,0.2)", done: true,  isBooked: false, isPulsing: false },
    { day: 3,  channel: "💬", channelName: "SMS",          content: "Just checking in — any questions I can answer for you?",                             status: "No reply",             statusColor: "rgba(255,255,255,0.3)", statusBg: "rgba(255,255,255,0.05)", statusBorder: "rgba(255,255,255,0.08)", done: false, isBooked: false, isPulsing: false },
    { day: 7,  channel: "📞", channelName: "AI Voice Call",content: "Hi, this is Alex following up on your enquiry...",                                   status: "Voicemail left",       statusColor: "rgba(255,255,255,0.3)", statusBg: "rgba(255,255,255,0.05)", statusBorder: "rgba(255,255,255,0.08)", done: false, isBooked: false, isPulsing: false },
    { day: 10, channel: "✉",  channelName: "Email",        content: "We just reduced our price this week only — wanted you to know first.",               status: "Opened ✓ · Clicked ✓", statusColor: "#3DD68C", statusBg: "rgba(61,214,140,0.1)", statusBorder: "rgba(61,214,140,0.2)", done: true,  isBooked: false, isPulsing: false },
    { day: 12, channel: "💬", channelName: "SMS",          content: "Saw you checked out our offer — want to lock in before it expires Saturday?",        status: "Replied ✓",            statusColor: "#FF5C1A", statusBg: "rgba(255,92,26,0.1)",   statusBorder: "rgba(255,92,26,0.2)",   done: true,  isBooked: false, isPulsing: true  },
    { day: 12, channel: "📅", channelName: "BOOKED",       content: "",                                                                                   status: "",                     statusColor: "#3DD68C", statusBg: "", statusBorder: "",               done: true,  isBooked: true,  isPulsing: false },
  ];

  return (
    <div className="cap-panel-grid">
      <ContextCard
        headline="A lead said 'maybe next month' 3 weeks ago."
        body="Your team forgot to follow up. Sri Saamba AI never forgets. This is the exact sequence that brought them back and closed the deal on Day 12."
        stats={[
          { label: "Leads Re-Engaged This Month", value: "7" },
          { label: "Revenue From Sequences", value: "$41,000" },
          { label: "Time Spent by Owner", value: "0 minutes" },
        ]}
      />
      <DemoArea>
        <DemoChrome label="21-Day Sequence · Running" />
        {/* Scrollable timeline */}
        <div style={{ overflowX: "auto", paddingBottom: 8, flex: 1 }}>
          <div key={animKey} style={{ display: "flex", alignItems: "flex-start", gap: 0, minWidth: "max-content", position: "relative", paddingTop: 24, paddingBottom: 4 }}>
            {/* Connecting line */}
            <div style={{ position: "absolute", top: 42, left: 18, right: 18, height: 2, background: "rgba(255,255,255,0.06)", zIndex: 0 }} />
            {days.map((d, i) => (
              <div key={i} style={{ width: 160, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: 8, paddingRight: 8, ...anim("nodeIn", i * 0.4) }}>
                {/* Node */}
                <div style={{
                  width: d.isBooked ? 48 : 36,
                  height: d.isBooked ? 48 : 36,
                  borderRadius: "50%",
                  border: `2px solid ${d.isBooked ? "#1A7A50" : d.done ? "#FF5C1A" : "rgba(255,255,255,0.1)"}`,
                  background: d.isBooked ? "rgba(26,122,80,0.15)" : d.done ? "rgba(255,92,26,0.1)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: d.isBooked ? 20 : 15,
                  zIndex: 1,
                  position: "relative",
                  marginBottom: 12,
                  flexShrink: 0,
                }}>
                  {d.channel}
                </div>
                {/* Content */}
                <div style={{ textAlign: "center", width: "100%" }}>
                  <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", marginBottom: 4, textTransform: "uppercase" as const }}>
                    Day {d.day} · {d.channelName}
                  </div>
                  {d.isBooked ? (
                    <div style={{ background: "rgba(26,122,80,0.12)", border: "1px solid rgba(26,122,80,0.25)", borderRadius: 10, padding: "10px 8px", marginTop: 4 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#3DD68C" }}>Deal closed · $1,800</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>21 days after "maybe next month"</div>
                    </div>
                  ) : (
                    <>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, marginBottom: 8 }}>{d.content}</div>
                      <span style={{
                        fontSize: 10, fontFamily: "monospace",
                        color: d.statusColor,
                        background: d.statusBg,
                        border: `1px solid ${d.statusBorder}`,
                        borderRadius: 99,
                        padding: "3px 8px",
                        display: "inline-block",
                        animation: d.isPulsing ? "pulse 2s infinite" : "none",
                      }}>
                        {d.status}
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.28)", fontStyle: "italic", flexShrink: 0 }}>
          This sequence runs automatically for every single lead. You close the deal. AI does everything else.
        </p>
      </DemoArea>
    </div>
  );
}

// ─── Capabilities strip ───────────────────────────────────────────────────────

const chips = [
  { emoji: "🎙", label: "Voice Agents" },
  { emoji: "💬", label: "Chat & SMS" },
  { emoji: "📅", label: "Smart Scheduling" },
  { emoji: "✉", label: "Email Sequences" },
  { emoji: "⚡", label: "Speed-to-Lead" },
  { emoji: "🔄", label: "CRM Sync" },
  { emoji: "📊", label: "Live Dashboards" },
  { emoji: "🌙", label: "After-Hours Capture" },
];

function CapabilitiesStrip() {
  return (
    <div style={{ marginTop: 56 }}>
      <p style={{ textAlign: "center", fontSize: 11, fontFamily: "monospace", color: "#FF5C1A", letterSpacing: "0.1em", marginBottom: 20 }}>
        EVERYTHING INCLUDED
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
        {chips.map(c => (
          <div
            key={c.label}
            className="cap-chip"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 99,
              padding: "10px 18px",
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.6)",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
            }}
          >
            <span>{c.emoji}</span>
            <span>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Bottom CTA Banner ────────────────────────────────────────────────────────

function openCalendly() {
  (window as any).Calendly?.initPopupWidget({ url: "https://calendly.com/business-srisaamba/30min" });
}

function CTABanner() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "52px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        background: "#111218",
        border: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        gap: 40,
        flexWrap: "wrap",
      }}
    >
      {/* Orange glow — bottom-right corner */}
      <div style={{
        position: "absolute",
        bottom: -60,
        right: -60,
        width: 340,
        height: 340,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,92,26,0.28) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Left: headline + sub + trust badges */}
      <div style={{ flex: 1, minWidth: 260, position: "relative", zIndex: 1 }}>
        <h3 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, color: "white", margin: "0 0 12px", lineHeight: 1.15 }}>
          See it working<br />
          <span style={{ color: "#FF5C1A" }}>in your business.</span>
        </h3>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", margin: "0 0 24px", maxWidth: 460, lineHeight: 1.7 }}>
          Book a free 10-minute demo. We'll show you exactly which of these workflows fits your business — and what it would recover in month one.
        </p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {["10 minutes", "No credit card", "Live walkthrough"].map(t => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#3DD68C", display: "inline-block", flexShrink: 0 }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right: button */}
      <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
        <button
          onClick={openCalendly}
          style={{
            background: "#FF5C1A",
            color: "#1a0a00",
            fontWeight: 800,
            fontSize: 16,
            padding: "18px 36px",
            borderRadius: 14,
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            boxShadow: "0 0 32px rgba(255,92,26,0.35)",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(255,92,26,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(255,92,26,0.35)"; }}
        >
          Book a Discovery Call
          <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>→</span>
        </button>
      </div>
    </div>
  );
}

// ─── Tab definitions ──────────────────────────────────────────────────────────

const TABS = [
  { id: "missed",     label: "📞 Missed Call Recovery" },
  { id: "speed",      label: "⚡ Speed to Lead" },
  { id: "afterhours", label: "🌙 After Hours" },
  { id: "followup",   label: "🔄 Follow-Up Sequence" },
];

// ─── Main export ─────────────────────────────────────────────────────────────

export default function CapabilitiesGrid() {
  const [activeTab, setActiveTab] = useState("missed");
  const [animKey, setAnimKey] = useState(0);

  function handleTab(id: string) {
    setActiveTab(id);
    setAnimKey(k => k + 1);
  }

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "80px 0 100px",
        background: "#080b12",
      }}
    >
      {/* Dot grid background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,92,26,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section header ── */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(255,92,26,0.1)",
            border: "1px solid rgba(255,92,26,0.2)",
            borderRadius: 99,
            padding: "6px 16px",
            fontSize: 11,
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#FF5C1A",
            letterSpacing: "0.1em",
            marginBottom: 20,
          }}>
            SEE IT IN ACTION
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            margin: "0 0 16px",
          }}>
            This is what happens when AI{" "}
            <span style={{
              background: "linear-gradient(90deg, #FF5C1A, #ff8c5a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              runs your business.
            </span>
          </h2>
          <p style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.6,
          }}>
            Not features. Not theory. Real workflows running 24/7 inside businesses like yours — right now.
          </p>
        </div>

        {/* ── Tab navigation ── */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40, overflowX: "auto", paddingBottom: 4 }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              style={{
                background: activeTab === tab.id ? "#FF5C1A" : "rgba(255,255,255,0.04)",
                border: `1px solid ${activeTab === tab.id ? "#FF5C1A" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 99,
                padding: "10px 20px",
                fontSize: 13,
                fontWeight: 600,
                color: activeTab === tab.id ? "white" : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeTab === tab.id ? "0 0 20px rgba(255,92,26,0.3)" : "none",
                flexShrink: 0,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab content area ── */}
        <div style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 20,
          padding: "32px 28px",
        }}>
          {activeTab === "missed"     && <MissedCallPanel     animKey={animKey} />}
          {activeTab === "speed"      && <SpeedToLeadPanel    animKey={animKey} />}
          {activeTab === "afterhours" && <AfterHoursPanel     animKey={animKey} />}
          {activeTab === "followup"   && <FollowUpPanel       animKey={animKey} />}
        </div>

        {/* ── Capabilities strip ── */}
        <CapabilitiesStrip />

        {/* ── CTA banner ── */}
        <CTABanner />
      </div>
    </section>
  );
}
