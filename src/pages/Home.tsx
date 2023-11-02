import React from "react";
import Firma from "../components/business/Firma";
import FirmaInfo from "../components/business/FirmaInfo";
import Header from "../components/main/Header";
import Navbar from "../components/main/Navbar";
import Oferta from "../components/offers/Oferta";
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
