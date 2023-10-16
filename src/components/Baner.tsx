import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-orange-600 rounded-lg shadow-md p-4 m-2 min-h-[30vh] flex items-center justify-center ">
      <div className="text-center text-white">
        <p className="text-3xl font-extrabold">
          Zadzwoń teraz:{" "}
          <span className="font-bold text-amber-300">123-456-789</span>
        </p>

        <p className="text-center mt-4 text-lg">
          lub napisz:{" "}
          <span className="font-bold text-amber-300">example@example.com</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
