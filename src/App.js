import { HashRouter } from "react-router-dom";
import React from "react";
import Home from "./Pages/home/Home";
import Header from "./components/header/Header";
import About from "./Pages/about/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TermsAndCondition from "./Pages/TermsAndCondition/TermsAndCondition";
import AboutEnche from "./components/Footer/FooterPages/AboutEnche";
import AboutEnchepreneur from "./components/Footer/FooterPages/AboutEnchepreneur";
import AllProducts from "./Pages/ProductPages/AllProductsPages/AllProduct/AllProducts";
import ProductDetails from "./Pages/ProductPages/ProductDetailsPage/Product/ProductDetails";

import Buyer from "./Pages/Dashboard/components/Buyer";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/aboutenche" element={<AboutEnche />} />
        <Route path="/aboutenchepreneur" element={<AboutEnchepreneur />} />
        <Route path="/allproducts" element={<AllProducts />} />
        {/* <Route path="/buyer-dashboard" element={<BuyerDashboard />} /> */}
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/buyer-dashboard" element={<Buyer />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
