import React from "react";
import { motion } from "framer-motion";
import PageGround from "../../components/PageGround";
import FooterSection from "../../sections/FooterSection";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

export default function CorporateEvents() {
  return (
    <>
      <PageGround name="Corporate Events" />

      {/* Hero Section */}
      <section
        className="relative w-full h-[85vh] bg-cover bg-center bg-[#111]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="gold text-4xl md:text-6xl font-bold max-w-4xl"
          >
            Corporate Events that Inspire & Connect
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-gray-200 text-lg md:text-xl mt-4 max-w-2xl"
          >
            We design professional, innovative, and brand-focused events that
            leave a lasting impression.
          </motion.p>
        </div>
      </section>

      {/* Business & Networking */} 
      <section className="bg-[#111] text-white py-20 px-6 md:px-20 ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gold">
              Business & Networking
            </h2>
            <p className="text-gray-300 mb-6">
              From large-scale conferences to intimate networking events, we
              create experiences that foster meaningful connections.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                "Conferences & Seminars",
                "Trade Shows & Exhibitions",
                "Product Launches",
                "Networking Events",
                "Annual Dinners & Gala Nights",
                "Award Ceremonies",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-lg hover:text-[oklch(0.71_0.11_86.4)] transition"
                >
                  <span className="w-2 h-2 bg-[oklch(0.71_0.11_86.4)] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.img
            src="https://images.pexels.com/photos/1181405/pexels-photo-1181405.jpeg"
            alt="Business Event"
            className="rounded-2xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          />
        </div>
      </section>

      {/* Team Engagement */}
      <section className=" bg-[#111] text-white py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
            alt="Team Engagement"
            className="rounded-2xl shadow-lg order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          />
          <motion.div
            className="order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6  gold">
              Team Engagement
            </h2>
            <p className=" mb-6">
              Build stronger teams and enhance workplace culture with fun and
              impactful engagement activities.
            </p>
            <ul className="space-y-3  ">
              {[
                "Team Building Activities",
                "Corporate Retreats",
                "Training & Workshops",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-lg hover:text-[oklch(0.71_0.11_86.4)] transition"
                >
                  <span className="w-2 h-2 bg-[oklch(0.71_0.11_86.4)] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Brand & Marketing */}
      <section className="bg-[#111] text-white py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gold">
              Brand & Marketing
            </h2>
            <p className="text-gray-300 mb-6">
              Engage your audience and amplify your brand with innovative and
              interactive marketing experiences.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                "Brand Activations",
                "Pop-up Events",
                "Press Conferences & Media Events",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-lg hover:text-[oklch(0.71_0.11_86.4)] transition"
                >
                  <span className="w-2 h-2 bg-[oklch(0.71_0.11_86.4)] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.img
            src="https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg"
            alt="Brand Marketing"
            className="rounded-2xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          />
        </div>
      </section>

    

      {/* Video Section */}
      <section className="py-20 bg-[#111] text-white text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Experience the Energy
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/Scxs7L0vhZ4"
            title="Corporate Event Video"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* Call to Action */}
  

      <section className="bg-[#111] text-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold gold mb-4"
          >
            Let’s Make Your Event Unforgettable
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-gray-400 text-lg mb-8"
          >
            Contact us today to schedule your complimentary consultation. We can't wait to hear about your event vision.
          </motion.p>
         <motion.a
            href="/contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
