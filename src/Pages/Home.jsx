import React from "react";
import { Hero, CoffeeBenefits } from "../Components";
import EnhancedCoffee from "../Components/EnhancedCoffee";
import MushroomPower from "../Components/MushroomPower";
import Achieve from "../Components/Achieve";
import MushroomLegacy from "../Components/MushroomLegacy";
import Testimonial from "../Components/Testimonial";
import Experts from "../Components/Experts";

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
      <Experts />
    </div>
  );
};

export default Home;
