import React from "react";

interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header>
      <h1 className="text-4xl font-bold">{currentPage}</h1>
    </header>
  );
};

export default Header;
