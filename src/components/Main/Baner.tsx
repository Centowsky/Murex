import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="flex items-center p-4 mx-auto justify-center ">
      <div className="w-full bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 rounded-lg shadow-lg p-4 flex items-center justify-center">
        <div className="text-center text-black whitespace-pre-line">
          <p className="text-2xl p-2">
            Masz więcej pytań? Skontaktuj się z nami:
          </p>
          <p className="text-2xl font-bold p-2">530-301-301</p>
          <span className="text-2xl font-bold p-2">jareko2222@op.pl</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
