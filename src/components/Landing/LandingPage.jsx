import { motion } from "framer-motion";
import Header from "../Header";
import HeroSection from "./sections/Hero";
import URLShortenerWidget from "./URLShortenerWidget";
import FeaturesSection from "./sections/Features";
import StatsSection from "./sections/Stats";
import HowItWorksSection from "./sections/HowItWorks";
import TestimonialSection from "./sections/Testimonial";
import CTASection from "./sections/CTA";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen ">
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
