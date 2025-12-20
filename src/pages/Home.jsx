import React from "react";
import HeroSection from "../components/Homepage/Hero";
import MessageSection from "../sections/MessageSection";
import FlavorSection from "../sections/FlavorSection";
import BenefitSection from "../sections/BenefitSection";
import TestimonialSection from "../sections/TestimonialSection";
import FooterSection from "../sections/FooterSection";
import useSEO from "../hooks/useSeo";

export default function Home() {
  useSEO({
    title: "Corporate Event Organizers in Dubai | HushLush Events",
    description:
      "Looking for an expert event planner in the UAE? HushLush Events delivers premium wedding and corporate event management with seamless coordination.",
  });

  return (
    <>
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <BenefitSection />

      <div className="hidden lg:block">
        <TestimonialSection />
      </div>

      <FooterSection />
    </>
  );
}
