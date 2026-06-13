import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChoose from "@/components/home/WhyChoose";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesGrid />
      <WhyChoose />
      <ProcessSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
