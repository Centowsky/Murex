import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { text: "Strona główna", link: "/" },
    { text: "O nas", link: "/o-nas" },
    { text: "Oferta", link: "/oferta" },
    { text: "Galeria", link: "/galeria" },
    { text: "Kontakt", link: "/kontakt" },
  ];

  return (
    <nav className="bg-white flex justify-between items-center">
      <div className="w-1/3 text-center flex items-center px-2">
        <a
          href="/"
          className="text-black text-lg font-semibold flex items-center"
        >
          <FaBuilding size={20} style={{ marginRight: "4px" }} /> Murex
        </a>
      </div>

      <div className="w-1/3">
        <div>
          <span className="text-black flex items-center justify-center">
            <FiPhone size={20} />
            123456789
          </span>
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-end md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-gray-300  py-4 px-2 "
        >
          <AiOutlineMenu size={24} />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-blue-500 p-4 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-black block hover:text-gray-300"
            >
              {item.text}
            </a>
          ))}
        </div>
      )}

      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4 px-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-black hover:text-gray-300">
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
