import HeroSection from "@/components/home/HeroSection";
import TickerBar from "@/components/home/TickerBar";
import DeviceShowcase from "@/components/home/DeviceShowcase";
import MetricsSection from "@/components/home/MetricsSection";
import FrictionToFlow from "@/components/home/FrictionToFlow";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import DashboardSection from "@/components/home/DashboardSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <DeviceShowcase />
      <MetricsSection />
      <FrictionToFlow />
      <CapabilitiesGrid />
      <DashboardSection />
      <IndustriesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
