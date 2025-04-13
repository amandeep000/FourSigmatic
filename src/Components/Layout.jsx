import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartSlider from "../Components/CartSlider";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <CartSlider />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
