const tickerItems = [
  "⚡ 74% of trade businesses miss inbound calls — we fix that",
  "⏱ 22-second average response time vs 4+ hour industry average",
  "💰 $25,380 revenue recovered in a single month",
  "🌙 11 after-hours leads captured overnight — zero lost",
  "🌍 Serving roofing, HVAC, gym, solar & automotive businesses across USA, Australia & UAE",
  "📞 Every missed call is a lost job — we make sure you never miss one",
];

const separator = "   •   ";

const content = tickerItems.join(separator) + separator;

export default function TickerBar() {
  return (
    <div
      style={{
        overflow: "hidden",
        background: "#1a1916",
        height: 44,
        display: "flex",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-content {
          display: flex;
          white-space: nowrap;
          animation: ticker 30s linear infinite;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
        }
      `}</style>
      <div className="ticker-content">
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
