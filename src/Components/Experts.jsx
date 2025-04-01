import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Experts = () => {
  const expertData = [
    {
      id: "expert-1",
      image: `/public/content/Dr._Bindiya__copy.webp`,
      expertTitle: `“They only use extracted fruiting bodies, which is essential to truly reap its benefits.”`,
      name: `Dr. Bindiya Gandhi`,
      profession: `Double Board-Certified Integrative & Functional Medicine Doctor`,
    },
    {
      id: `expert-2`,
      image: `/public/content/markHayman.webp`,
      expertTitle: `Reishi, lions mane, chaga and cordyceps mushrooms contain powerful properties.`,
      name: `Dr. Mark Hyman`,
      profession: `Physician & Author`,
    },
    {
      id: `expert-3`,
      image: `/public/content/Danielle_Ryan_Broida.webp`,
      expertTitle: `Perfect for long-term daily support for overall wellbeing.`,
      name: `Danielle Ryan Broida`,
      profession: `Registered Herbalist & Holistic Nutritionist`,
    },
  ];

  // Track active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="py-16">
        <div>
          <p className="uppercase tracking-widest text-orange-500 font-mono">
            Backed By Experts
          </p>
        </div>

        {/* Wrapper: Controls Layout */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Swiper for Images */}
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Navigation, Autoplay]}
              centeredSlides={true}
              loop={true}
              speed={800}
              spaceBetween={20} // ✅ Only 20px gap between images
              slidesPerView={1.2} // ✅ Slight overlap for a smoother transition
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {expertData.map((data, index) => (
                <SwiperSlide key={data.id}>
                  <div className="flex justify-center">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="h-full w-auto object-cover rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Stationary Content (Updates with active image) */}
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-left">
              {/* Star Ratings */}
              <div className="flex justify-center md:justify-start mb-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} fill="orange" />
                  ))}
              </div>

              {/* Expert Title */}
              <h1 className="text-lg font-semibold">
                {expertData[activeIndex].expertTitle}
              </h1>

              {/* Expert Name & Profession */}
              <p className="font-medium mt-2">{expertData[activeIndex].name}</p>
              <p className="text-gray-600">
                {expertData[activeIndex].profession}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
