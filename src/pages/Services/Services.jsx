import React from "react";
import PageGround from "../../components/PageGround";
import ServicesSection from "../../components/services/ServicesSection";
import FooterSection from "../../sections/FooterSection";

export default function Services() {
  return (
    <>
      <PageGround name="Services" />

      <ServicesSection />

      <FooterSection />
    </>
  );
}
