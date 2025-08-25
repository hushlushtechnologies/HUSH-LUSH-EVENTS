import NavBar from "./components/NavBar";
// import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./components/Homepage/Hero";
import CustomCursor from "./components/CustomCursor";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Wedding from "./pages/Services/Wedding";
import Coprateevents from "./pages/Services/Coprateevents";
import Private from "./pages/Services/Private";
import ScrollToTopButton from "./components/ScrollToTopBtn";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Dummy pages for navigation
const AboutPage = () => <div className="p-20 text-center text-2xl">About Us Page</div>;
const ServicesPage = () => <div className="p-20 text-center text-2xl">Services Page</div>;
const PortfolioPage = () => <div className="p-20 text-center text-2xl">Portfolio Page</div>;
const ContactPage = () => <div className="p-20 text-center text-2xl">Contact Page</div>;


const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

 


  return (
 

     <main>
      <ScrollToTop/>
      <CustomCursor />
      <NavBar />
       <ScrollToTopButton />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
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
              }
            />

            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/services/wedding" element={<Wedding />} />
            <Route path="/services/corporate" element={<Coprateevents />} />
            <Route path="/services/private-parties" element={<Private />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
      </div>
       
    </main>
  );
};

export default App;
