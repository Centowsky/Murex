import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-wrap justify-around font-light text-sm mx-auto">
      <p>
        © {currentYear} Wszystkie prawa zastrzeżone. Made by{" "}
        <a
          href="https://www.instagram.com/centowskywww"
          target="_blank"
          rel="noreferrer"
          className="text-orange-500 border-b-2 border-transparent transition  hover:text-orange-700"
        >
          Centowsky
        </a>
      </p>
    </footer>
  );
};

export default Footer;
