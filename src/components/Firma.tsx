import React from "react";
import "../styles/components/Oferta.scss";
import FirmaCard from "./FirmaCard";
import Baner from "../components/Baner";

const Firma: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="text-center">
        <h1 className="text-black text-4xl font-bold mt-2 p-4 ">
          Wycinka drzew Myślibórz
          <span className="border-b-2 border-orange-500"> i okolice</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        <div className="sm:w-full md:w-1/3 p-4">
          <FirmaCard
            title="12 lat doświadczenia"
            content="Od ponad 12 lat świadczymy usługi na najwyższym poziomie. Dołącz do grona naszych zadowolonych klientów."
            iconName="FaTools"
          />
        </div>
        <div className="sm:w-full md:w-1/3 p-4">
          <FirmaCard
            title="Darmowa wycena"
            content="Zadzwoń i skorzystaj z darmowej wyceny. Ustalimy szczegółowy zakres prac oraz termin wykonania usługi."
            iconName="FaMoneyBillWave"
          />
        </div>
        <div className="sm:w-full md:w-1/3 p-4">
          <FirmaCard
            title="Szybka realizacja"
            content="Potrzebujesz pilnie oczyścić rynny albo usunąć zagrażające bezpieczeństwu drzewo? Pomożemy od ręki."
            iconName="FaClock"
          />
        </div>
        <div className="sm:w-full md:w-2/3 p-4">
          <FirmaCard
            title="Profesjonalny sprzęt i fachowa pomoc"
            content="Dysponujemy specjalistycznym sprzętem oraz doświadczonym zespołem specjalistów. Pracujemy w trudnym terenie oraz w parkach i na wypielęgnowanych trawnikach nie powodując zniszczeń."
            iconName="FaInfoCircle"
          />
        </div>
        <div className="sm:w-full md:w-1/3 p-4">
          <Baner />
        </div>
      </div>
    </div>
  );
};

export default Firma;
