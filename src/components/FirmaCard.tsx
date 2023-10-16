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
    <div className="min-h-[25vh] bg-orange-600 rounded-lg shadow-lg p-4 m-2 md:min-h-[20vh]">
      <div className="flex items-start">
        {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
      </div>
      <div className="flex items-center flex-col justify-center text-center">
        <p className="text-2xl font-bold text-white">
          <span>{title}</span>
        </p>
        <p className="text-gray-100 mt-4 text-xl">{content}</p>
      </div>
    </div>
  );
};

export default FirmaCard;
