import React from "react";
import Header from "../components/main/Header";
import Navbar from "../components/main/Navbar";
import Carousel from "../components/gallery/Carousel";

const Gallery: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header currentPage="Galeria" />
      <Carousel />
    </>
  );
};

export default Gallery;
