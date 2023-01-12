import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Header from "./components/header/Header";
import About from "./Pages/about/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import "./App.css";
import TermsAndCondition from "./Pages/TermsAndCondition/TermsAndCondition";
import Buyer from "./Pages/Dashboard/components/Buyer";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/buyer-dashboard" element={<Buyer />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
