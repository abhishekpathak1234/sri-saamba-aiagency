"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly can you get me set up?",
    answer:
      "Most clients are live within 5–7 business days. We handle everything — setup, training, integration, and testing. You don't need to do anything technical.",
  },
  {
    question: "What happens if the AI says something wrong?",
    answer:
      "The AI is trained specifically on your business — your services, prices, hours, and approved scripts. Any complex or unusual query is instantly escalated to you via SMS or WhatsApp alert.",
  },
  {
    question: "Do you work with businesses outside the US?",
    answer:
      "Yes — we actively serve clients across USA, Australia, UAE, and India. Our AI agents support multiple languages including Arabic and can be localised for any market.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Packages start from $499/month depending on call volume and features. Every engagement starts with a free 30-minute strategy call — no commitment required.",
  },
  {
    question: "Will this replace my staff?",
    answer:
      "No — it handles the repetitive work (answering calls, booking appointments, sending reminders) so your team focuses on high-value tasks. Think of it as a 24/7 assistant that never calls in sick.",
  },
  {
    question: "What platforms do you integrate with?",
    answer:
      "GoHighLevel, HubSpot, Salesforce, Pipedrive, Jobber, ServiceTitan, Housecall Pro, Calendly, Twilio, and more. If you use something not listed, ask us — we can almost certainly connect to it.",
  },
  {
    question: "Is there a contract or lock-in?",
    answer:
      "No long-term contracts. Month-to-month after the initial setup period. Cancel anytime with 30 days notice.",
  },
  {
    question: "How do I know it's working?",
    answer:
      "You get a real-time dashboard showing every call answered, every appointment booked, every lead captured, and estimated revenue recovered. Full visibility, always.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        border: "1px solid",
        borderColor: isOpen ? "rgba(255,92,26,0.3)" : "rgba(255,255,255,0.08)",
        borderRadius: 12,
        background: isOpen ? "rgba(255,92,26,0.04)" : "rgba(255,255,255,0.02)",
        overflow: "hidden",
        transition: "border-color 0.2s ease, background 0.2s ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        style={{ cursor: "pointer" }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: isOpen ? "#fff" : "rgba(255,255,255,0.75)",
            transition: "color 0.2s ease",
          }}
        >
          {question}
        </span>
        <span
          style={{
            fontSize: 20,
            fontWeight: 300,
            color: isOpen ? "#FF5C1A" : "rgba(255,255,255,0.3)",
            flexShrink: 0,
            transition: "color 0.2s ease",
            lineHeight: 1,
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          style={{
            padding: "0 20px 16px",
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.7,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 lg:py-28 bg-[#080b12]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/40 text-lg">
            Everything you need to know about working with Sri Saamba AI.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
