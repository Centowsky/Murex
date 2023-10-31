import React from "react";
import Header from "../components/Header";
import Navbar from "../components/main/Navbar";
import Slider from "../components/gallery/Slider";

const Gallery: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="Galeria" />
      <Slider />
    </>
  );
};

export default Gallery;
