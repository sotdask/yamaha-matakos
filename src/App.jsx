import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages 404 redirect
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const redirectPath = params.get('/');
      if (redirectPath) {
        const path = redirectPath.replace(/~and~/g, '&');
        navigate(path, { replace: true });
      }
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;