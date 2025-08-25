import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";
import FlavorSliderMobile from "../components/ServiceSlideForMobile";

const FlavorSection = () => {
  return (
    <section className="flavor-section bg-black ">
      <div className="h-full flex lg:flex-row flex-col items-center relative">
        <div className="lg:w-[57%] flex-none h-96 md:h-90 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="hidden lg:flex h-full">
          <FlavorSlider />
        </div>
        <div className="flex lg:hidden h-full">
          <FlavorSliderMobile />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
