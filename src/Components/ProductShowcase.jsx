import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { setProducts } from "./store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ProductShowcase = () => {
  const dispatch = useDispatch();
  const { products, isLoaded } = useSelector((state) => state.products);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 1.4, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.3, spacing: 24 },
      },
      "(min-width: 820px)": {
        slides: { perView: 2.6, spacing: 28 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.3, spacing: 32 },
      },
      "(min-width: 1440px)": {
        slides: { perView: 4.3, spacing: 36 },
      },
      "(min-width: 1920px)": {
        slides: { perView: 5, spacing: 60 },
      },
    },
  });

  useEffect(() => {
    if (!isLoaded) {
      fetch("/db.json")
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data", data);
          dispatch(setProducts(data.products));
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    }
  }, [dispatch, isLoaded]);

  // Recalculate Keen Slider after initial render and on window resize
  useEffect(() => {
    // Delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      instanceRef.current?.update();
    }, 100);

    // Recalculate on resize/orientation change
    const handleResize = () => {
      instanceRef.current?.update();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [instanceRef]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="py-8 relative max-w-[100vw]">
        {/* Keen Slider Container */}
        <div
          ref={sliderRef}
          className="keen-slider px-4 sm:px-6 lg:px-8 box-content"
        >
          {products.slice(0, 7).map((product) => (
            <div
              key={product.id}
              className="keen-slider__slide flex justify-center"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-10 h-10 bg-white text-[#59483D] rounded-full shadow-md hover:scale-110 transition-transform"
          >
            ←
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
          <button
            onClick={() => instanceRef.current?.next()}
            className="w-10 h-10 bg-white text-[#59483D] rounded-full shadow-md hover:scale-110 transition-transform"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
