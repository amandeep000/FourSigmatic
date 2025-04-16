import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "./store/cartSlice";
import { FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMinus, HiPlus } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "./store/cartSlice";

const CartSlider = () => {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  let [totalActualPrice, setTotalActualPrice] = useState(0);

  useEffect(() => {
    console.log(cartItem.length);
    let total = 0;
    cartItem.map((price) => {
      const match = price.actualPrice.match(/[\d.]+/);
      const actualPrice = Number(match);
      total += actualPrice;
    });
    setTotalActualPrice(total);
  }, [cartItem, totalActualPrice]);
  return (
    <>
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => dispatch(closeCart())}
      />

      {/* Sliding Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[452px] bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className=" p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-[#59432D]">Your Cart</h2>
          <button
            className="text-gray-500 hover:text-black text-2xl"
            onClick={() => dispatch(closeCart())}
          >
            <FiX className="bg-[#59432D] p-1 rounded-full text-white" />
          </button>
        </div>
        {/* You are €59,00 away from FREE SHIPPING */}
        <div className="bg-[#faf5ed] py-[10px] px-[20px] text-center">
          <p className="text-xs">
            You are €59,00 away from <span className="">FREE SHIPPING</span>
          </p>
        </div>

        {/* empty cart */}
        <div className="flex flex-col justify-center items-center">
          <div
            className={`py-10 px-5 flex flex-col justify-center items-center text-center text-[#59432D] ${
              Array.isArray(cartItem) && cartItem.length > 0
                ? "hidden"
                : "block"
            }`}
          >
            <h4 className="m-[10px] text-4xl font-semibold w-full text-center">
              Your cart is empty
            </h4>
            <p className="m-[10px] w-full">Add your favourite items cart</p>
            <Link
              to={"/shop"}
              onClick={() => dispatch(closeCart())}
              className="border-[2px] border-[#59432D] py-2 px-12 rounded-3xl m-[10px] hover:bg-[#8c663f] transition-colors duration-300 ease-in-out hover:text-white hover:border-none"
              type="button"
            >
              <span className="text-xl font-medium w-full">Shop Now</span>
            </Link>
          </div>

          {/* cart products */}
          <div className="w-full py-5 px-5 ">
            <ul className="w-full flex flex-1 flex-col gap-4">
              {cartItem.map((product) => (
                <li
                  key={product.id}
                  style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                  className="w-full flex items-center gap-x-2 p-2 rounded-xl"
                >
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      width={88}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col w-full pl-5">
                    <div className="flex items-center gap-2 w-full">
                      <p className="flex-1 font-medium text-lg text-[#59432D] tracking-wide">
                        {product.name}
                      </p>
                      <span>
                        <FiX
                          className="text-xl bg-[#59432D] p-1 text-white rounded-full"
                          onClick={() => dispatch(removeFromCart(product.id))}
                        />
                      </span>
                    </div>
                    <p className="uppercase font-mono tracking-wider text-xs">
                      1-pack
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-center border border-black/2 rounded-md text-sm text-[#59432D] mt-[10px]">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(decrementQuantity(product.id))
                          }
                          className="border-r border-black/2 h-6 w-9 flex justify-center items-center cursor-pointer"
                        >
                          <HiMinus className="font-semibold" />
                        </button>
                        <span className="h-6 w-9 border-r border-black/2 flex justify-center items-center">
                          {product.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(incrementQuantity(product.id))
                          }
                          className="h-6 w-9 flex justify-center items-center cursor-pointer"
                        >
                          <HiPlus className="font-extrabold" />
                        </button>
                      </div>
                      <div className="flex justify-center items-center gap-2 text-[#59432D] mt-[5px]">
                        <span className="line-through opacity-50">
                          {product.actualPrice}
                        </span>
                        <span>{product.currentPrice}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* fixed checkout footer */}
        <div
          className={`fixed bottom-0 left-0 w-full px-5 pt-3 pb-4 bg-[#59432D] text-white ${
            Array.isArray(cartItem) && cartItem.length > 0 ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between mb-[10px]">
            <div>{`Subtotal (${totalQuantity} items)`}</div>
            <div className="flex justify-center items-center gap-2">
              <span>{`€${totalPrice.toFixed(2)}`}</span>
              <span className="line-through opacity-50">{`€ ${totalActualPrice}`}</span>
            </div>
          </div>
          {/* checkout button */}
          <Link
            to={"/cart"}
            onClick={() => dispatch(closeCart())}
            className="border-2 border-white bg-[#f2983d] rounded-[7rem] w-full flex justify-center gap-3 items-center mb-4"
          >
            <span className="text-xl font-semibold py-3 px-4">
              Proceed to Checkout
            </span>
            <span>
              <FaArrowRight />
            </span>
          </Link>
          <p className="text-center font-mono tracking-wider">
            Money Back Guarantee
          </p>
        </div>
      </div>
    </>
  );
};

export default CartSlider;
