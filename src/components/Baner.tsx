import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="sm:min-h-[50vh] md:min-h-[40vh] lg:md:min-h-[30vh] bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-lg shadow-lg p-4 flex items-center justify-center">
      <div className="text-center text-black whitespace-pre-line">
        <p className="text-3xl p-2">
          Masz więcej pytań? Skontaktuj się z nami:
        </p>
        <p className="text-3xl font-bold p-2">530-301-301</p>
        <span className="text-3xl font-bold p-2">example@example.com</span>
      </div>
    </div>
  );
};

export default Banner;
