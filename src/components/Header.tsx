import React from "react";
import "../styles/components/Header.scss";

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="site-header">
      {currentPage === "Strona główna" ? (
        <div className="p-4 ">
          <h1 className="text-7xl text-center">
            Wynajem Podnośników Koszowych
          </h1>
          <h3 className="mt-4 text-3xl text-center">
            Wycinka drzew - Prace na wysokości - Usługi podnośnikiem
          </h3>
        </div>
      ) : (
        <>
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
        </>
      )}
    </header>
  );
};

export default Header;
