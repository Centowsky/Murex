import React from "react";
import FirmaCard from "./FirmaCard";

const Firma: React.FC = () => {
  return (
    <div className="bg-white w-full ">
      <div className="text-center">
        <h1 className="text-black text-5xl font-bold mt-2">
          Wycinka drzew Myślibórz{" "}
          <span className="border-b-2 border-orange-500">i okolice</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center p-4 md:w-3/4 mx-auto">
        <div className="sm:w-full md:w-1/2 lg:w-1/3 p-2">
          <FirmaCard
            title="Kilka lat doświadczenia"
            content="Od kilku lat świadczymy usługi na najwyższym poziomie."
            iconName="FaTools"
          />
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-1/3 p-2">
          <FirmaCard
            title="Darmowa wycena"
            content="Zadzwoń i skorzystaj z darmowej wyceny. Ustalimy szczegółowy zakres prac oraz termin wykonania usługi."
            iconName="FaMoneyBillWave"
          />
        </div>
        <div className="sm:w-full md:w-1/2 lg:w-1/3 p-2">
          <FirmaCard
            title="Szybka realizacja"
            content="Potrzebujesz pilnie oczyścić rynny albo usunąć zagrażające bezpieczeństwu drzewo?"
            iconName="FaClock"
          />
        </div>
      </div>
    </div>
  );
};

export default Firma;
