import React from "react";
import Murex from "../assets/murex.webp";
import info1 from "../assets/info1.webp";
import info2 from "../assets/info2.webp";
import info3 from "../assets/info3.webp";

const FirmaInfo: React.FC = () => {
  return (
    <div className="w-screen h-screen max-w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src={Murex} alt="Firma Murex" className="object-cover w-full" />
      </div>
      <div className="w-full md:w-1/2 p-2 grid grid-rows-1/3 1/3 1/3">
        <div>
          <p className="text-xl font-bold p-2">
            Jarosław{" "}
            <span className="border-b-2 border-orange-500">Organista</span>
          </p>
        </div>
        <div className="grid grid-cols-3">
          <img
            src={info1}
            alt="Zdjęcie Informacyjne nr 1"
            className="object-cover w-full h-32 p-1"
          />
          <img
            src={info2}
            alt="Zdjęcie Informacyjne nr 2"
            className="object-cover w-full h-32 p-1"
          />
          <img
            src={info3}
            alt="Zdjęcie Informacyjne nr 3"
            className="object-cover w-full h-32 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FirmaInfo;
