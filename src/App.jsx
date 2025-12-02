import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Workshop from "./pages/Workshop.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
