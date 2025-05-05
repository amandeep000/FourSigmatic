import React, { useState } from "react";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const AccordionGroup = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="w-full mt-6">
      <Accordion
        title="SHOP"
        index={0}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="flex flex-col justify-center items-start text-white font-semibold text-2xl">
          <span className="py-2 ">Coffees & Creamers</span>
          <span className="py-2 ">Protiens</span>
          <span className="py-2 ">Supplements</span>
          <span className="py-2 block cursor-pointer hover:underline">
            Shop All
          </span>
        </div>
      </Accordion>
      <Accordion
        title="LEARN"
        index={1}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="flex flex-col justify-center items-start text-white font-semibold text-2xl">
          <span className="py-2">Product Quality</span>
          <span className="py-2">About Us</span>
          <span className="py-2">Blog</span>
          <span className="py-2">Press</span>
          <span className="py-2">Product shopping Quiz</span>
        </div>
      </Accordion>
      <Accordion
        title="SUPPORT"
        index={2}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="flex flex-col justify-center items-start text-white font-semibold text-2xl">
          <span className="py-2">Contact Us</span>
          <span className="py-2">FAQ</span>
          <span className="py-2">Shipping & Return</span>
          <span className="py-2">Account</span>
        </div>
      </Accordion>
      <Accordion
        title="INQUIRIES"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="flex flex-col justify-center items-start text-white font-semibold text-2xl">
          <span className="py-2">Partners Zone</span>
          <span className="py-2">Wholesale</span>
        </div>
      </Accordion>
    </div>
  );
};

export default AccordionGroup;
