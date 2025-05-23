import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const expertData = [
  {
    id: "expert-1",
    image: "/content/Dr._Bindiya__copy.webp",
    expertTitle:
      "They only use extracted fruiting bodies, which is essential to truly reap its benefits.",
    name: "Dr. Bindiya Gandhi",
    profession:
      "Double Board-Certified Integrative & Functional Medicine Doctor",
  },
  {
    id: "expert-2",
    image: "/content/markHayman.webp",
    expertTitle:
      "Reishi, lions mane, chaga and cordyceps mushrooms contain powerful properties.",
    name: "Dr. Mark Hyman",
    profession: "Physician & Author",
  },
  {
    id: "expert-3",
    image: "/content/Danielle_Ryan_Broida.webp",
    expertTitle: "Perfect for long-term daily support for overall wellbeing.",
    name: "Danielle Ryan Broida",
    profession: "Registered Herbalist & Holistic Nutritionist",
  },
];

const Experts = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      className="py-12 md:pl-6 lg:pl-8"
      aria-labelledby="experts-heading"
    >
      <div className="max-w-full mx-auto text-center relative">
        <h2
          id="experts-heading"
          className="uppercase tracking-widest text-3xl underline underline-offset-8 decoration-orange-700 text-orange-500 font-mono mb-8"
        >
          Backed By Experts
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={800}
          allowTouchMove={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          breakpoints={{
            425: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
            1440: { slidesPerView: 3.5 },
          }}
        >
          {expertData.map((data, index) => (
            <React.Fragment key={data.id}>
              <SwiperSlide key={`${data.id}-image`} className="px-3">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-full max-h-[400px] rounded-xl">
                    <img
                      src={data.image}
                      alt={`Photo of ${data.name}`}
                      loading="lazy"
                      aria-label={`Photo of expert ${data.name}`}
                      className={`object-cover aspect-auto h-[400px] w-full rounded-xl object-top ${
                        active === index ? "border-4 border-orange-500" : ""
                      }`}
                    />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide key={`${data.id}-text`} className="px-3">
                <div
                  className="px-6 pt-6 pb-3 w-full flex justify-center items-center bg-[#fae3a3] rounded-xl h-[400px]"
                  aria-label={`Expert opinion from ${data.name}`}
                >
                  <div>
                    <div className="flex flex-col justify-evenly items-start h-[400px]">
                      <div
                        className="flex justify-center items-center"
                        aria-label="5 star rating"
                      >
                        {[...Array(5)].map((_, i) => (
                          <FaStar fill="orange" key={i} />
                        ))}
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-start text-[#59432D]">
                          {data.expertTitle}
                        </h2>
                        <p className="mt-2 font-semibold text-orange-500 text-start">
                          {data.profession}
                        </p>
                      </div>
                      <div className="w-full flex justify-between items-center text-[#59432D] mt-6">
                        <p className="underline underline-offset-2">
                          {data.name}
                        </p>
                        <p className="bg-orange-500 text-white py-[3px] px-5 rounded-[6rem]">
                          Expert
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </React.Fragment>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experts;
