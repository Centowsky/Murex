import React from "react";

const FirmaInfo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          src="https://via.placeholder.com/300"
          alt="Obrazek"
          className="object-cover w-full h-64"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-2">Nagłówek</h2>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          suscipit feugiat risus, nec rhoncus arcu consectetur et.
        </p>
        <p className="text-base font-bold">Podpis:</p>
        <div className="flex flex-row mt-2">
          <img
            src="https://via.placeholder.com/100"
            alt="Zdjęcie 1"
            className="object-cover w-1/3 h-32 mr-2"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Zdjęcie 2"
            className="object-cover w-1/3 h-32 mr-2"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Zdjęcie 3"
            className="object-cover w-1/3 h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default FirmaInfo;
