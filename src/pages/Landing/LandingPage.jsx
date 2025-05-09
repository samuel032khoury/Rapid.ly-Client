import HeroSection from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import StatsSection from "./sections/Stats";
import HowItWorksSection from "./sections/HowItWorks";
import TestimonialSection from "./sections/Testimonial";
import CTASection from "./sections/CTA";
import { URLShortenerWidget } from "@/components/URLShortenerWidget";

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-br from-purple-50 via-blue-100 to-purple-50 min-h-screen ">
      <HeroSection />

      <URLShortenerWidget />

      <FeaturesSection />

      <StatsSection />

      <HowItWorksSection />

      <TestimonialSection />

      <CTASection />
    </main>
  );
};

export default LandingPage;
