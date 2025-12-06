import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Workshop from "./pages/Workshop.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <>
     <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
    </>
  );
}

export default App;
