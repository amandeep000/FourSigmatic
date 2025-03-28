import React from "react";

const MushroomPower = () => {
  return (
    <section>
      <div className="py-16 px-[30px] flex flex-col justify-center items-center gap-y-5">
        <div className="text-center">
          <img
            src="/public/coffeebenefits/mushroompower1.svg"
            alt="bulb icon"
          />
          <h3>Unlock the power of mushrooms</h3>
          <p>Trusted adaptogens used to better health for centuries</p>
        </div>
        <div>
          <img
            src="/public/coffeebenefits/mushroompower2.svg"
            alt="coffee mug icon"
          />
          <h3>Tastes as good as it makes you feel</h3>
          <p>Nothing fake, always whole ingredients with delicious flavor</p>
        </div>
        <div>
          <img src="/public/coffeebenefits/mushroompower3.svg" alt="sun icon" />
          <h3>Helps with focus, energy, and mood</h3>
          <p>Ingredients clinically proven to help give your day a boost</p>
        </div>
      </div>
    </section>
  );
};

export default MushroomPower;
