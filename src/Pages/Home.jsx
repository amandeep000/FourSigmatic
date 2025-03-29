import React from "react";
import { Hero, CoffeeBenefits } from "../Components";
import EnhancedCoffee from "../Components/EnhancedCoffee";
import MushroomPower from "../Components/MushroomPower";
import Achieve from "../Components/Achieve";

const Home = () => {
  return (
    <div>
      <Hero />
      <CoffeeBenefits />
      <EnhancedCoffee />
      <MushroomPower />
      <Achieve />
    </div>
  );
};

export default Home;
