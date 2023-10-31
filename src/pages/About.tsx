import React from "react";
import Header from "../components/Header";
import Onas from "../components/Onas";
import Navbar from "../components/main/Navbar";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="O nas" />
      <Onas />
    </>
  );
};

export default About;
