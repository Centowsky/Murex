import React from "react";
import Firma from "../components/Firma";
import FirmaInfo from "../components/FirmaInfo";
import Header from "../components/Header";
import Navbar from "../components/main/Navbar";
import Oferta from "../components/Oferta";
import Wizytowka from "../components/main/Wizytowka";
import Baner from "../components/main/Baner";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="Strona główna" />
      <Oferta />
      <Firma />
      <Baner />
      <FirmaInfo />
      <Wizytowka />
    </>
  );
};

export default Home;
