import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import Footer from "./components/main/Footer";
import ScrollToTopButton from "./components/main/ScrollToTopButton";
import OfertaDetail from "./components/offers/OfertaDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta";

const App: React.FC = () => (
  <>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/o-nas" element={<About />} />
      <Route path="/oferta" element={<Oferta />} />
      <Route path="/oferta/:offerId" element={<OfertaDetail />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
    <ScrollToTopButton />
    <Footer />
  </>
);

export default App;
