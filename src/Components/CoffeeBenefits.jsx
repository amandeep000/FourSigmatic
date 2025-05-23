import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const CoffeeBenefits = () => {
  const coffeeBenefits = [
    {
      image: "/coffeebenefits/clearmind.svg",
      description: "A clearer mind",
    },
    {
      image: "/coffeebenefits/mood.svg",
      description: "Long-Term Positive Mood",
    },
    {
      image: "/coffeebenefits/digestion.svg",
      description: "Smooth Digestion",
    },
    {
      image: "/coffeebenefits/focus.svg",
      description: "Enhanced Mental Focus",
    },
  ];
  return (
    <section className="bg-[#EACAA5] pb-10 before:block before:bg-gradient-to-b before:from-[#f9f5ed] before:to-[#eacaa5] before:z-40 before:h-24">
      <div className="py-16 md:flex w-full bg-contain bg-no-repeat bg-left md:justify-end md:py-0 md:bg-[url('/coffeebenefits/benefitsbg.webp')]">
        <div className="px-4 md:px-0 lg:px-10 flex flex-col justify-center gap-9 font-[Recoleta] text-xl font-semibold lg:w-full">
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <h2 className="text-[#F2983D] font-serif font-semibold tracking-wide w-full text-center">
              COFFEE WITH BENEFITS
            </h2>
            <h2 className="w-full text-center text-4xl font-semibold text-[#59432D]">
              Taste the Transformation
            </h2>
          </div>
          <div className="flex justify-center items-center md:justify-end lg:w-full">
            {/* coffee benefits div */}
            <div className="flex flex-col z-30 md:w-3/5 lg:w-full justify-center items-center md:gap-8 lg:pl-7">
              <div className="w-full">
                <div className="w-full flex justify-center items-center flex-wrap gap-y-7 gap-x-7">
                  {coffeeBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-col justify-center items-center text-center text-[#59432D] gap-4 max-w-[155px]"
                    >
                      <img src={benefit.image} alt={benefit.description} />
                      <p className="">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* certifications */}
              <div className="flex justify-center items-center gap-7 text-center text-[#59432D] mt-3">
                <div className="flex flex-col justify-center items-center gap-y-4 text-center w-full max-w-[155px] min-h-auto">
                  <img
                    src="/coffeebenefits/usdaorganic.svg"
                    alt="usda Organic Certification"
                    className="inset-0"
                  />
                  <p className="px-1">Certified Organic</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-4 text-center w-full max-w-[155px]">
                  <img
                    src="/coffeebenefits/science.svg"
                    alt="Science Backed studies"
                  />
                  <p>Science-Backed Studies</p>
                </div>
              </div>
              {/*Upgrade your coffee button */}
              <Link to={"/shop"} className="px-[51px] pt-8">
                <Button
                  type="button"
                  textColor="text-white"
                  className="py-3 px-11 rounded-[5rem] w-full text-center"
                  children={"Upgrade My Coffee"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeBenefits;
