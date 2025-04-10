import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const [product, setProduct] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("30");
  const { id } = useParams();
  const plans = [
    { value: "30", label: "30 Days" },
    { value: "60", label: "60 Days" },
    { value: "90", label: "90 Days" },
  ];

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (item) => item.id.toString() === id
        );
        setProduct(foundProduct);
      })
      .catch((error) => {
        console.error("There is an error fetching data", error);
      });
  }, []);

  useEffect(() => {
    console.log("this is found product", product);
  }, [product]);

  if (!product) {
    return <div className="p-4 text-3xl text-red-700">Loading Product...</div>;
  }

  return (
    <section className="my-4">
      <div className="flex flex-col gap-10 lg:flex-row px-[50px]">
        {/* image wrapper */}
        <div>
          <h2 className="lg:hidden">{product.title}</h2>
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover object-center h-full w-full"
          />
        </div>

        {/* content wrapper */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="lg:flex justify-start items-center hidden">
              <h3>{product.title}</h3>
            </div>

            <h1 className="text-3xl">{product.name}</h1>

            {/* tags */}
            <div className="flex justify-start items-center gap-2">
              {product.tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-3xl text-[#59432D] border border-black px-3 py-[2px]"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* ratings */}
            <div className="flex justify-start items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <FaStar fill="gold" key={i} />
              ))}
              <FaStarHalfAlt fill="gold" />
              <span className="ml-2">296 Ratings</span>
            </div>

            {/* pack size */}
            <div className="flex gap-4 mt-3">
              {[
                {
                  number: "1",
                  pack: "pack",
                  discount: "+ 16% off",
                  color: "#f2e6ce",
                },
                { number: "2", pack: "pack", discount: "+ 20% off" },
                { number: "3", pack: "pack", discount: "+ 25% off" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-1 justify-center items-center gap-1 border border-black p-2 rounded-md"
                >
                  <h2 className="text-xl font-semibold">{item.number}</h2>
                  <p className="text-xl">{item.pack}</p>
                  <p className="text-sm opacity-60">{item.discount}</p>
                </div>
              ))}
            </div>
            {/* subscription */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex justify-start items-center w-full">
                <input id="subscribe" type="radio" />
                <label
                  htmlFor="subscribe"
                  className="font-sans w-full flex justify-between "
                >
                  <span>SUBSCRIBE & Save</span>
                  <div>
                    <span className="line-through opacity-50 pr-2">
                      {product.actualPrice}
                    </span>
                    <span>{product.currentPrice}</span>
                  </div>
                </label>
              </div>
              {/* selector */}
              <div className="flex gap-3 justify-evenly mt-2 border border-black rounded-2xl w-full py-3">
                {plans.map((plan) => (
                  <button
                    key={plan.value}
                    onClick={() => setSelectedPlan(plan.value)}
                    className={`px-6 py-2 rounded-full border text-sm font-medium transition 
            ${
              selectedPlan === plan.value
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>
              {/* one time payment */}
              <div className="flex justify-start items-center w-full">
                <input id="purchase" type="radio" />
                <label
                  htmlFor="purchase"
                  className="font-sans w-full flex justify-between "
                >
                  <span className="uppercase font-mono">One time purchase</span>
                  <div>
                    <span className="">{product.actualPrice}</span>
                  </div>
                </label>
              </div>
              <button className="bg-[#8C663F] w-full rounded-3xl border border-[#8C663F] text-lg text-white py-3">
                <span>{`Get Started - ${product.actualPrice}`}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* contnet section */}
      <div className="py-16 w-full container max-w-[1440px] mx-auto">
        <div className="px-[20px] w-full md:px-[50px]">
          <span className="w-full block mb-12 font-mono text-orange-500 tracking-widers text-center">
            DRINK BETTER, THINK BETTER
          </span>
          <span className="block w-full text-center mb-24 text-3xl lg:text-[40px] lg:leading-snug font-semibold text-[#59432D] tracking-wider">
            Organic coffee powered by lion’s mane and chaga mushrooms. See
            results in as little as 7 days with focus that tastes unbelievably
            delicious.
          </span>
          <ul className="flex flex-col justify-center lg:flex-row lg:justify-around items-center w-full capitalize gap-6 text-[#59432D] text-2xl text-center font-semibold">
            <li className="flex flex-col justify-center items-center max-w-[220px]">
              <img
                src="/Products_Shop/image1.png"
                alt="enhanced mental focus"
                width={110}
                height={90}
              />
              <span className="mt-8">Enhanced Mental Focus</span>
            </li>
            <li className="flex flex-col justify-center items-center max-w-[220px]">
              <img
                src="/Products_Shop/image2.png"
                alt="Boost of energy"
                width={110}
                height={90}
              />
              <span className="mt-8">Boost of Energy</span>
            </li>
            <li className="flex flex-col justify-center items-center max-w-[220px]">
              <img
                src="/Products_Shop/sun.svg"
                alt="enhanced mental focus"
                width={110}
                height={90}
              />
              <span className="mt-8">Long-Term Positive mood</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
