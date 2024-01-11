import React from "react";
import info1 from "../../assets/info1.webp";
import info2 from "../../assets/info2.webp";
import info3 from "../../assets/info3.webp";

const FirmaInfo: React.FC = () => {
  return (
    <div className="w-screen min-h-screen max-w-full flex flex-col md:flex-row items-center">
      <div className="mx-auto w-2/3 p-2 grid grid-rows-1/3 1/3 1/3">
        <div>
          <h1 className="text-3xl font-bold">Nasza firma</h1>
          <p className="text-xl">
            Nasza firma to dynamiczna jednostka specjalizująca się w
            kompleksowych usługach budowlanych oraz wynajmie koparek-ładowarek i
            podnośników. Z bogatym doświadczeniem i zaangażowaniem w branży,
            oferujemy nie tylko solidne wykonanie prac budowlanych, ale również
            wynajem nowoczesnych maszyn, które umożliwiają efektywne i
            bezpieczne realizowanie różnorodnych projektów. Nasza filozofia
            opiera się na innowacjach, profesjonalizmie oraz indywidualnym
            podejściu do każdego klienta. Dążymy do zapewnienia kompleksowej
            obsługi, dbając o najwyższe standardy jakości, co sprawia, że
            stajemy się godnym partnerem w realizacji różnorodnych przedsięwzięć
            budowlanych.
          </p>
          <p className="text-xl text-right font-bold p-2">
            Jarosław{" "}
            <span className="border-b-2 border-orange-500">Organista</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-rows-1 md:grid-rows-none">
          <img
            src={info1}
            alt="Zdjęcie Informacyjne nr 1"
            className="object-cover w-full h-64 p-1"
          />
          <img
            src={info2}
            alt="Zdjęcie Informacyjne nr 2"
            className="object-cover w-full h-64 p-1"
          />
          <img
            src={info3}
            alt="Zdjęcie Informacyjne nr 3"
            className="object-cover w-full h-64 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FirmaInfo;
