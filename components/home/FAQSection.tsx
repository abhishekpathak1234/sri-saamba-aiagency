import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Most projects go live within 7–14 business days. Simple chatbots or single-workflow automations can be ready in as few as 3–5 days. More complex multi-agent systems or deep CRM integrations typically take 3–4 weeks. We'll give you a precise timeline during your discovery call.",
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer:
      "Not at all. Our process is designed to be completely hands-off for you. We handle all the technical work — building, training, integrating, and deploying your AI agents. Your job is simply to describe your goals and provide access to your tools. We take it from there.",
  },
  {
    question: "What platforms and tools do you integrate with?",
    answer:
      "We integrate with virtually any platform with an API. Common integrations include Salesforce, HubSpot, Pipedrive, GoHighLevel, Zoho CRM, Zendesk, Intercom, Slack, Google Calendar, Calendly, Twilio, WhatsApp Business, and custom databases. If you use a tool, we can likely connect to it.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on the complexity and scope of your project. Simple chatbot deployments start around $1,500 one-time. Full voice agent systems or multi-workflow automations typically range from $3,000–$10,000+. We also offer monthly retainer packages for ongoing optimization and support. Book a free discovery call for a custom quote.",
  },
  {
    question: "Can AI agents handle complex, multi-step workflows?",
    answer:
      "Yes — this is actually where AI agents shine. We build agents capable of making decisions, routing tasks, pulling data from multiple sources, sending follow-ups, updating records, and escalating to humans when needed. We've built agents that manage entire sales follow-up sequences and customer onboarding flows end-to-end.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across industries including healthcare, real estate, e-commerce, SaaS, professional services, financial services, and hospitality. Our solutions are industry-agnostic — if you have repetitive workflows, inbound leads, or customer support volume, we can help regardless of your vertical.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about working with Sri Saamba AI.
          </p>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={String(index)}
              className="border border-border rounded-xl px-5 bg-card hover:border-primary/30 transition-colors data-open:border-primary/40 data-open:bg-primary/5 not-last:border-b-0"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-primary transition-colors hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
