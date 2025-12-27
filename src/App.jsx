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
import { Toaster } from "react-hot-toast";
import SnowfallEffect from "./components/christmas/SnowfallEffect";
import ChristmasLights from "./components/christmas/ChristmasLights";
import ChristmasGreetingModal from "./components/christmas/ChristmasGreetingModal";
import SantaWaving from "./components/christmas/SantaWaving";
import Home from "./pages/Home";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Dummy pages for navigation
const AboutPage = () => (
  <div className="p-20 text-center text-2xl">About Us Page</div>
);
const ServicesPage = () => (
  <div className="p-20 text-center text-2xl">Services Page</div>
);
const PortfolioPage = () => (
  <div className="p-20 text-center text-2xl">Portfolio Page</div>
);
const ContactPage = () => (
  <div className="p-20 text-center text-2xl">Contact Page</div>
);

const App = () => {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 3,
  //     effects: true,
  //   });
  // });

  useGSAP(() => {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        smooth: 3,
        effects: true,
      });
    }
  }, []);

  return (
    <main>
      <ScrollToTop />
      <CustomCursor />
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar />
      <ScrollToTopButton />
      <SnowfallEffect />
      <SantaWaving />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Routes>
            {/* Home Page */}
            {/* <Route
              path="/"
              element={
                <Helmet>
                  <title>
                    Best Event Planner UAE | Wedding & Corporate Event
                    Management
                  </title>
                  <meta
                    name="description"
                    content="Looking for an expert event planner in the UAE? HushLush Events delivers premium wedding and corporate event management with seamless coordination."
                  />
                  <HeroSection />
                  <MessageSection />
                  <FlavorSection />
                  <BenefitSection />
                  <div className="hidden lg:block">
                    <TestimonialSection />
                  </div>
                  <FooterSection />
                </Helmet>
              }
            /> */}

            <Route path="/" element={<Home />} />

            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
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
