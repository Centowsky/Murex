import React from "react";

interface MainCardProps {
  title: string;
  content: string;
  link: string;
  id: string;
}

const MainCard: React.FC<MainCardProps> = ({ title, content, link, id }) => {
  return (
    <div
      className="max-w-md main-card bg-white shadow-lg rounded-lg overflow-hidden m-4"
      id={id}
    >
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{content}</p>
      </div>
      <div className="px-4 py-2">
        <a
          href={link}
          className="block text-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Przejdź do {title}
        </a>
      </div>
    </div>
  );
};

export default MainCard;
