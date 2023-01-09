import { HashRouter } from "react-router-dom";
import React, { Suspense } from "react";
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
import AllProducts from "./Pages/AllProductsPages/AllProduct/AllProducts";

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
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
