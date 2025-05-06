import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HiChevronDown } from "react-icons/hi";
import CreditCardForm from "../Components/CreditCardForm";

const CartCheckout = () => {
  const [isActive, setIsActive] = useState(false);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItem = useSelector((state) => state.cart.cartItem);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const handleAccordion = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <main className="flex flex-col items-center gap-3 lg:flex-row lg:justify-center lg:items-start lg:gap-10 px-4">
      {/* cart summary */}
      <section className="w-full max-w-[36rem] flex flex-col items-center gap-3 lg:order-2">
        <div
          className={`w-full sm:max-w-[36rem] transition-all duration-300 ease-in-out overflow-hidden flex-col gap-3 p-[21px] hidden lg:flex `}
        >
          <h2 className="text-[#59432D] font-semibold text-center mb-8 text-3xl hidden lg:block">
            Order Summary
          </h2>
          <div>
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
                      <span>{product.currentPrice}</span>
                    </div>
                    <p className="uppercase font-mono tracking-wider text-xs">
                      1-pack
                    </p>
                    <p className="font-mono opacity-50 text-xs font-semibold">
                      Will be shipped within 24 hours
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              placeholder="Discount Code or Gift Card"
              className="flex-1 py-[13.5px] px-[11px]  border border-black/2 rounded-md"
            />
            <button className="border border-black/2 py-[13.5px] px-3 rounded-md font-mono font-semibold text-[#59432D] opacity-60">
              Apply
            </button>
          </div>
          {/* subtotal */}
          <div className="flex flex-col gap-2 text-[#59432D] font-mono">
            <div className="flex justify-between items-center">
              <span>Subtotal: {`${totalQuantity} Items`}</span>
              <span>{`€${totalPrice.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span className="text-sm opacity-50">Enter Shipping Address</span>
            </div>
            <div className="flex justify-between items-center">
              <p>Total</p>
              <span className="flex gap-1">
                <p className="opacity-50">Eur</p>{" "}
                {`€${Number(totalPrice).toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleAccordion}
          className="w-full sm:max-w-[36rem] py-[9px] px-[21px] flex items-center gap-2 lg:hidden bg-[#fff5d5]"
        >
          <div className="flex justify-start items-center gap-1 flex-1">
            <span>Order Summary</span>
            <HiChevronDown
              className={`transition-transform duration-300 ease-in-out ${
                isActive ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <span>{`€${totalPrice.toFixed(2)}`}</span>
        </button>

        <div
          className={`w-full sm:max-w-[36rem] transition-all duration-300 ease-in-out overflow-hidden flex flex-col gap-3 ${
            isActive
              ? "py-[9px] px-[21px] h-full scale-100"
              : "h-0 scale-0 opacity-0"
          }`}
        >
          <div>
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
                      <span>{product.currentPrice}</span>
                    </div>
                    <p className="uppercase font-mono tracking-wider text-xs">
                      1-pack
                    </p>
                    <p className="font-mono opacity-50 text-xs font-semibold">
                      Will be shipped within 24 hours
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              placeholder="Discount Code or Gift Card"
              className="flex-1 py-[13.5px] px-[11px]  border border-black/2 rounded-md"
            />
            <button className="border border-black/2 py-[13.5px] px-3 rounded-md font-mono font-semibold text-[#59432D] opacity-60">
              Apply
            </button>
          </div>
          {/* subtotal */}
          <div className="flex flex-col gap-2 text-[#59432D] font-mono">
            <div className="flex justify-between items-center">
              <span>Subtotal: {`${totalQuantity} Items`}</span>
              <span>{`€${totalPrice}`}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span className="text-sm opacity-50">Enter Shipping Address</span>
            </div>
            <div className="flex justify-between items-center">
              <p>Total</p>
              <span className="flex gap-1">
                <p className="opacity-50">Eur</p> {`€${totalPrice}`}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* payment details */}
      <section className="p-[21px] w-full max-w-[36rem] lg:order-1">
        <h1 className="text-[#59432D] font-semibold text-3xl text-center w-full">
          Payment details
        </h1>
        <div className="flex flex-col gap-2 mt-3">
          <h3 className="text-center w-full">Express Checkout</h3>
          <button className="w-full bg-yellow-400 py-2 rounded-md ">
            <span className="text-blue-950 text-2xl font-semibold font-mono">
              Pay
            </span>
            <span className="text-blue-400 text-2xl font-semibold font-mono">
              Pal
            </span>
          </button>
          <p className="text-sm opacity-50 mt-2">
            By continuing with your payment, you agree to the future charges
            listed on this page and the cancellation policy.
          </p>
        </div>
        <div className="w-full my-7">
          <p className="text-center opacity-50">OR</p>
        </div>
        {/* card Payment */}
        <div className="flex flex-col gap-2">
          <h1>Payment</h1>
          <p className="opacity-50 text-sm font-mono">
            All Transactions are secure and Encrypted
          </p>
          <div className="border border-black rounded-lg">
            {/* credit card selection */}
            <div className="flex justify-between items-center p-[14px]">
              <label
                className="flex justify-center items-center gap-1"
                htmlFor="credit"
              >
                <input
                  type="radio"
                  id="credit"
                  name="paymentMethod"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                />
                <p>Credit Card</p>
              </label>
              <div className="flex justify-center items-center gap-1">
                <span>
                  <img src="/content/amex.Csr7hRoy.svg" alt="amex card icon" />
                </span>
                <span>
                  <img
                    src="/content/mastercard.1c4_lyMp.svg"
                    alt="master card icon"
                  />
                </span>
                <span>
                  <img src="/content/visa.sxIq5Dot.svg" alt="visa card icon" />
                </span>
              </div>
            </div>

            {/* credit card form shown below if selected */}
            {paymentMethod === "credit" && (
              <div className="p-[14px] border-t border-black">
                <CreditCardForm paymentMethod={paymentMethod} />
              </div>
            )}

            {/* paypal option */}
            <div className="flex justify-between items-center p-[14px] border-t border-black">
              <label
                htmlFor="paypal"
                className="flex justify-center items-center gap-1"
              >
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                <p>PayPal</p>
              </label>
              <div className="flex justify-center items-center">
                <span>
                  <img
                    src="content/paypal-svgrepo-com.svg"
                    alt="paypal logo"
                    width={30}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* order summary */}
          <div className="flex flex-col gap-2 text-[#59432D] font-mono mt-3 border-b border-black/2 lg:hidden">
            <div className="flex justify-between items-center">
              <span>Subtotal: {`${totalQuantity} Items`}</span>
              <span>{`€${totalPrice.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Shipping</span>
              <span className="text-sm opacity-50">Enter Shipping Address</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">Total</p>
              <span className="flex gap-1">
                <p className="opacity-50">Eur</p>
                {`€${totalPrice.toFixed(2)}`}
              </span>
            </div>
          </div>
          {/* paynow button  */}
          <button
            className={`text-white p-[14px] rounded-lg mt-8 transition-all duration-300 ease-in-out ${
              paymentMethod === "credit" ? "bg-[#F2984D]" : "bg-blue-500"
            }`}
          >{`${
            paymentMethod === "credit" ? "PayNow" : "Pay with Paypal"
          }`}</button>
        </div>
      </section>
    </main>
  );
};

export default CartCheckout;
