import React from "react";
import "../styles/components/Oferta.scss";
import FirmaCard from "./FirmaCard";

const Firma: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="text-center">
        <h1 className="text-black text-4xl font-bold mt-2 p-4 ">
          Wycinka drzew Myślibórz
          <span className="border-b-2 border-orange-500"> i okolice</span>
        </h1>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center p-4">
        <FirmaCard
          title="12 lat doświadczenia"
          content="Od ponad 12 lat świadczymy usługi na najwyższym poziomie. Dołącz do grona naszych zadowolonych klientów."
          iconName="FaTools"
        />

        <FirmaCard
          title="Darmowa wycena"
          content="Zadzwoń i skorzystaj z darmowej wyceny. Ustalimy szczegółowy zakres prac oraz termin wykonania usługi."
          iconName="FaMoneyBillWave"
        />
        <FirmaCard
          title="Szybka realizacja"
          content="Potrzebujesz pilnie oczyścić rynny albo usunąć zagrażające bezpieczeństwu drzewo? Pomożemy od ręki."
          iconName="FaClock"
        />
      </div>
    </div>
  );
};

export default Firma;
