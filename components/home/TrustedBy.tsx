const companies = [
  "TechCorp",
  "ScaleUp",
  "NexGen",
  "FlowBiz",
  "DataPeak",
  "GrowthHQ",
  "CloudSync",
  "VeloSoft",
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by forward-thinking businesses
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee track */}
          <div className="flex gap-6 overflow-hidden">
            <div
              className="flex gap-6 shrink-0"
              style={{
                animation: "marquee 25s linear infinite",
              }}
            >
              {[...companies, ...companies].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center justify-center px-6 py-3 rounded-full border border-border bg-card/50 text-muted-foreground text-sm font-semibold tracking-wide whitespace-nowrap hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {name}
                </div>
              ))}
            </div>
            <div
              className="flex gap-6 shrink-0"
              aria-hidden="true"
              style={{
                animation: "marquee 25s linear infinite",
              }}
            >
              {[...companies, ...companies].map((name, i) => (
                <div
                  key={`${name}-dup-${i}`}
                  className="flex items-center justify-center px-6 py-3 rounded-full border border-border bg-card/50 text-muted-foreground text-sm font-semibold tracking-wide whitespace-nowrap"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
