import React from "react";
import OfertaCard from "./OfertaCard";
import "../../styles/components/Oferta.scss";

const Oferta: React.FC = () => (
  <div className="bg-white w-full">
    <div className="text-center">
      <h1 className="text-black text-5xl font-bold mt-2 p-4">
        Poznaj naszą{" "}
        <span className="border-b-2 border-orange-500">ofertę</span>
      </h1>
    </div>
    <div className="flex flex-wrap flex-row justify-center p-4 md:w-3/4 mx-auto">
      {[
        {
          id: "wycinka",
          title: "Wycinka i pielęgnacja drzew",
          content:
            "Specjalizujemy się w pielęgnacji i wycince drzew. Także w miejscach trudno dostępnych, budynków, na terenach pod inwestycje, cmentarzach oraz parkach.",
          link: "/oferta/wycinka",
        },
        {
          id: "podnosniki",
          title: "Wynajem Podnośników Koszowych",
          content:
            "Prowadzimy wynajem podnośników koszowych o maksymalnej wysokości roboczej do 28 metrów. Nasze podnośniki umożliwiają bezpieczne i komfortowe wykonywanie prac.",
          link: "/oferta/podnosniki",
        },
        {
          id: "koparki",
          title: "Wynajem koparko-ładowarki",
          content:
            "Oferujemy kompleksową gamę usług wynajmu koparko-ładowarki i nie tylko.",
          link: "/oferta/koparki",
        },
        {
          id: "wysokosci",
          title: "Prace na wysokości",
          content:
            "Wykonujemy prace na wysokości. Czyścimy rynny, montujemy siatki oraz reklamy, myjemy dachy i wymieniamy dachówki. Oferujemy szeroki zakres usług.",
          link: "/oferta/wysokosc",
        },
      ].map((card) => (
        <div key={card.id} className=" sm:w-full md:w-1/2">
          {" "}
          <OfertaCard {...card} />
        </div>
      ))}
    </div>
  </div>
);

export default Oferta;
