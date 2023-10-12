import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="Strona główna" />
    </>
  );
};

export default Home;
