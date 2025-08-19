 import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPhilosophySection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Text animation
      gsap.from(textRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
   <section
  ref={sectionRef}
  className="bg-[#1a1a1a] text-white min-h-screen flex items-center py-20"
>
  <div className="max-w-7xl mx-auto px-6 w-full">
    {/* Title */}
    <h2
      ref={titleRef}
      className="text-4xl md:text-6xl font-bold border-b border-gray-600 pb-4 mb-12"
    >
      OUR STORY & PHILOSOPHY
    </h2>

    {/* Content */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left Image */}
      <div ref={imageRef} className="h-[500px]">
        <img
          src="/images/wedding.jpg" // change to your image
          alt="Hush Lush Philosophy"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Text */}
      <div
        ref={textRef}
        className="bg-white text-black p-8 leading-relaxed rounded-lg shadow-lg"
      >
        <p className="mb-6 text-xl">
          At <strong>Hush Lush</strong>, we believe every design tells a story —
          a reflection of passion, creativity, and the subtle details that make
          each piece truly unique. Our journey is about capturing emotions and
          transforming them into experiences.
        </p>
        <p className="mb-6">
          We craft for those who value elegance, individuality, and timeless
          beauty. Whether you dream of making a bold statement or blending in
          with effortless grace, our creations are tailored to bring your vision
          to life — ensuring that every design is as special as the person
          wearing it.
        </p>
        <p className="mb-6">
          From the first sketch to the final stitch, every step of our process is
          infused with care, precision, and a commitment to excellence. We draw
          inspiration from modern trends, timeless traditions, and the unique
          personalities of our clients, merging them into designs that feel both
          contemporary and eternal.
        </p>
        <p>
          Our philosophy is simple: beauty should be personal, craftsmanship
          should be impeccable, and every creation should make its wearer feel
          extraordinary. This belief drives us to constantly push boundaries,
          explore new ideas, and deliver not just garments — but memories that
          last a lifetime.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutPhilosophySection;
