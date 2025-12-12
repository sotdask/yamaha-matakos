import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function AppWithAOS() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in-out",
      once: true,
      offset: 0,
    });
  }, []);

  return (
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppWithAOS />);