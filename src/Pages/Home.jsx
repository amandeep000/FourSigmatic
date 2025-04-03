import React from "react";
import { Hero, CoffeeBenefits } from "../Components";
import EnhancedCoffee from "../Components/EnhancedCoffee";
import MushroomPower from "../Components/MushroomPower";
import Achieve from "../Components/Achieve";
import MushroomLegacy from "../Components/MushroomLegacy";
import Testimonial from "../Components/Testimonial";
import Experts from "../Components/Experts";
import ProductCard from "../Components/ProductCard";
import ProductShowcase from "../Components/ProductShowcase";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <ProductCard /> */}
      <CoffeeBenefits />
      <EnhancedCoffee />
      <ProductShowcase />
      <Experts />
      <MushroomPower />
      {/* <MushroomLegacy /> */}
      <Testimonial />
      <Achieve />
    </div>
  );
};

export default Home;
