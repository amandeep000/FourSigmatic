import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";

const HeroSwiper = () => {
  const data = [
    {
      review: `I love the coffee. It is delicious and is helping me get my brain started each day.`,
      name: "Aura W.",
    },
    {
      review:
        "I feel less anxious, less irritable, more willing to focus on work. Tastes good.",
      name: "Nikhil T.",
    },
    {
      review: "This Coffee is my night fuel, to keep me awake in the night.",
      name: "Nitesh T.",
    },
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      speed={800}
      allowTouchMove={false}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {data.map((data) => (
        <SwiperSlide key={data.name}>
          <div>
            <p className="w-full text-[#59432D]">{data.review}</p>
            <p className="w-full uppercase text-[#707170]">{data.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSwiper;
