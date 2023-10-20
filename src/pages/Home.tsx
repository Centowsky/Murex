import React from "react";
import Firma from "../components/Firma";
import FirmaInfo from "../components/FirmaInfo";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Oferta from "../components/Oferta";
import Wizytowka from "../components/Wizytowka";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="Strona główna" />
      <Oferta />
      <Firma />
      <FirmaInfo />
      <Wizytowka />
    </>
  );
};

export default Home;
