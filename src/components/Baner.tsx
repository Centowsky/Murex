import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="min-h-[50vh] sm:min-h-[50vh] md:min-h-[30vh] lg:md:min-h-[25vh] bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 rounded-lg shadow-lg p-4 flex items-center justify-center">
      <div className="text-center text-black whitespace-pre-line">
        <p className="text-2xl p-2">
          Masz więcej pytań? Skontaktuj się z nami:
        </p>
        <p className="text-2xl font-bold p-2">530-301-301</p>
        <span className="text-2xl font-bold p-2">example@example.com</span>
      </div>
    </div>
  );
};

export default Banner;
