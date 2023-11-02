import React from "react";
import Header from "../components/main/Header";
import Onas from "../components/about/Onas";
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
