 import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Events() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen text-white bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-6 md:px-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-gold"
        >
          HushLush Events
        </motion.h1>

        {/* Coming Soon Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light"
        >
          Our <span className="text-gold font-semibold">Events</span> page is 
          <br /> coming soon. Stay tuned for something unforgettable!
        </motion.p>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mx-auto mb-12 h-1 w-32 bg-yellow-400 rounded-full"
        />

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-6 text-2xl md:text-3xl"
        >
          <a
            href="https://www.facebook.com/people/Hush-Lush-Events/61577939084079/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/hushlush_events"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@HUSHLUSHEVENTS"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaYoutube />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
