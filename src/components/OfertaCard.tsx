import React from "react";

interface OfertaCardProps {
  title: string;
  content: string;
  link: string;
  id: string;
}

const OfertaCard: React.FC<OfertaCardProps> = ({
  title,
  content,
  link,
  id,
}) => {
  return (
    <div
      className="max-w-fit bg-white shadow-lg rounded-lg overflow-hidden m-4 text-center"
      id={id}
      style={{
        minHeight: "30rem",
        maxHeight: "50rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="px-4 py-4 flex-grow">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-white text-xl mt-2">{content}</p>
      </div>
      <div className="px-4 py-2 text-right">
        <p className="transform hover:-translate-x-4 transition duration-500">
          <a
            href={link}
            className="border-b-2 border-orange-500 text-white text-lg font-light px-4 rounded mt-2 hover:border-orange-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Więcej informacji
          </a>
        </p>
      </div>
    </div>
  );
};

export default OfertaCard;
