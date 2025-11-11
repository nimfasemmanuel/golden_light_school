import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage";
import Academicspage from "./pages/Academicspage";
import Admissionpage from "./pages/Admissionpage";
import Gallerypage from "./pages/Gallerypage";
import Contactpage from "./pages/Contactpage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* ✅ Navbar always visible */}
        <Navbar />

        {/* ✅ Page content changes based on route */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/academics" element={<Academicspage />} />
            <Route path="/admission" element={<Admissionpage />} />
            <Route path="/gallery" element={<Gallerypage />} />
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
        </div>

        {/* ✅ Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
