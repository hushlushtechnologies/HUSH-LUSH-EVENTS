import React from "react";
import PageGround from "../../components/PageGround";
import FooterSection from "../../sections/FooterSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

 
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Wedding() {

  const MotionLink = motion(Link);

  return (
    <>
      <PageGround name="Wedding Planning" />

      {/* Hero */}
     {/* Hero */}
<section
  className="relative w-full h-[80vh] bg-cover bg-center"
  style={{ backgroundImage: "url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg')" }}
>
  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="text-white text-4xl md:text-6xl font-bold max-w-3xl"
    >
      Turning Your Dream Wedding Into an Unforgettable Story
    </motion.h1>
    <motion.p
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="text-white text-lg md:text-xl mt-4 max-w-2xl"
    >
      From the first dance to the final toast, we meticulously plan every detail to create a day that's as unique as your love.
    </motion.p>
   <MotionLink
  to="/contact"
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="mt-8 px-8 py-3 bg-[oklch(0.71_0.11_86.4)] text-black font-semibold rounded-full shadow-lg hover:opacity-90 transition"
>
  Let's Plan Your Dream Day
</MotionLink>

  </div>
</section>

      {/* Planning & Coordination */}
      <section className="bg-[#111] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gold">
              Planning & Coordination
            </h2>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>✔ Full Wedding Planning</li>
              <li>✔ Partial Planning</li>
              <li>✔ Day-of Coordination</li>
            </ul>
          </motion.div>
          <motion.img
            src="https://static.vecteezy.com/system/resources/previews/036/408/908/large_2x/happy-wedding-couple-posing-over-beautiful-landscape-in-the-mountains-photo.jpg"
            alt="Wedding planning"
            className="rounded-xl shadow-lg object-cover h-80 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Our Process */}
<section className="bg-[#111] text-white py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-3xl md:text-5xl font-bold gold"
    >
      Our Planning Process
    </motion.h2>
    <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
      We believe in a stress-free journey. Our process is designed to be collaborative and transparent, ensuring your vision comes to life.
    </p>
  </div>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Step 1 */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-8 bg-black rounded-xl shadow-lg border border-gray-800"
    >
      <div className="text-4xl gold font-bold mb-4">01</div>
      <h3 className="text-xl font-semibold mb-2">Discovery & Vision</h3>
      <p className="text-gray-300">
        We start with a detailed consultation to understand your unique story, style, and what you envision for your big day.
      </p>
    </motion.div>
    {/* Step 2 */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-8 bg-black rounded-xl shadow-lg border border-gray-800"
    >
      <div className="text-4xl gold font-bold mb-4">02</div>
      <h3 className="text-xl font-semibold mb-2">Design & Logistics</h3>
      <p className="text-gray-300">
        We craft a comprehensive plan, from vendor selection and budget management to a detailed timeline and creative design.
      </p>
    </motion.div>
    {/* Step 3 */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-8 bg-black rounded-xl shadow-lg border border-gray-800"
    >
      <div className="text-4xl gold font-bold mb-4">03</div>
      <h3 className="text-xl font-semibold mb-2">Execution & Celebration</h3>
      <p className="text-gray-300">
        On your wedding day, we handle every detail so you can relax, be present, and celebrate with the people you love most.
      </p>
    </motion.div>
  </div>
</section>

      {/* Wedding Types */}
      <section className="bg-[#111] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold gold"
          >
            Wedding Types
          </motion.h2>
          <p className="text-gray-400 mt-4">
            From luxury venues to intimate beachside vows, we design experiences
            that reflect your love story.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Destination Weddings",
            "Cultural Weddings",
            "Beach & Outdoor",
            "Luxury Weddings",
            "Intimate / Micro Weddings",
           " Themed Weddings"
          ].map((type, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-black rounded-xl shadow-lg border border-gray-800 hover:border-yellow-400 transition"
            >
              <h3 className="text-xl font-semibold">{type}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pre-Wedding Events */}
      <section className="bg-[#111] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="https://media-api.xogrp.com/images/7249c6be-7c76-4cd2-94ac-f59807af0dce~rs_768.h-cr_122.0.2078.1467"
            alt="Pre Wedding"
            className="rounded-xl shadow-lg object-cover h-80 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gold">
              Pre-Wedding Events
            </h2>
            <ul className="space-y-3 text-lg text-gray-300">
              <li>✔ Engagement Parties</li>
              <li>✔ Bridal Showers</li>
              <li>✔ Bachelor / Bachelorette</li>
              <li>✔ Mehndi & Sangeet Nights</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Wedding Day Services */}
      <section className="bg-[#111] text-white py-20 px-6 md:px-20">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center gold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Wedding Day Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Venue Styling & Decoration",
            "Stage & Floral Arrangements",
            "Lighting & Ambience Design",
            "Photography & Videography",
            "Entertainment (Bands, DJs, Dancers)",
            "Catering & Menu Planning",
            "Guest Management & Hospitality",
          ].map((service, i) => (
            <motion.div
              key={i}
              className="p-6 bg-black rounded-xl border border-gray-800 hover:border-yellow-400 shadow-md transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-medium">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      

    

      {/* Video */}
      <section className="bg-[#111] text-white py-20 px-6 md:px-20 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 gold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Wedding Highlight Video
        </motion.h2>
        <motion.div
          className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/RNMcAjAL8cQ?si=zON2yuKT77Cjc3Sz"
            title="Wedding Video"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* Final CTA */}
<section className="bg-[#111] text-white py-20 px-6 md:px-20 text-center">
  <div className="max-w-4xl mx-auto">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-3xl md:text-5xl font-bold gold mb-4"
    >
      Ready to Start Planning Your Story?
    </motion.h2>
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-gray-400 text-lg mb-8"
    >
      Contact us today to schedule your complimentary consultation. We can't wait to hear about your wedding vision.
    </motion.p>
   <MotionLink
      href="/contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mt-8 px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
    >
      Get in Touch
    </MotionLink>
  </div>
</section>

      <FooterSection />
    </>
  );
}
