 

import { useMediaQuery } from "react-responsive";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CELEBRATEWITHHUSHLUSH 
          </h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex-center gap-5 relative z-10 md:mt-10 mt-5">
          <a
            href="https://www.youtube.com/@HUSHLUSHEVENTS"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full gold-bg text-black text-2xl shadow-md hover:scale-110 hover:shadow-yellow-400 transition-all duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/hushlush_events?igsh=MW8xMzVsdGl5aGZ4ag=="
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full gold-bg text-black text-2xl shadow-md hover:scale-110 hover:shadow-yellow-400 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/people/Hush-Lush-Events/61577939084079/"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full gold-bg text-black text-2xl shadow-md hover:scale-110 hover:shadow-yellow-400 transition-all duration-300"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Footer Content */}
        <div className="mt-20 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="mt-20 md:px-10 px-5 flex flex-col md:flex-row justify-between text-milk font-paragraph md:text-lg font-medium gap-10">
            {/* Left Section - Title */}
            {/* <div className="flex flex-col md:items-start items-center">
    <h3 className="text-2xl font-extrabold tracking-wide mb-3">Our Services</h3>
    <p className="text-sm opacity-80 max-w-sm text-center md:text-left">
      Crafting unforgettable experiences with creativity, precision, and elegance.
    </p>
  </div> */}

            {/* Middle Links */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h4 className="text-lg font-semibold mb-2 gold">Our Services</h4>
              <p className="hover:text-primary cursor-pointer">
                Wedding Planning
              </p>
              <p className="hover:text-primary cursor-pointer">
                Corporate Events
              </p>
              <p className="hover:text-primary cursor-pointer">
                Private Parties
              </p>
            </div>

            {/* Right Links */}
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h4 className="text-lg font-semibold mb-2 gold">Quick Links</h4>

              <Link 
                to="/about"
                className="hover:text-primary cursor-pointer transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="hover:text-primary cursor-pointer transition-colors"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="hover:text-primary cursor-pointer transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get exclusive updates on our latest events, special offers, and
              behind-the-scenes stories from Hush Lush.
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999] bg-transparent focus:outline-none"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-around text-white items-center pb-10">
        <p>Copyright © 2025 Hush Lush - All Rights Reserved</p>
        <div className="flex items-center gap-7">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
