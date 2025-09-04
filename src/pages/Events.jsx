import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import FooterSection from "../sections/FooterSection";

// Floating festive background orbs
const Orb = ({ top, left, delay }) => (
  <motion.div
    className="absolute w-6 h-6 bg-yellow-400 rounded-full blur-md opacity-70"
    style={{ top, left }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

export default function Events() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMuted, setIsMuted] = useState(true); // 🔇 Start muted
  const audioRef = useRef(null);

  const getNextSunday = () => {
    const now = new Date();
    const nextSunday = new Date();
    nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
    nextSunday.setHours(0, 0, 0, 0);
    return nextSunday;
  };

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = getNextSunday() - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Enable audio on first user interaction (click/tap)
  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = true; // 🔇 Ensure muted at first
        audioRef.current.play().catch((err) => {
          console.log("Playback blocked:", err);
        });
      }
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const orbs = [
    { top: "10%", left: "15%", delay: 0 },
    { top: "30%", left: "70%", delay: 1 },
    { top: "50%", left: "40%", delay: 2 },
    { top: "70%", left: "20%", delay: 3 },
    { top: "85%", left: "80%", delay: 4 },
  ];

  const posters = [
    "/event/event (1).jpg",
    "/event/event (1).png",
    "/event/event (2).png",
  ];

  const countdownData = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative bg-gradient-to-b mt-13 py-20 px-6 text-center overflow-hidden">
      {/* Audio Element */}
      <audio ref={audioRef} src="/event/onam.mp3" loop />

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-5 right-5 z-50 bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg text-white hover:bg-white/40 transition animate-pulse"
      >
        {isMuted ? (
          <FaVolumeMute className="text-2xl" />
        ) : (
          <FaVolumeUp className="text-2xl" />
        )}
      </button>

      {/* Animated Orbs */}
      {orbs.map((pos, i) => (
        <Orb key={i} top={pos.top} left={pos.left} delay={pos.delay} />
      ))}

      {/* Posters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {posters.map((src, i) => (
          <motion.div
            key={i}
            className="rounded-3xl shadow-2xl overflow-hidden border-4 border-yellow-300 hover:shadow-yellow-400/50 transition-all bg-white/90 backdrop-blur cursor-pointer"
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Event Poster ${i + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/971526382266?text=Hi, I am interested. May I know more details?"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 mt-14 rounded-full shadow-xl hover:bg-green-600 transition text-lg font-semibold relative z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="text-2xl" />
        Book Now – Limited Spots
      </motion.a>

      {/* Countdown Section */}
      <div className="mt-20 mb-10 bg-yellow-50/20 backdrop-blur-md rounded-2xl py-16 px-6 max-w-5xl mx-auto shadow-lg border-2 border-yellow-400">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-8 animate-pulse">
          Event Starts In
        </h2>
        <div className="flex justify-center gap-8 md:gap-12 text-center">
          {countdownData.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md animate-pulse">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-lg md:text-xl font-semibold text-yellow-100">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full-screen view"
                className="rounded-xl max-w-full max-h-[90vh] object-contain shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-red-600 text-4xl hover:text-gray-300 transition"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <FooterSection/> */}
    </section>
  );
}



//  import React from 'react';
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// export default function Events() {
//   return (
//     <div
//       className="relative flex items-center justify-center min-h-screen text-white bg-cover bg-center overflow-hidden"
//       style={{
//         backgroundImage:
//           "url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg')",
//       }}
//     >
//       <div className="absolute inset-0 bg-black/70" />

//       <div className="relative z-10 text-center px-6 md:px-12">
//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-7xl font-bold mb-4 text-gold"
//         >
//           HushLush Events
//         </motion.h1>

//         {/* Coming Soon Text */}
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light"
//         >
//           Our <span className="text-gold font-semibold">Events</span> page is 
//           <br /> coming soon. Stay tuned for something unforgettable!
//         </motion.p>

//         {/* Decorative Divider */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ delay: 0.4, duration: 1 }}
//           className="mx-auto mb-12 h-1 w-32 bg-yellow-400 rounded-full"
//         />

//         {/* Social Media Icons */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="flex justify-center gap-6 text-2xl md:text-3xl"
//         >
//           <a
//             href="https://www.facebook.com/people/Hush-Lush-Events/61577939084079/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-gray-400 hover:text-white transition-colors duration-300"
//           >
//             <FaFacebookF />
//           </a>
//           <a
//             href="https://www.instagram.com/hushlush_events"
//             target="_blank"
//             rel="noreferrer"
//             className="text-gray-400 hover:text-white transition-colors duration-300"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://www.youtube.com/@HUSHLUSHEVENTS"
//             target="_blank"
//             rel="noreferrer"
//             className="text-gray-400 hover:text-white transition-colors duration-300"
//           >
//             <FaYoutube />
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
