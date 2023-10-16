import React from "react";

const Banner: React.FC = () => {
  return (
    <div className=" bg-orange-500 text-white text-center shadow-lg rounded-lg ">
      <p className="text-lg">
        Zadzwoń teraz: <span className="font-bold">123-456-789</span>
      </p>
      <p className="text-lg">
        lub napisz: <span className="font-bold">example@example.com</span>
      </p>
    </div>
  );
};

export default Banner;
