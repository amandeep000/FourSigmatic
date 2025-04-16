import React from "react";

const Achieve = () => {
  return (
    <>
      <section
        className="w-full flex flex-col justify-center items-center bg-[#FAE9C8]  before:block before:bg-gradient-to-b before:from-[#f9f5ed] before:to-[#fae9c8] before:z-40 before:h-24 before:w-full"
        aria-label="Achieve Mushroom Coffee Promotion"
      >
        <div className="w-full max-w-[1000px] py-6 px-8 gap-y-6 ">
          <div className="flex flex-col justify-center items-center md:flex-row md:gap-x-6">
            {/* Image container */}
            <div className="w-full h-[300px] self-stretch ">
              <picture className="w-full h-full block" aria-hidden="true">
                <source
                  srcSet="/enhanced coffee/640.webp"
                  media="(max-width: 640px)"
                />
                <source
                  srcSet="/enhanced coffee/641-820.webp"
                  media="(min-width: 641px) and (max-width: 820px)"
                />
                <source
                  srcSet="/enhanced coffee/821-1024.webp"
                  media="(min-width: 821px) and (max-width: 1024px)"
                />
                <source
                  srcSet="/enhanced coffee/1024.webp"
                  media="(min-width: 1025px)"
                />
                <img
                  src="/enhanced coffee/min640.webp"
                  alt="Cup of mushroom coffee"
                  className="w-full h-full object-cover rounded-xl"
                />
              </picture>
            </div>

            {/* Content block */}
            <div className="flex flex-col justify-start items-center gap-y-3 text-[#59432D]">
              <div className="flex justify-start w-full mt-5">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Achieve Mushroom Coffee
                </h2>
              </div>
              <p className="leading-snug md:text-2xl md:leading-relaxed font-medium">
                Organic coffee powered by lion’s mane and chaga mushrooms. See
                results in as little as 7 days with focus that tastes
                unbelievably delicious.
              </p>
              <div className="w-full flex justify-start items-center ">
                <button
                  type="button"
                  className="bg-[#FFFFFF] md:w-[300px] md:text-white md:bg-[#59432D] rounded-3xl px-14 py-2"
                  aria-label="Try Achieve Mushroom Coffee"
                >
                  <p className="text-xl">Try it</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="relative bottom-0 -mb-[112px] z-40 pb-6"
        aria-hidden="true"
      >
        <picture className="absolute bottom-0 right-0">
          <source
            srcSet="/enhanced coffee/Flower.svg"
            media="(min-width: 1025px)"
          />
          <source
            srcSet="/enhanced coffee/flower821-1024.svg"
            media="(min-width: 768px) and (max-width: 1024px)"
          />
          <img
            src="/enhanced coffee/flowerstandard.svg"
            alt=""
            className="w-full h-auto object-cover"
          />
        </picture>
        <img
          src="/enhanced coffee/wave1.svg"
          alt=""
          className="w-full object-cover"
        />
      </div>
    </>
  );
};

export default Achieve;
