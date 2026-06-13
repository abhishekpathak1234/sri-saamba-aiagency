import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services | Sri Saamba AI Agency",
  description:
    "Explore our full suite of AI services: voice agents, chatbots, workflow automation, CRM integrations, lead qualification, and custom AI solutions.",
};

const services = [
  {
    id: "voice-agents",
    title: "AI Voice Agents",
    badge: "Most Popular",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description:
      "Deploy human-like AI voice agents that handle inbound and outbound calls autonomously — booking appointments, answering FAQs, qualifying prospects, and escalating complex issues to your team.",
    features: [
      "Natural language understanding with sub-second response times",
      "Handles interruptions, accents, and conversational turns",
      "Integrates with your calendar and CRM automatically",
      "24/7 availability — never misses a lead or call",
      "Call recording, transcription, and analytics dashboard",
    ],
    useCase:
      "A healthcare clinic automated their appointment booking calls. Their AI voice agent now handles 200+ calls per day, reducing no-shows by 40% through automated reminders.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    id: "chatbots",
    title: "AI Chatbots",
    badge: "High ROI",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    description:
      "Intelligent conversational AI trained on your specific business data, products, and policies. Goes far beyond simple FAQ bots — handles complex queries, multi-turn conversations, and seamless human handoffs.",
    features: [
      "Trained on your documentation, FAQs, and product knowledge",
      "Multi-channel: website, WhatsApp, Messenger, Slack, Teams",
      "Contextual memory across conversation sessions",
      "Smart escalation to human agents with full context",
      "Multilingual support for global businesses",
    ],
    useCase:
      "An e-commerce brand deployed our chatbot and resolved 78% of support tickets autonomously, cutting their support team's workload in half within 60 days.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    badge: "Time Saver",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    description:
      "End-to-end automation of your most time-consuming business processes. From simple data entry elimination to complex multi-step operations spanning multiple tools — we map and automate it all.",
    features: [
      "Process mapping and automation blueprint",
      "Cross-platform automation (Zapier, Make, n8n, custom)",
      "Automated reporting, alerts, and exception handling",
      "Data transformation and enrichment pipelines",
      "Custom dashboards for monitoring automation health",
    ],
    useCase:
      "A B2B SaaS company automated their entire onboarding workflow — contract signing to software provisioning to CRM update. What took 4 hours now happens in 8 minutes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
  {
    id: "crm",
    title: "CRM Integrations",
    badge: "Essential",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
    description:
      "Deeply integrate your AI agents with your CRM platform. Every call, chat, and interaction automatically logged, contacts updated, tasks created, and deals progressed — no manual data entry.",
    features: [
      "Supports Salesforce, HubSpot, Pipedrive, GoHighLevel, Zoho",
      "Automatic contact creation and activity logging",
      "AI-powered deal scoring and pipeline progression",
      "Bi-directional sync between AI agents and CRM records",
      "Custom field mapping and workflow triggers",
    ],
    useCase:
      "A real estate firm connected our AI chatbot to their Salesforce CRM. Every conversation automatically creates a lead record, assigns a score, and notifies the right agent — zero manual effort.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    id: "leads",
    title: "Lead Qualification Agents",
    badge: "Revenue Driver",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    description:
      "AI agents that engage every inbound lead instantly, ask the right qualifying questions, score their intent and fit, and route only the highest-value prospects to your sales team.",
    features: [
      "Instant lead engagement — responds within seconds",
      "Custom qualification criteria based on your ICP",
      "BANT, CHAMP, or custom scoring frameworks",
      "Automatic calendar booking for qualified leads",
      "Disqualified lead nurture sequences",
    ],
    useCase:
      "A B2B software company deployed our lead qualification agent. Sales team now only speaks with pre-qualified leads — conversion rate jumped 2x and average deal size increased by 35%.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    id: "custom",
    title: "Custom AI Solutions",
    badge: "Enterprise",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    description:
      "For businesses with unique challenges that don&apos;t fit a standard package. We design and build fully bespoke AI systems — from multi-agent orchestration to proprietary LLM fine-tuning.",
    features: [
      "Custom LLM fine-tuning on your proprietary data",
      "Multi-agent systems with complex decision trees",
      "Proprietary AI model development and deployment",
      "Enterprise-grade security and compliance (SOC 2, GDPR)",
      "Dedicated engineering team and SLA guarantees",
    ],
    useCase:
      "A financial services firm needed an AI system that could analyze documents, flag compliance risks, and route decisions. We built a custom multi-agent system that reduced their review time by 70%.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            AI Services That{" "}
            <span className="gradient-text">Drive Results</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Every service we offer is designed around one goal: measurable
            business impact. From voice to chat to full workflow automation, we
            build AI that works.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12">
            <Link href="/contact" className="flex items-center gap-2">
              Get a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              id={service.id}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl ${service.bg} border ${service.border} flex items-center justify-center ${service.color} shrink-0`}>
                        {service.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <Badge className={`${service.badgeColor} border text-xs font-medium`}>
                            {service.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button asChild variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
                      <Link href="/contact" className="flex items-center gap-2">
                        Get Started <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Right */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="mb-5">
                      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2.5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                        Real Use Case
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.useCase}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-background to-cyan-500/8" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a free 30-minute discovery call. We&apos;ll assess your needs
            and recommend the highest-ROI solution for your business.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12">
            <Link href="/contact" className="flex items-center gap-2">
              Book Free Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
