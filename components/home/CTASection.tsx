import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-cyan-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8">
          <Calendar className="w-3.5 h-3.5" />
          Free 30-minute discovery call
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
          Ready to Automate Your{" "}
          <span className="gradient-text">Business?</span>
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Join hundreds of businesses using Sri Saamba AI to save time, qualify
          more leads, and scale faster. Let&apos;s build your custom AI solution
          together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base shadow-lg shadow-primary/30 animate-pulse-glow"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Book a Free Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:border-primary/50 hover:bg-primary/5 text-foreground font-semibold px-8 h-12 text-base"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>

        <p className="text-muted-foreground text-sm mt-6">
          No commitment required · Response within 24 hours
        </p>
      </div>
    </section>
  );
}
