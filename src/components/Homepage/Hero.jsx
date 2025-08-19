import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        width: "40%",
        height: "70%",
        borderRadius: "20px",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black border-0">
      <div className="sticky top-0 h-screen flex justify-center items-center overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute object-cover shadow-2xl"
          src="/videos/hero-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Overlay */}
        <div ref={overlayRef} className="absolute inset-0 bg-black/50" />

        {/* Text Overlay */}
        <div
          ref={textRef}
          className="relative z-10 text-center text-white px-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto"
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-yellow-400 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Crafting Unforgettable Memories
            </h1>
            <img
              src="/favicon.png"
              alt="Custom Cursor"
              width={50}
              height={50}
              className="hidden lg:block shrink-0"
            />
          </div>

          <p
            className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-md text-[var(--foreground)] leading-relaxed"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Luxury Weddings & Event Management by Hush Lush
          </p>
          <span
            className="mt-6 block text-xs sm:text-sm uppercase tracking-[.2em] opacity-80"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Scroll to Explore
          </span>
        </div>
      </div>
    </section>
  );
}
