import HeroSection from "@/components/home/HeroSection";
import DeviceShowcase from "@/components/home/DeviceShowcase";
import MetricsSection from "@/components/home/MetricsSection";
import FrictionToFlow from "@/components/home/FrictionToFlow";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import DashboardSection from "@/components/home/DashboardSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DeviceShowcase />
      <MetricsSection />
      <FrictionToFlow />
      <CapabilitiesGrid />
      <DashboardSection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
