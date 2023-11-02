import React from "react";
import Header from "../components/Header";
import Navbar from "../components/main/Navbar";
import OfertaComp from "../components/offers/Oferta";
import "../styles/components/Oferta.scss";
import Wizytowka from "../components/main/Wizytowka";

const Oferta: React.FC = () => (
  <>
    <Navbar />
    <Header currentPage="Oferta" />
    <OfertaComp />
    <Wizytowka />
  </>
);

export default Oferta;
