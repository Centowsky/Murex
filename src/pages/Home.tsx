import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Oferta from "../components/Oferta";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="Strona główna" />
      <Oferta />
    </>
  );
};

export default Home;
