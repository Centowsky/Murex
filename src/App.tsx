import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import Footer from "./components/main/Footer";
import ScrollToTopButton from "./components/main/ScrollToTopButton";
import Oferta from "./pages/Oferta";
import OfertaDetail from "./components/offers/OfertaDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

const App: React.FC = () => (
  <Router basename="{process.env.PUBLIC_URL}">
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/o-nas" element={<About />} />
      <Route path="/oferta" element={<Oferta />} />
      <Route path="/oferta/:offerId" element={<OfertaDetail />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
    <ScrollToTopButton />
    <Footer />
  </Router>
);

export default App;
