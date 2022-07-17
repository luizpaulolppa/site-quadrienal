import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MarcosJunior from "../pages/MarcosJunior";
import EversonBraga from "../pages/EversonBraga";
import RogerioGurniak from "../pages/RogerioGurniak";

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/marcos-junior" element={<MarcosJunior />} />
      <Route path="/everson-braga" element={<EversonBraga />} />
      <Route path="/rogerio-gurniak" element={<RogerioGurniak />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
