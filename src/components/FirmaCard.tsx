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
    <div className="sm:min-h-[50vh] md:min-h-[40vh] lg:md:min-h-[30vh] bg-orange-600 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-center relative">
      {IconComponent && (
        <IconComponent className="w-8 h-8 text-white top-2 left-2 absolute" />
      )}{" "}
      <p className="text-3xl md:text-2xl lg:text-xl font-bold text-white mt-6">
        {title}
      </p>
      <p className="text-gray-100 text-2xl md:text:xl lg:text-lg">{content}</p>
    </div>
  );
};

export default FirmaCard;
