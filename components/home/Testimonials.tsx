import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Sri Saamba AI transformed our customer support. Their chatbot now handles 78% of inquiries autonomously, and our team finally has time for strategic work. ROI was clear within the first 30 days.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechFlow",
    initials: "SJ",
    color: "bg-blue-500",
  },
  {
    quote:
      "The AI voice agent they built for us books appointments better than our human receptionist — and it works at 2am. We saw a 3x increase in confirmed bookings in the first month alone.",
    name: "Marcus Chen",
    role: "Operations Director",
    company: "ScaleUp Health",
    initials: "MC",
    color: "bg-cyan-500",
  },
  {
    quote:
      "Our lead qualification rate doubled after implementing Sri Saamba AI's lead agent. It engages every inbound lead instantly, scores them, and only routes the serious buyers to our sales team.",
    name: "Priya Patel",
    role: "Founder",
    company: "GrowthHQ",
    initials: "PP",
    color: "bg-violet-500",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real businesses. See how Sri Saamba AI has
            transformed operations across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="glass-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <StarRating />
                <blockquote className="text-foreground/90 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
