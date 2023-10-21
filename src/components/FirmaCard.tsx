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
    <div className="sm:min-h-[50vh] md:min-h-[30vh] lg:md:min-h-[25vh] items-center bg-gray-100 border border-gray-200 rounded-lg shadow-lg p-4 grid grid-rows-2 text-center relative">
      {IconComponent && (
        <IconComponent
          className="w-8 h-8 text-orange-500 absolute top-2 left-2"
          style={{ opacity: 0.1 }}
        />
      )}
      <p className="text-3xl md:text-2xl lg:text-xl font-bold text-black">
        {title}
      </p>
      <p className="text-stone-900 text-2xl md:text-xl lg:text-lg row-span-2">
        {content}
      </p>
    </div>
  );
};

export default FirmaCard;
