import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MarcosJunior from "../pages/MarcosJunior";
import EversonBraga from "../pages/EversonBraga";
import RogerioGurniak from "../pages/RogerioGurniak";
import FabianaNowack from "../pages/FabianaNowack";
import DouglasSilva from "../pages/DouglasSilva";
import SamaraZabel from "../pages/SamaraZabel";
import JesseSantos from "../pages/JesseSantos";
import PauloAguiar from "../pages/PauloAguiar";
import RosinhaOliveira from "../pages/RosinhaOliveira";
import JuraciHauser from "../pages/JuraciHauser";
import JoaoLorini from "../pages/JoaoLorini";

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/marcos-junior" element={<MarcosJunior />} />
      <Route path="/everson-braga" element={<EversonBraga />} />
      <Route path="/rogerio-gurniak" element={<RogerioGurniak />} />
      <Route path="/fabiana-nowack" element={<FabianaNowack />} />
      <Route path="/douglas-silva" element={<DouglasSilva />} />
      <Route path="/samara-zabel" element={<SamaraZabel />} />
      <Route path="/jesse-santos" element={<JesseSantos />} />
      <Route path="/paulo-aguiar" element={<PauloAguiar />} />
      <Route path="/rosinha-oliveira" element={<RosinhaOliveira />} />
      <Route path="/juraci-hauser" element={<JuraciHauser />} />
      <Route path="/joao-lorini" element={<JoaoLorini />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
