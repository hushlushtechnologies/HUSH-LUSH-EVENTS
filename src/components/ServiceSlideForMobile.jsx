import { flavorlists } from "../constants";

 

const FlavorSliderMobile = () => {
  return (
    <div className="bg-black py-8">
      <div className="  overflow-x-auto snap-x snap-mandatory gap-6 px-4 no-scrollbar">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className="relative flex-none w-80 h-80 md:w-96 md:h-[50vh] lg:w-[50vw] lg:h-[70vh] snap-center rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={flavor.image}
              alt={flavor.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="absolute bottom-3 left-3 bg-black/50 text-white px-3 py-1 rounded-lg text-lg font-semibold">
              {flavor.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSliderMobile;
