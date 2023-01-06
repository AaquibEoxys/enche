
import { HashRouter } from "react-router-dom";
import React, { Suspense } from 'react';
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
// const Home = React.lazy(() => import("./Pages/home/Home"));
// const Header = React.lazy(() => import("./components/header/Header"));
// const About = React.lazy(() => import("./Pages/about/About"));
// const Login = React.lazy(() => import("./Pages/Login/Login"));
// const Signup = React.lazy(() => ("./Pages/Signup/Signup"));
// const Footer = React.lazy(() => ("./components/Footer/Footer"));
// const TermsAndCondition = React.lazy(() => ("./components/TermsAndCondition/TermsAndCondition"));


function App() {
  return (
    // <Suspense fallback={<div>Loading....</div>}>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path='/aboutenche' element={<AboutEnche />} />
        <Route path='/aboutenchepreneur' element={<AboutEnchepreneur />} />
      </Routes>
      <Footer />
    </HashRouter>
    // </Suspense>
  );
}

export default App;
