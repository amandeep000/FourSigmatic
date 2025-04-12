import React from "react";
import { FiX } from "react-icons/fi";
import ProductsPage from "../Pages/ProductsPage";

const Modal = () => {
  return (
    <div className="max-w-5xl relative mx-auto">
      <div className="pt-[2rem]">
        {/* close button */}
        <div className="absolute top-0 left-0">
          <FiX />
        </div>
        {/* content */}
        <ProductsPage isModal={true} />
      </div>
    </div>
  );
};

export default Modal;
