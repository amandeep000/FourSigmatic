import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { Link, Navigate, replace, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../Components/store/cartSlice";
const detailsCoffee = [
  { title: "Roast", description: "Medium Roast" },
  { title: "Type", description: "Instant" },
  { title: "Tasting Notes", description: "Notes of Dark chocolate" },
  { title: "Caffine Level", description: "50 Mg Caffeine" },
  { title: "Usage", description: "Stir 1 packet in hot water instantly" },
];

const ProductsPage = ({ isModal = false }) => {
  const selectedPlanData = [
    "Delivery every 30 Days",
    "Delivery every 60 Days",
    "Delivery every 90 Days",
  ];
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sellingPlan, setSellingPlan] = useState("subscribe");
  const [product, setProduct] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(selectedPlanData[0]);
  const [packActive, setPackActive] = useState(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    setPackActive(id);
  };
  const handleDropdown = () => {
    setIsDropDownOpen(() => !isDropDownOpen);
  };
  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (item) => item.id.toString() === id
        );
        setProduct(foundProduct);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There is an error fetching data", error);
      });
  }, [id]);
  // to show loading product

  if (isLoading) {
    return (
      <div className="w-full text-red-400 text-3xl text-center">Loading...</div>
    );
  }
  if (!product) {
    return <Navigate to={"/shop"} replace />;
  }

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    dispatch(openCart());
  };
  return (
    <section className="my-4">
      <div className="flex flex-col gap-10 lg:flex-row px-[50px]">
        {/* image wrapper */}
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="object-cover object-center h-full w-full rounded-xl lg:w-[468px] lg:h-[468px]"
          />
        </div>

        {/* content wrapper */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col gap-y-4">
            <div className="lg:flex justify-start items-center hidden">
              <h3 className="text-white text-sm bg-[#59432D] rounded-3xl px-3 py-1">
                {product.title}
              </h3>
            </div>

            <h1 className="text-3xl lg:text-[40px] font-semibold text-[#59432D]">
              {product.name}
            </h1>

            {/* tags */}
            <div className="flex justify-start items-center gap-2 mt-3">
              {product.tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-3xl text-xs text-[#59432D] border border-black px-3 py-[2px]"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* ratings */}
            <div className="flex justify-start items-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <FaStar fill="gold" key={i} />
              ))}
              <FaStarHalfAlt fill="gold" />
              <span className="ml-2">296 Ratings</span>
            </div>

            {/* pack size */}
            <div className="flex flex-col">
              <h5 className="uppercase text-sm text-[#59432D] tracking-wider">
                Pack Size
              </h5>
              <div className="flex gap-4 mt-3">
                {[
                  {
                    number: "1",
                    id: "btn1",
                    pack: "pack",
                    discount: "+ 16% off",
                    color: "#f2e6ce",
                  },
                  {
                    number: "2",
                    id: "btn2",
                    pack: "pack",
                    discount: "+ 20% off",
                  },
                  {
                    number: "3",
                    id: "btn3",
                    pack: "pack",
                    discount: "+ 25% off",
                  },
                ].map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleClick(item.id)}
                    className={`flex flex-col flex-1 justify-center items-center border border-black pt-5 transition duration-300 ease-in-out rounded-md ${
                      packActive === item.id ? "bg-[#f2e6ce] shadow-md" : ""
                    }`}
                  >
                    <h2 className="text-xl font-semibold mb-2">
                      {item.number}
                    </h2>
                    <p className="text-xl">{item.pack}</p>
                    <p className="text-sm opacity-60 pb-2">{item.discount}</p>
                  </button>
                ))}
              </div>
            </div>
            {/* subscription */}
            <div
              className={`flex flex-col items-center gap-3 w-full transition duration-300 ease-in-out`}
            >
              <div
                className={`flex justify-start items-center w-full ${
                  sellingPlan === "subscribe" ? "opacity-100" : "opacity-50"
                }`}
              >
                <input
                  id="subscribe"
                  type="radio"
                  value="subscribe"
                  name="purchaseType"
                  checked={sellingPlan === "subscribe"}
                  onChange={(e) => setSellingPlan(e.target.value)}
                />
                <label
                  htmlFor="subscribe"
                  className="font-sans w-full flex justify-between cursor-pointer "
                >
                  <span className="pl-3">SUBSCRIBE & Save</span>
                  <div>
                    <span className="line-through opacity-50 pr-2">
                      {product.actualPrice}
                    </span>
                    <span>{product.currentPrice}</span>
                  </div>
                </label>
              </div>
              {/* selector */}
              <div
                className={`flex flex-col mt-2 border border-black rounded-lg w-full ${
                  sellingPlan === "subscribe"
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-50 pointer-events-none"
                }`}
              >
                <button
                  onClick={handleDropdown}
                  className="flex justify-between items-center py-3 px-4"
                >
                  <span>{selectedPlan}</span>
                  <span>
                    <FaChevronDown />
                  </span>
                </button>
                {/* dropdown div */}
                <div
                  className={`overflow-hidden flex flex-col border border-black rounded-lg w-full transition-all duration-300 ease-in-out ${
                    isDropDownOpen
                      ? "max-h-[145.6px] scale-y-100"
                      : "max-h-0 scale-y-0"
                  }`}
                >
                  {selectedPlanData.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => {
                        setSelectedPlan(item);
                        setIsDropDownOpen(false);
                      }}
                      className="px-4 py-3 text-start"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              {/* one time payment */}
              <div
                className={`flex justify-start items-center w-full transition duration-300 ease-in-out cursor-pointer ${
                  sellingPlan === "oneTime" ? "opacity-100" : "opacity-50"
                }`}
              >
                <input
                  id="purchase"
                  type="radio"
                  value="oneTime"
                  name="purchaseType"
                  checked={sellingPlan === "oneTime"}
                  onChange={(e) => setSellingPlan(e.target.value)}
                />
                <label
                  htmlFor="purchase"
                  className={`font-sans w-full flex justify-between cursor-pointer`}
                >
                  <span className={`uppercase font-mono pl-3`}>
                    One time purchase
                  </span>
                  <div>
                    <span className="">{product.actualPrice}</span>
                  </div>
                </label>
              </div>
            </div>
            <button
              onClick={addToCartHandler}
              className="bg-[#8C663F] w-full rounded-3xl border border-[#8C663F] text-lg text-white py-3"
            >
              <span>{`Get Started - ${
                sellingPlan === "subscribe"
                  ? `${product.currentPrice}`
                  : `${product.actualPrice}`
              }`}</span>
            </button>
          </div>
          {/* amazon link section */}
          {isModal && (
            <div className="flex flex-col justify-center items-center gap-y-3 text-[#8C663F]">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mb-2">
                <a
                  href="https://www.amazon.com/stores/FourSigmatic/page/BFD5C04F-8BEE-465A-8B09-51EAD476D2DC?lp_asin=B0756D1D39&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto"
                  target="_blank"
                  className="flex justify-center "
                >
                  <span className="font-semibold text-lg pr-2 cursor-pointer">
                    Also Available On
                  </span>{" "}
                  <img
                    src="/content/Amazon_logo.svg"
                    alt="Amazon logo"
                    width={64}
                    height={20}
                    className="self-end cursor-pointer"
                  />
                </a>
                <span className="font-semibold">Satisfaction Guaranteed</span>
              </div>
              <span className="font-semibold">
                Usually ships within 24 hours
              </span>
            </div>
          )}
        </div>
      </div>
      {/* contnet section */}
      {!isModal && (
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
      )}
      {/* product details */}
      {!isModal && (
        <div className="container py-24 px-5 md:px-[50px] grid grid-cols-1 gap-y-10 lg:grid-cols-3 gap-x-10">
          {detailsCoffee.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4">
              <span className="text-sm text-[#F2983D] font-mono font-semibold tracking-widest lg:text-base">
                {item.title}
              </span>
              <span className="text-[28px] text-[#59432D] font-semibold">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
