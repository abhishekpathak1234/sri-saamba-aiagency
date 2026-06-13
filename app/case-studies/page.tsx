"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    industry: "E-commerce",
    title: "AI Chatbot Reduces Support Tickets by 70%",
    client: "Online Retail Brand",
    timeframe: "60 days",
    challenge:
      "A fast-growing e-commerce company was drowning in customer support tickets — order tracking, returns, product questions. Their 5-person support team was overwhelmed, response times were 12+ hours, and CSAT scores were declining.",
    solution:
      "We deployed a custom AI chatbot trained on their full product catalog, return policies, shipping partners, and FAQ database. The bot handles multi-turn conversations, processes return requests automatically, and integrates with their Shopify store and Zendesk for seamless escalation.",
    results: [
      { metric: "70%", label: "Reduction in support tickets" },
      { metric: "2 min", label: "Average response time (was 12h)" },
      { metric: "4.8/5", label: "CSAT score (was 3.2)" },
      { metric: "$18K", label: "Monthly savings in support costs" },
    ],
    tags: ["AI Chatbot", "Shopify", "Zendesk"],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    id: 2,
    industry: "Healthcare",
    title: "AI Voice Agent Books 3x More Appointments",
    client: "Multi-Location Clinic",
    timeframe: "30 days",
    challenge:
      "A healthcare clinic chain with 4 locations was missing 40% of inbound appointment calls due to limited front desk capacity. They were losing thousands in revenue weekly and patients were booking with competitors.",
    solution:
      "We deployed an AI voice agent that handles all inbound calls 24/7 — understands appointment types, checks availability in real-time via their scheduling software, captures patient information, sends confirmation SMS, and makes reminder calls 24 hours before appointments.",
    results: [
      { metric: "3x", label: "More appointments booked" },
      { metric: "40%", label: "Reduction in no-shows" },
      { metric: "24/7", label: "Availability (was 9am–6pm)" },
      { metric: "$65K", label: "Additional monthly revenue" },
    ],
    tags: ["AI Voice Agent", "Healthcare", "Calendar Integration"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    id: 3,
    industry: "B2B SaaS",
    title: "Lead Qualification AI Doubles Conversion Rate",
    client: "B2B Software Company",
    timeframe: "45 days",
    challenge:
      "A B2B SaaS startup had strong inbound traffic but a 2% lead-to-demo conversion rate. Their sales team was spending 60% of their time on calls with unqualified leads — tire kickers, wrong-fit companies, and competitors.",
    solution:
      "We built a lead qualification AI agent that engages every form submission within 60 seconds, asks a custom 5-question qualification sequence (company size, budget, timeline, pain point, decision authority), scores the lead in HubSpot, and only books demos for score 70+.",
    results: [
      { metric: "2x", label: "Lead-to-demo conversion rate" },
      { metric: "68%", label: "Reduction in unqualified demos" },
      { metric: "35%", label: "Increase in average deal size" },
      { metric: "4.5h", label: "Saved per sales rep per week" },
    ],
    tags: ["Lead Qualification", "HubSpot", "B2B SaaS"],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    badgeBg: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
];

const filters = ["All", "E-commerce", "Healthcare", "B2B SaaS"];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.industry === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Proven Results
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Real Results from{" "}
            <span className="gradient-text">Real Clients</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Every case study represents a business that trusted us to transform
            their operations. These are the measurable outcomes we delivered.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {filtered.map((cs) => (
            <Card
              key={cs.id}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start gap-3 mb-6">
                  <Badge className={`${cs.badgeBg} border text-xs font-medium`}>
                    {cs.industry}
                  </Badge>
                  {cs.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                  <span className="text-xs text-muted-foreground ml-auto">
                    Results in {cs.timeframe}
                  </span>
                </div>

                <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  {cs.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Client: {cs.client}
                </p>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Results
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {cs.results.map((r) => (
                        <div
                          key={r.label}
                          className={`p-3 rounded-lg ${cs.bg} border ${cs.badgeBg.split(" ").find((c) => c.startsWith("border")) || "border-border"}`}
                        >
                          <div className={`text-xl font-bold ${cs.color} mb-0.5`}>
                            {r.metric}
                          </div>
                          <div className="text-xs text-muted-foreground leading-tight">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Want Results Like These?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a free discovery call and we&apos;ll map out how AI can
            generate measurable ROI for your specific business.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12">
            <Link href="/contact" className="flex items-center gap-2">
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
