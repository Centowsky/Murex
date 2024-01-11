import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import Footer from "./components/main/Footer";
import ScrollToTopButton from "./components/main/ScrollToTopButton";
import OfertaDetail from "./components/offers/OfertaDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta";
import { Hourglass } from "react-loader-spinner";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const delay = 2000;

    const timeout = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loader-container h-screen flex items-center justify-center">
          <Hourglass
            visible={true}
            height="120"
            width="120"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#ffa500", "#86611d"]}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
