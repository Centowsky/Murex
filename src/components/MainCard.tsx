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
      className="max-w-md main-card bg-white shadow-lg rounded-lg overflow-hidden m-4 text-center"
      id={id}
    >
      <div className="px-4 py-2 h-full flex flex-col justify-between">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
            {title}
          </h2>
          <p className="text-white mt-2 drop-shadow-md">{content}</p>
        </div>
        <div className="px-4 py-2 flex justify-end">
          <a
            href={link}
            className="text-right w-fit border-b-2 border-orange-500 text-white text-sm font-light  px-4 rounded mt-2  transition-transform transform hover:translate-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Więcej informacji
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
