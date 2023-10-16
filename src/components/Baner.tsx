import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-900 rounded-lg shadow-2xl p-6 m-4 min-h-[30vh] flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-3xl">
      <div className="text-center text-white">
        <p className="text-4xl font-extrabold">
          Potrzebujesz więcej informacji?
        </p>
        <p className="text-center text-2xl mt-4 ">
          Skontaktuj się z nami:{" "}
          <span className="font-bold text-amber-400">+48 530-301-301</span> lub
          napisz na{" "}
          <span className="font-bold text-amber-400">example@example.com</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
