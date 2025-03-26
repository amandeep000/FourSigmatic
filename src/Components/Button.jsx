import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  bgColor = "",
  textColor = "text-white",
  ...props
}) => {
  return (
    <button
      className={`bg-[#59432d] ${className} ${bgColor} ${textColor}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
