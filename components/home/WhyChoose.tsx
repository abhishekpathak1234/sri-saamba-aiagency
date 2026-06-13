const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Lightning Fast Deployment",
    description:
      "Go live in days, not months. Our pre-built AI infrastructure means your solution is running and generating results almost immediately.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Battle-Tested AI Models",
    description:
      "Built on the most reliable LLM foundations available — GPT-4, Claude, and Gemini — tuned for accuracy, safety, and business performance.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Seamless Integrations",
    description:
      "Connects with your existing CRM, helpdesk, calendar, and communication tools. Zero disruption to your current workflows.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Dedicated Support",
    description:
      "White-glove onboarding, continuous optimization, and 24/7 monitoring. We're invested in your long-term success, not just the launch.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: heading */}
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Why We&apos;re Different
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Why Choose{" "}
              <span className="gradient-text">Sri Saamba AI</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We don&apos;t just build AI tools — we build AI solutions that
              genuinely move the needle for your business. Every engagement is
              designed around measurable outcomes.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                No lock-in contracts
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                ROI-first approach
              </div>
            </div>
          </div>

          {/* Right: features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${f.bg} flex items-center justify-center ${f.color} mb-3 group-hover:scale-110 transition-transform`}
                >
                  {f.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1.5 text-sm">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
