import React, { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../index";
import Home from "../../Pages/Home";
// import Shop from "../../Pages/Shop";
// import About from "../../Pages/About";
// import SearchPage from "../../Pages/SearchPage";
// import NotFound from "../../Pages/NotFound";
// import ProductsPage from "../../Pages/ProductsPage";
// import CartCheckout from "../../Pages/CartCheckout";

// const Home = lazy(() => import("../../Pages/Home"));
const Shop = lazy(() => import("../../Pages/Shop"));
const About = lazy(() => import("../../Pages/About"));
const SearchPage = lazy(() => import("../../Pages/SearchPage"));
const NotFound = lazy(() => import("../../Pages/NotFound"));
const ProductsPage = lazy(() => import("../../Pages/ProductsPage"));
const CartCheckout = lazy(() => import("../../Pages/CartCheckout"));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/shop/:category?" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/cart" element={<CartCheckout />} />
      <Route path="/products/:id" element={<ProductsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Router;
