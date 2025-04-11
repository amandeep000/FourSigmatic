import React from "react";
import { Hero, CoffeeBenefits } from "../Components";
import EnhancedCoffee from "../Components/EnhancedCoffee";
import Achieve from "../Components/Achieve";
import Testimonial from "../Components/Testimonial";
import Experts from "../Components/Experts";
import ProductShowcase from "../Components/ProductShowcase";
import Review from "../Components/Review";
import MobileNav from "../Components/MobileNav";
import Modal from "../Components/Modal";

const Home = () => {
  return (
    <div>
      <Hero />
      <CoffeeBenefits />
      <ProductShowcase />
      <Experts />
      <EnhancedCoffee />
      <Testimonial />
      <Review />
      <Achieve />
      <Modal />
    </div>
  );
};

export default Home;
