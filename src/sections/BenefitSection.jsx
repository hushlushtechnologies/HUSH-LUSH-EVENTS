import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
 <section className="benefit-section">
  <div className="container mx-auto pt-20">
    <div className="col-center">
      <p>
        Experience the Difference: <br />
        Why Choose Hush Lush
      </p>

      <div className="mt-20 col-center">
        <ClipPathTitle
          title={"Custom Plans"}
          color={"#faeade"}
          bg={"#c88e64"}
          className={"first-title"}
          borderColor={"#222123"}
        />
        <ClipPathTitle
          title={"Bold Ideas"}
          color={"#222123"}
          bg={"#faeade"}
          className={"second-title"}
          borderColor={"#222123"}
        />
        <ClipPathTitle
          title={"Smooth Flow"}
          color={"#faeade"}
          bg={"#7F3B2D"}
          className={"third-title"}
          borderColor={"#222123"}
        />
        <ClipPathTitle
          title={"Lasting Joy"}
          color={"#2E2D2F"}
          bg={"#FED775"}
          className={"fourth-title"}
          borderColor={"#222123"}
        />
      </div>

      <div className="md:mt-0 mt-10">
        <p>And more ...</p>
      </div>
    </div>
  </div>

  <div className="relative overlay-box">
    <VideoPinSection />
  </div>
</section>


  );
};

export default BenefitSection;
