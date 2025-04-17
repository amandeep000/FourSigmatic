import React from "react";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <main>
      <section>
        <div className="px-4 py-24">
          <div className="flex flex-col justify-center items-center gap-10 text-center text-[#59432D]">
            <h1 className="text-[48px] font-semibold leading-tight">
              From the Finnish Countryside to your Kitchen
            </h1>
            <p className="font-semibold">
              For 11 years, Four Sigmatic has been serving up mushroom and
              adaptogen packed blends to improve your life. But our roots go
              back even further, all the way to WWII in Nordic land rich with
              lakes, forests, and lots of mushrooms.
            </p>
          </div>
        </div>

        {/* video section */}
        <div className="w-full h-full aspect-[1920/1080] mx-auto px-[30px] lg:px-[50px]">
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <ReactPlayer
              url={"https://youtu.be/oivtz3i02B4?si=mv-EStTGFKbZQXQM"}
              width="100%"
              height="100%"
              controls={true}
              playing={false}
              light={false}
            />
          </div>
        </div>

        <div className="px-[30px] lg:px-[50px] mx-auto py-14">
          <div className="flex flex-col justify-center items-center gap-6 lg:gap-28 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="/content/founder.webp"
                alt="founder"
                className="object-cover w-full lg:object-contain"
              />
            </div>
            <div className="w-full lg:w-1/2 h-full text-[#59432D]">
              <p className="text-2xl  font-semibold h-full lg:text-4xl leading-normal pb-4">
                "We started as a hard-to-understand brand ‘on shrooms’ but now
                we're doubling down on our true calling of delivering you mental
                performance and wellbeing."
              </p>
              <p className="mt-3 lg:text-3xl font-medium">Tero Isokauppila</p>
              <h3 className="mt-2 text-orange-500 font-mono tracking-wider uppercase">
                founder
              </h3>
            </div>
          </div>
        </div>

        {/* chart section */}
        <div className="container mx-auto px-7 lg:px-0 py-16 lg:py-24 bg-[#d3e7ed] max-w-[1920px]">
          <div className="mx-auto flex flex-col justify-center items-center text-center">
            <h1 className="uppercase mx-auto mb-8 mx-w-[68rem] font-mono text-blue-400 lg:text-base font-semibold tracking-wider">
              What does four Sigmatic mean?
            </h1>
            <p className="text-[#2D4A59] text-[32px] font-semibold lg:text-[40px] max-w-[68rem] mx-auto">
              Based on the 100 most-studied, most nutrient-dense foods on the
              planet, each “sigma” represents how far a food is from an average
              nutritional value. Four Sigmatic foods are beyond better. You
              might even say they’re the best.
            </p>
            <picture>
              <source
                srcSet="/content/Health_Chart.webp"
                media="(min-width: 768px)"
              />
              <img src="/content/Health_Chart_mobile.webp" alt="health chart" />
            </picture>
          </div>
        </div>
        {/* our mission */}
        <div className="container">
          <div className="flex flex-col justify-center px-7 md:px-[50px] gap-6 py-12 md:py-14 lg:flex-row lg:items-center xl:p-14 lg:gap-28">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden lg:w-1/2">
              <picture>
                <source
                  srcSet="/content/mission-lg.webp"
                  media="(min-width:768px)"
                />
                <img
                  src="/content/mission-mobile.webp"
                  alt="coffee image"
                  className="object-cover object-center w-full "
                />
              </picture>
            </div>
            <div className="container lg:w-1/2">
              <div className="lg:max-w-[32rem] w-full text-[#59432D]">
                <h2 className="text-2xl font-semibold w-full mb-5 lg:text-[40px]">
                  Our Mission
                </h2>
                <p className="font-semibold w-full xl:text-2xl">
                  We want to help you feel your best. Whether that’s your body
                  or your mind, we believe that mushrooms are the key to living
                  a healthier and happier life. Here at Four Sigmatic, we use
                  our Nordic roots and foraging traditions to share functional
                  mushroom’s benefits with you and your family in easy to
                  incorporate coffees, elixirs, and more. We take pride in every
                  mushroom we harvest and every herb we source so you can feel
                  our care and commitment to your wellness in every cup.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* our Team */}
        <div className="container">
          <div className="flex flex-col justify-center px-7 md:px-[50px] gap-6 py-12 md:py-14 lg:flex-row lg:items-center xl:p-14 lg:gap-28">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden lg:w-1/2 lg:order-2">
              <picture>
                <source
                  srcSet="/content/team-lg.webp"
                  media="(min-width:768px)"
                />
                <img
                  src="/public/content/team-lg.webp"
                  alt="coffee image"
                  className="object-cover object-center w-full "
                />
              </picture>
            </div>
            <div className="container lg:w-1/2 lg:order-1">
              <div className="lg:max-w-[32rem] w-full text-[#59432D]">
                <h2 className="text-2xl font-semibold w-full mb-5 lg:text-[40px]">
                  Join Our Team
                </h2>
                <p className="font-semibold w-full xl:text-2xl">
                  We're a crew of parents, music enthusiasts, mushroom foragers,
                  world travelers, ice hockey fans, coffee aficionados, and
                  more. What we all have in common is a passion for elevating
                  mindfullness and being the best part of Four Sigmatic. We've
                  served 100 million+ cups of mushroom-powered drinks worldwide,
                  and we're looking for someone like you to join us for the next
                  100 million.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
