import React from "react";

const Review = () => {
  return (
    <div className="py-10 px-5 lg:py-[60px] text-[#59432D] max-w-[1340px] mx-auto">
      <div className="p-5 bg-[#ffffff] rounded-2xl lg:py-10 lg:px-[108px]">
        <h3 className="text-3xl lg:text-[40px]">
          "This is the best-tasting mushroom coffee that we’ve reviewed — it’s
          sweet without being syrupy, with just a touch of nuttiness and
          earthiness."
        </h3>
        <div className="flex flex-col justify-center items-start mt-12">
          <img
            src="/public/content/logo-RollingStone.svg"
            alt="Rolling Stone"
          />
          <p className="text-sm mt-3 opacity-70 font-mono lg:text-base">
            The Authority on Music, Politics, and Culture
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
