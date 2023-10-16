import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles/components/Navbar.scss";

const navItems = [
  { text: "Strona Główna", link: "/" },
  { text: "O nas", link: "/o-nas" },
  { text: "Oferta", link: "/oferta" },
  { text: "Galeria", link: "/galeria" },
  { text: "Kontakt", link: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <div className="text-2xl font-bold text-orange-500">
            <a href="/">Murex</a> |
            <a
              className="transition duration-500 border-b-4 ml-1 border-transparent hover:text-orange-600 hover:border-orange-600 hover:ml-2"
              href="tel:+48530301301"
            >
              +48 530-301-301
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-orange-500 focus:outline-none p-4"
            >
              {isOpen ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <AiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <ul
          className={`lg:flex lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          } mt-4 lg:mt-0 text-lg`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block text-gray-700 border-b-4 border-transparent transition duration-500 hover:text-orange-500 hover:border-orange-500 py-2 px-2"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
