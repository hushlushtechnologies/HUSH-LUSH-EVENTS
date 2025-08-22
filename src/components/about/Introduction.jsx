import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function IntroductionSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splitHeading = new SplitText(headingRef.current, { type: "chars" });
      const splitSubHeading = new SplitText(subHeadingRef.current, { type: "chars" });

      const tl = gsap.timeline();

      tl.from(splitHeading.chars, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power4.out",
        stagger: 0.015,
      });

      tl.from(splitSubHeading.chars, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.02,
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Initial setup
    gsap.set(".reveal-container", { width: "100%" });
    gsap.set(".image-to-reveal", { opacity: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".image-to-reveal",
        start: "top 50%",
        end: "bottom 99%",
        scrub: true,
      },
    }).to(".reveal-container", {
      width: 0,
      ease: "none",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111] text-white py-10 relative overflow-hidden  "
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12 text-center">
        <h4
          // ref={headingRef}
          className="uppercase mb-4 tracking-[0.25em] text-sm md:text-base text-gray-300 "
        >
          Introduction
        </h4>

        <h2
          // ref={subHeadingRef}
          className="text-2xl md:text-4xl mb-5 font-light leading-snug max-w-4xl mx-auto    "
        >
          Hush Lush is your premier partner in crafting unforgettable experiences — 
          from dream weddings to seamless corporate events and intimate private celebrations.
        </h2>

        <div className="mt-20">
          <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            <div className="reveal-container absolute inset-0 z-10 bg-[#111] pointer-events-none"></div>
            <img
              src="/images/about.jpg"
              alt="Event Management Excellence"
              className="rounded-lg shadow-lg object-cover w-full max-h-[500px] mx-auto image-to-reveal"
            />
          </div>
        </div>

        <p className="mt-12 text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed     ">
          At Hush Lush, we specialize in curating exceptional wedding experiences,
          flawlessly executed corporate functions, and stylish private parties. Our 
          team of creative planners, coordinators, and photographers are committed to 
          delivering elegance and precision in every detail. Whether it’s saying “I do,” 
          launching a brand, or celebrating life’s milestones — we ensure your event is 
          as effortless as it is extraordinary.
        </p>
      </div>
    </section>
  );
}
