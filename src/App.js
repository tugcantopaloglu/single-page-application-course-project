import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import OurGames from "./components/pages/OurGames";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
//burada react router ile sayfalar arası geçişi sağlıyoruz routes tagi bu sayfaların belirtilmesini sağlıyor
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/ourgames" element={<OurGames />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
