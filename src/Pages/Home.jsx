import React from "react";
import { Hero, CoffeeBenefits } from "../Components";
import EnhancedCoffee from "../Components/EnhancedCoffee";
import MushroomPower from "../Components/MushroomPower";
import Achieve from "../Components/Achieve";
import MushroomLegacy from "../Components/MushroomLegacy";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <CoffeeBenefits />
      <EnhancedCoffee />
      <MushroomPower />
      {/* <MushroomLegacy /> */}
      <Testimonial />
      <Achieve />
    </div>
  );
};

export default Home;
