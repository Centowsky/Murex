import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex flex-wrap justify-around font-light text-sm mx-auto">
      <p>
        © Wszystkie prawa zastrzeżone. Made by{" "}
        <a
          href="https://www.facebook.com/centowskyofficial"
          target="_blank"
          rel="noreferrer"
          className="text-orange-500 border-b-2 border-transparent transition  hover:text-orange-700"
        >
          Centowsky
        </a>
      </p>
      <p>Polityka prywatności</p>
    </footer>
  );
};

export default Footer;
