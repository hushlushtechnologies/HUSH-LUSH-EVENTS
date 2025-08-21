 import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageGround from "../components/PageGround";
import FooterSection from "../sections/FooterSection";

// Animation for a staggered fade-in and scale effect
const fadeAndScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Curated images for a compelling, varied gallery
  const images = [
    { src: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg", span: "md:row-span-2" },
    { src: "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg", span: "md:col-span-2" },
    { src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg", span: "" },
    { src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg", span: "" },
    { src: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg", span: "md:row-span-2" },
    { src: "https://images.pexels.com/photos/1691901/pexels-photo-1691901.jpeg", span: "md:col-span-2" },
    { src: "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg", span: "" },
    { src: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg", span: "" },
    { src: "https://images.pexels.com/photos/167446/pexels-photo-167446.jpeg", span: "" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <PageGround name="Gallery" />
      <section className="bg-[#111] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-snug"
          >
            A Visual Journey of Our Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
          >
            A storytelling journey through our events—from vibrant celebrations to intimate gatherings, each frame captures a unique and magical story.
          </motion.p>
          <div className="relative mb-12">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            ></motion.div>
          </div>

          {/* Masonry-like Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[250px] gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeAndScale}
                onClick={() => handleImageClick(img)}
                className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay with subtle animation */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <motion.svg
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </motion.svg>
                    <span className="text-white text-lg font-medium">View Image</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={handleCloseModal}
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
                src={selectedImage.src}
                alt="Full-screen view"
                className="rounded-xl max-w-full max-h-[90vh] object-contain shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA */}
<section className="bg-black text-white py-20 px-6 md:px-12 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl md:text-5xl font-bold mb-4"
  >
    Ready to Create Your Own Unforgettable Event?
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
  >
    Let's turn your vision into a stunning reality. Contact us to start planning your perfect event.
  </motion.p>
  <motion.a
    href="/contact"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    viewport={{ once: true }}
    className="px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
  >
    Plan My Event
  </motion.a>
</section>
<FooterSection/>
    </>
  );
};

export default Gallery;