import React from "react";

const MushroomPower = () => {
  return (
    <section>
      <div className="py-16 px-[30px] flex flex-col justify-center items-center gap-y-5 md:px-12 lg:flex-row lg:justify-around lg:items-start">
        <div className="text-center max-w-[220px] flex flex-col justify-center items-center gap-y-4 ">
          <img
            src="/coffeebenefits/mushroompower1.svg"
            alt="bulb icon"
            className=""
          />
          <h3 className="font-semibold text-2xl tracking-wider text-[#59432D] mt-8">
            Unlock the power of mushrooms
          </h3>
          <p className="text-[#59432D] font-normal">
            Trusted adaptogens used to better health for centuries
          </p>
        </div>
        <div className="max-w-[220px] flex flex-col justify-center items-center gap-y-4 text-center">
          <img src="/coffeebenefits/mushroompower2.svg" alt="coffee mug icon" />
          <h3 className="font-semibold text-2xl tracking-wider text-[#59432D] mt-8">
            Tastes as good as it makes you feel
          </h3>
          <p className="text-[#59432D] font-normal">
            Nothing fake, always whole ingredients with delicious flavor
          </p>
        </div>
        <div className="max-w-[220px] flex flex-col justify-center items-center gap-y-4 text-center">
          <img src="/coffeebenefits/mushroompower3.svg" alt="sun icon" />
          <h3 className="font-semibold text-2xl tracking-wider text-[#59432D] mt-8">
            Helps with focus, energy, and mood
          </h3>
          <p className="text-[#59432D] font-normal">
            Ingredients clinically proven to help give your day a boost
          </p>
        </div>
      </div>
    </section>
  );
};

export default MushroomPower;
