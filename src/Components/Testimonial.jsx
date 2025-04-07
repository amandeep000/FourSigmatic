import React from "react";
import { FaStar } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Testimonial = () => {
  const TestimonialData = [
    {
      id: "testimonial-1",
      img: "/content/Think_Ground_Good_Testimonial_Adam_M.webp",
      reviewTitle: "Kinda changing my life...",
      reviewDes: `"Love this coffee. Been telling everyone I know about it. Placebo or not, I feel less anxious, less irritable, more willing to focus on work and complex tasks, tastes good and also makes me feel"`,
      name: "Adam M.",
    },
    {
      id: "testimonial-2",
      img: "/content/Think_Ground_Testimonials_Christine.webp",
      reviewTitle: `"Best healthy coffee ever"`,
      reviewDes: `"We found this coffee at Walmart and have enjoyed it so much for its healthy ingredients and still great coffee. It is a little pricey, so we do autoship and saves us a little. Good to know your drinking a healthy cup of Joe each day."`,
      name: "Laura J.",
    },
    {
      id: "testimonial-3",
      img: "/content/Smiling_Testimonial_Laura_J.webp",
      reviewTitle: `"Organic non-GMO Real Coffee..."`,
      reviewDes: `"The title says it all, real coffee. Not only tastes great but helps your body heal while you drink it.
Never liked coffee until trying Four Sigmatic. Now I drink it everyday, and add Maple syrup for sweetener."`,
      name: `Richard W.`,
    },
  ];

  return (
    <div className="relative my-6">
      <h2 className="uppercase tracking-widest text-3xl underline underline-offset-8 decoration-orange-700 text-orange-500 font-mono mb-8 text-center">
        Testimonials
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        speed={800}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          425: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
          1440: { slidesPerView: 3.5 },
        }}
      >
        {TestimonialData.map((data) => (
          <React.Fragment key={data.id}>
            <SwiperSlide className="px-3">
              <div className="flex justify-center items-center gap-4">
                <div className="w-full max-h-[315px] rounded-xl">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="object-cover h-[315px] w-full rounded-xl object-top"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-3">
              <div className="px-6 pt-6 pb-3 w-full flex justify-center items-center bg-[#fae3a3] rounded-xl h-[315px]">
                <div>
                  <div className="flex flex-col justify-center items-start h-[315px]">
                    <div className="flex justify-center items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} fill="orange" />
                      ))}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-[#59432D]">
                        {data.reviewTitle}
                      </h2>
                      <p className="mt-2 font-semibold text-[#59432D]">
                        {data.reviewDes}
                      </p>
                    </div>
                    <div className="w-full flex justify-between items-center text-[#59432D] mt-6">
                      <p>{data.name}</p>
                      <p className="border border-black py-[3px] px-4 rounded-[6rem]">
                        verified Buyer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !bg-white !text-[#59483D]"></div>
      <div className="swiper-button-next !bg-white !text-[#59483D]"></div>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: white;
          color: #59483d;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
