import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "./store/cartSlice";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CartSlider = () => {
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);

  useEffect(() => {
    console.log(cartItem);
    console.log(cartItem.length);
  }, []);
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
        className={`fixed top-0 right-0 h-full w-[452px] bg-white shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
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

        {/* Cart Content */}
        <div
          className={`py-10 px-5 flex flex-col justify-center items-center text-center text-[#59432D] ${
            cartItem.length > 0 ? "block" : "hidden"
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
        <div>
          <ul className="w-full">
            {cartItem.map((product) => (
              <li
                key={product.id}
                className="flex justify-center items-center gap-x-2"
              >
                <div>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    width={88}
                    height={100}
                  />
                </div>
                <div></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartSlider;
