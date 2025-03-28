import React from "react";
import { Hero, CoffeeBenefits } from "../Components";
import EnhancedCoffee from "../Components/EnhancedCoffee";
import MushroomPower from "../Components/MushroomPower";

const Home = () => {
  return (
    <div>
      <Hero />
      <CoffeeBenefits />
      <EnhancedCoffee />
      <MushroomPower />
    </div>
  );
};

export default Home;
