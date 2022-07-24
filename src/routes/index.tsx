import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MarcosJunior from "../pages/MarcosJunior";
import EversonBraga from "../pages/EversonBraga";
import RogerioGurniak from "../pages/RogerioGurniak";
import FabianaNowack from "../pages/FabianaNowack";

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/marcos-junior" element={<MarcosJunior />} />
      <Route path="/everson-braga" element={<EversonBraga />} />
      <Route path="/rogerio-gurniak" element={<RogerioGurniak />} />
      <Route path="/fabiana-nowack" element={<FabianaNowack />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
