import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Header from "./components/header/Header";
import About from "./Pages/about/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
// import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
