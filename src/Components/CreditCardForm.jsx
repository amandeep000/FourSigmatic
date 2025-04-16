import React, { useState } from "react";

const CreditCardForm = ({ paymentMethod }) => {
  const [form, setForm] = useState({
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const cardRegex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^[0-9]{3,4}$/;

  const validate = () => {
    const newErrors = {};
    if (!cardRegex.test(form.cardNumber.replace(/\s+/g, ""))) {
      newErrors.cardNumber = "Invalid card number.";
    }
    if (!expiryRegex.test(form.expiry)) {
      newErrors.expiry = "Expiry must be in MM/YY format.";
    }
    if (!cvvRegex.test(form.cvv)) {
      newErrors.cvv = "Invalid CVV.";
    }
    if (!form.cardHolder.trim()) {
      newErrors.cardHolder = "Cardholder name is required.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Mock submission:", form);
      alert("Payment details submitted (dummy frontend only)");
    }
  };

  if (paymentMethod !== "credit") return null;

  return (
    <div className=" w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-[#59432D]">
          Credit Card Information
        </h2>

        {/* Card Number */}
        <div>
          <label className="block text-sm text-[#59432D] font-medium mb-1">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={form.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F2984D]"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>

        {/* Cardholder Name */}
        <div>
          <label className="block text-sm text-[#59432D] font-medium mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            name="cardHolder"
            placeholder="John Doe"
            value={form.cardHolder}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F2984D]"
          />
          {errors.cardHolder && (
            <p className="text-red-500 text-sm mt-1">{errors.cardHolder}</p>
          )}
        </div>

        {/* Expiry & CVV */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm text-[#59432D] font-medium mb-1">
              Expiry (MM/YY)
            </label>
            <input
              type="text"
              name="expiry"
              placeholder="09/25"
              value={form.expiry}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F2984D]"
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
            )}
          </div>

          <div className="w-1/2">
            <label className="block text-sm text-[#59432D] font-medium mb-1">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              placeholder="123"
              value={form.cvv}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#F2984D]"
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;
