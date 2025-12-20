import React from "react";
import PageGround from "../components/PageGround";
import IntroductionSection from "../components/about/Introduction";
import PhilosophySection from "../components/about/Philosophy";
import FooterSection from "../sections/FooterSection";
import AboutUsGallery from "../components/about/AboutGallery";
import { Helmet } from "react-helmet-async";
import useSEO from "../hooks/useSeo";

export default function About() {

    useSEO({
      title: "Best Event Coordinators In UAE",
      description:
        "HushLush Events offers luxury wedding and corporate event management across the UAE with customized planning, décor, and trusted vendors.",
    });

  return (
   <>
   
      <PageGround name="About" />
      <IntroductionSection />
      <PhilosophySection />
      {/* <AboutUsGallery/> */}
      <FooterSection />
</>
  );
}
