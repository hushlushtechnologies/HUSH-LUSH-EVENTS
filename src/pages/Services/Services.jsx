import React from "react";
import PageGround from "../../components/PageGround";
import ServicesSection from "../../components/services/ServicesSection";
import FooterSection from "../../sections/FooterSection";
import { Helmet } from "react-helmet-async";
import useSEO from "../../hooks/useSeo";

export default function Services() {

  useSEO({
  title: "Best Wedding Planners In Sharjah",
  description:
    "From weddings to corporate events, HushLush Events provides professional event planning and management services across the UAE.",
});

  return (
    <>
  
      <PageGround name="Services" />

      <ServicesSection />

      <FooterSection />
    </>
  );
}
