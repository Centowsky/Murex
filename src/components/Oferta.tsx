import React from "react";
import MainCard from "./MainCard";
import "../styles/components/Oferta.scss";

const Header: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="text-center">
        <h1 className="text-black text-3xl font-semibold mt-2 p-4 ">
          Poznaj na
          <span className="border-b-2 border-orange-500">szą ofertę</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        <MainCard
          id="wycinka"
          title="Wycinka i pielęgnacja drzew"
          content="Specjalizujemy się w pielęgnacji i wycince drzew. Także w miejscach trudno dostępnych, blisko linii energetycznych, budynków, na terenach pod inwestycje, cmentarzach oraz parkach."
          link="#"
        />
        <MainCard
          id="podnosniki"
          title="Wynajem Podnośników Koszowych"
          content="Wynajem Podnośników Koszowych
          Prowadzimy wynajem podnośników koszowych o maksymalnej wysokości roboczej 19, 22, 27 i 42 metrów. Nasze podnośniki umożliwiają bezpieczne i komfortowe wykonywanie prac."
          link=""
        />
        <MainCard
          id="dzwigi"
          title="Wynajem dźwigów"
          content="Oferujemy wynajem specjalistycznych dźwigów, żurawi samojezdnych 18 i 32 tony. Gotowych do wykonywania złożonych zleceń w zabudowie miejskiej, na budowach oraz w terenie."
          link="#"
        />
        <MainCard
          id="wysokosci"
          title="Prace na wysokości"
          content="Wykonujemy prace na wysokości i alpinistyczne. Czyścimy rynny, montujemy siatki oraz reklamy, myjemy dachy i wymieniamy dachówki. Oferujemy #"
          link="#"
        />
      </div>
    </div>
  );
};

export default Header;
