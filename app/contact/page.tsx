"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Calendar, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import type { FormEvent } from "react";

const services = [
  "AI Voice Agents",
  "AI Chatbots",
  "Workflow Automation",
  "CRM Integrations",
  "Lead Qualification Agents",
  "Custom AI Solutions",
  "Not sure yet",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Tell us about your business and goals. We&apos;ll get back to you
            within 24 hours with a tailored recommendation.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card border-border">
                <CardContent className="p-6 lg:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Message Received!
                      </h2>
                      <p className="text-muted-foreground max-w-sm">
                        Thanks for reaching out. We&apos;ll review your inquiry
                        and get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-foreground mb-6">
                        Send Us a Message
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium text-foreground">
                              Full Name <span className="text-primary">*</span>
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Smith"
                              required
                              className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium text-foreground">
                              Work Email <span className="text-primary">*</span>
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@company.com"
                              required
                              className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-medium text-foreground">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service" className="text-sm font-medium text-foreground">
                            Service Interest
                          </Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full h-9 rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          >
                            <option value="">Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-sm font-medium text-foreground">
                            Tell Us About Your Goals <span className="text-primary">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your current challenge, what you'd like to automate, or what outcomes you're hoping to achieve..."
                            required
                            rows={5}
                            className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          We respond to all inquiries within 24 hours.
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Calendly placeholder */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      Book a Discovery Call
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer to talk directly? Book a free 30-minute call with our
                    team to discuss your goals.
                  </p>

                  {/* Calendly placeholder */}
                  <div className="w-full h-48 rounded-lg border-2 border-dashed border-border bg-muted/10 flex flex-col items-center justify-center gap-2 mb-4">
                    <Calendar className="w-8 h-8 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground font-medium">
                      Calendly Widget
                    </p>
                    <p className="text-xs text-muted-foreground/60 text-center px-4">
                      Booking calendar loads here
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 font-medium"
                  >
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Calendly Booking
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact info */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:hello@srisaambaai.com"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      hello@srisaambaai.com
                    </a>
                    <a
                      href="tel:+15550000000"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      +1 (555) 000-0000
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      Remote-first · Serving clients globally
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response time */}
              <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5">
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Typically responds within 24 hours
                </div>
                <p className="text-xs text-muted-foreground">
                  Mon–Fri · 9am–6pm EST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
