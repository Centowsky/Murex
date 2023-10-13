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
          title="Tytuł Karty 1"
          content="To jest treść karty. Możesz tutaj dodać więcej informacji na temat karty."
          link="https://example.com"
        />
        <MainCard
          id="wycinka"
          title="Tytuł Karty 2"
          content="To jest treść karty. Możesz tutaj dodać więcej informacji na temat karty."
          link="https://example.com"
        />
        <MainCard
          id="wycinka"
          title="Tytuł Karty 3"
          content="To jest treść karty. Możesz tutaj dodać więcej informacji na temat karty."
          link="https://example.com"
        />
        <MainCard
          id="wycinka"
          title="Tytuł Karty 4"
          content="To jest treść karty. Możesz tutaj dodać więcej informacji na temat karty."
          link="https://example.com"
        />
      </div>
    </div>
  );
};

export default Header;
