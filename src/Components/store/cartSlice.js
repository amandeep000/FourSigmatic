import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems"));
const initialState = {
  cartItem: storedCart?.cartItems || [],
  isCartOpen: false,
  totalQuantity: Number(storedCart?.totalQuantity) || 0,
  totalPrice: Number(storedCart?.totalPrice) || 0,
};

const saveCartToLocalStorage = (state) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify({
      cartItems: state.cartItem,
      totalQuantity: state.totalQuantity,
      totalPrice: state.totalPrice,
    })
  );
};

const getNumericPrice = (price) => {
  if (typeof price === "string") {
    return parseFloat(price.replace(/[^0-9.]/g, ""));
  }
  return price;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
    addToCart: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload.id);
      const numericPrice = getNumericPrice(action.payload.currentPrice);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += numericPrice;
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItem.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        const numericPrice = getNumericPrice(itemToRemove.currentPrice);
        state.totalQuantity -= itemToRemove.quantity;
        state.totalPrice -= numericPrice * itemToRemove.quantity;

        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
        saveCartToLocalStorage(state);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        const numericPrice = getNumericPrice(item.currentPrice);
        item.quantity += 1;
        state.totalPrice += numericPrice;
        state.totalQuantity += 1;
      }
      saveCartToLocalStorage(state);
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload);
      if (item) {
        const numericPrice = getNumericPrice(item.currentPrice);
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalPrice -= numericPrice;
          state.totalQuantity -= 1;
        } else {
          state.cartItem = state.cartItem.filter(
            (item) => item.id !== action.payload
          );
          state.totalQuantity -= 1;
          state.totalPrice -= numericPrice;
        }
      }
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  openCart,
  closeCart,
} = cartSlice.actions;
export default cartSlice.reducer;
