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
    <div className="min-h-[20vh] bg-orange-600 rounded-lg shadow-lg p-4 m-2 md:min-h-[30vh]">
      <div className="text-center">
        <p className="text-2xl font-bold text-white">
          {IconComponent && <IconComponent className="w-8 h-8" />}{" "}
          <span style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)" }}>
            {title}
          </span>
        </p>
      </div>
      <p className="text-gray-100 text-center mt-4 text-xl">{content}</p>
    </div>
  );
};

export default FirmaCard;
