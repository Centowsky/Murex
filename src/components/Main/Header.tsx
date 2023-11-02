import React from "react";
import "../../styles/components/Header.scss";

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <>
      {currentPage === "Strona główna" ? (
        <header className="site-header h-screen flex items-center">
          <h1 className="text-4xl md:text-7xl text-center">
            Wynajem Podnośników Koszowych
          </h1>
          <h3 className="mt-7 text-2xl md:text-4xl text-center">
            Wycinka drzew - Prace na wysokości - Usługi podnośnikiem
          </h3>
          <div className="flex justify-center items-center py-4">
            <div className="flex space-x-4 mt-36 md:mt-24">
              <button className="text-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-40 hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
                <a href="/oferta" target="_blank">
                  Oferta
                </a>
              </button>

              <button className="text-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-40 hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
                <a href="/kontakt" target="_blank">
                  Kontakt
                </a>
              </button>
            </div>
          </div>
        </header>
      ) : (
        <header className="site-header">
          <h1 className="text-4xl font-bold">{currentPage}</h1>
          <h4>
            <a
              href="/"
              className="text-xl px-2 transition duration-500 hover:text-orange-500 hover:border-orange-500"
            >
              Strona główna
            </a>
            /<span className="text-xl px-2">{currentPage}</span>
          </h4>
        </header>
      )}
    </>
  );
};

export default Header;
