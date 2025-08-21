 import React from 'react';
import PageGround from '../../components/PageGround';
import FooterSection from "../../sections/FooterSection";
import { motion } from 'framer-motion';

// Animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MotionCard = ({ section, idx }) => (
  <motion.div
    custom={idx}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-800 overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.08)]"
  >
    <div className="relative w-full h-48">
      <img
        src={section.image}
        alt={section.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <h3 className="text-xl font-semibold text-white z-10">{section.title}</h3>
      </div>
    </div>
    <div className="p-8">
      <p className="text-gray-400 mb-6 text-sm">{section.description}</p>
      <ul className="space-y-3 text-gray-300">
        {section.items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function Private() {
  const sections = [
    {
      title: "Celebrations",
      description: "From intimate gatherings to grand festive affairs, we handle every detail so you can focus on making memories.",
      image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
      items: [
        "Birthday Parties (Kids, Adults, Milestone)",
        "Anniversaries & Family Reunions",
        "Baby Showers / Gender Reveal Parties",
        "Holiday & Themed Parties (Christmas, New Year, Masquerade, etc.)",
        "Cultural & Religious Celebrations",
      ],
    },
    {
      title: "Luxury & Lifestyle Events",
      description: "Experience sophistication and style with our bespoke event services, designed for the ultimate high-end celebration.",
      image: "https://images.pexels.com/photos/3171836/pexels-photo-3171836.jpeg",
      items: [
        "Yacht & Private Island Parties",
        "Exclusive Dinners & Galas",
        "House/Villa & Rooftop Parties",
        "Garden & Poolside Events",
      ],
    },
    {
      title: "Full-Scale Production",
      description: "We bring your vision to life with complete event production services, from a custom soundscape to stunning visual displays.",
      image: "https://images.pexels.com/photos/1674047/pexels-photo-1674047.jpeg",
      items: [
        "Live Performances & DJs",
        "State-of-the-Art Lighting & Sound",
        "Custom Photo Booths & Props",
        "Interactive Entertainment & MCs",
      ],
    },
  ];

  return (
    <>
      <PageGround name="Private Events" />

      {/* Hero Section */}
      <section
        className="relative w-full h-screen flex items-center justify-center text-center p-6 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 from-transparent to-black/70 flex flex-col items-center justify-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
            <motion.h1
              variants={fadeUp}
              className="text-white text-4xl md:text-6xl font-bold max-w-4xl leading-tight"
            >
              Private Events, Impeccably Tailored to Your Story
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-white text-lg md:text-xl mt-4 max-w-2xl font-light"
            >
              From intimate dinners to grand themed nights, we design every celebration to reflect your unique personality and leave a lasting impression on you and your guests.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="/contact"
              className="mt-10 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
            >
              Start Planning
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-[#111] text-white py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h4 className="uppercase mb-4 tracking-[0.25em] text-sm md:text-base text-yellow-400">
            Our Expertise
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-snug">
            Crafting Unforgettable Experiences, <br /> One Moment at a Time.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sections.map((section, idx) => (
              <MotionCard key={idx} section={section} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#1a1a1a] text-white py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h4 className="uppercase mb-4 tracking-[0.25em] text-sm md:text-base text-yellow-400">
            Our Philosophy
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-snug">
            Why We Are The Right Partner for Your Event.
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 13a1.5 1.5 0 01-.143-2.992A1.5 1.5 0 017 10a1.5 1.5 0 011.857-1.492A1.5 1.5 0 0110.5 7a1.5 1.5 0 011.992 1.857A1.5 1.5 0 0114.5 10a1.5 1.5 0 01-.143 2.992A1.5 1.5 0 0113 15a1.5 1.5 0 01-1.857 1.492A1.5 1.5 0 019.5 17a1.5 1.5 0 01-1.992-1.857A1.5 1.5 0 015.5 13zM10 13a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                ),
                title: "Personalized Approach",
                text: "We believe no two events are the same. Our team works closely with you to understand your unique vision and bring it to life with precision and creativity.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8a1 1 0 112 0v5a1 1 0 11-2 0v-5z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Seamless Execution",
                text: "With a keen eye for detail and a network of top-tier vendors, we handle all the logistics, ensuring a flawless and stress-free experience for you and your guests.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-yellow-400 mb-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-9.293a1 1 0 011.414-1.414L10 9.586l1.293-1.293a1 1 0 111.414 1.414L11.414 11l1.293 1.293a1 1 0 01-1.414 1.414L10 12.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 11l-1.293-1.293z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Exquisite Design",
                text: "Our design team creates stunning environments that captivate the senses. From custom decor to lighting and florals, we build a truly immersive experience.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 bg-[#111] rounded-2xl border border-gray-800 transition-all duration-300 transform hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.08)]"
              >
                <div className="flex justify-center md:justify-start">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#111] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
            Event Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg",
              "https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg",
              "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
              "https://images.pexels.com/photos/1674047/pexels-photo-1674047.jpeg",
              "https://images.pexels.com/photos/3171836/pexels-photo-3171836.jpeg",
              "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
              "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg",
              "https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg",
            ].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Private Event Highlight ${i + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
            Relive the Moments
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Scxs7L0vhZ4"
              title="Private Events Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#111] text-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Ready to Plan Your Perfect Event?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-gray-400 text-lg mb-8"
          >
            Whether it’s an intimate gathering or a grand private event, we’re here to design an unforgettable experience tailored just for you. Share your vision with us today.
          </motion.p>
          <motion.a
            href="/contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-8 px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
          >
            Plan Your Event
          </motion.a>
        </div>
      </section>

      <FooterSection />
    </>
  );
}