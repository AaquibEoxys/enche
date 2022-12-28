import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import Header from "./components/header/Header";
import About from "./Pages/about/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import TermAndConditionMercant from "./Pages/Termandconditonmercant/TermAndConditionMercant";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/termandconditionmarcant"
          element={<TermAndConditionMercant />}
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
