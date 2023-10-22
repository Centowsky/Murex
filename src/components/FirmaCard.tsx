import React from "react";
import {
  FaTools,
  FaMoneyBillWave,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";

interface FirmaCardProps {
  title: string;
  content: string;
  iconName: string;
}

const iconMap: { [key: string]: any } = {
  FaTools,
  FaMoneyBillWave,
  FaClock,
  FaInfoCircle,
};

const FirmaCard: React.FC<FirmaCardProps> = ({ title, content, iconName }) => {
  const IconComponent = iconMap[iconName];
  return (
    <div className="min-h-[15vh] md:min-h-[30vh] bg-gray-100 md:bg-gray-300 border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col sm:flex-wrap text-center items-center justify-center h-full relative my-auto">
      {IconComponent && (
        <IconComponent
          className="w-8 h-8 text-orange-500 absolute top-3 left-3"
          style={{ opacity: 0.15 }}
        />
      )}
      <div className="flex flex-col items-center justify-center">
        {" "}
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="text-stone-900 text-lg">{content}</p>
      </div>
    </div>
  );
};

export default FirmaCard;
