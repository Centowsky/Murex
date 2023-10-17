import React from "react";

const Wizytowka: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full flex justify-evenly">
      <div className="border-2 p-4 border-gray-300 min-h-[20vh] w-1/6">
        <h2 className="text-xl font-bold">MUREX Jarosław Organista</h2>
        <p>Ławy, 74-300 Myślibórz</p>
        <p>
          TEL:{" "}
          <span className="text-orange-500 transform hover:transform hover:translate-x-2">
            530-301-301
          </span>
        </p>
        <p>NIP: 597-156-33-173</p>
      </div>
      <div className="border-2 p-4 border-gray-300 min-h-[20vh] w-1/6">
        <p className="text-xl font-bold">Usługi</p>
        <ul className="list-disc list-inside ml-4">
          <li>Wycinka i pielęgnacja drzew</li>
          <li>Prace na wysokości</li>
          <li>Usługi dźwigowe Stargard</li>
        </ul>
      </div>
      <div className="border-2 p-4 border-gray-300 min-h-[20vh] w-1/6">
        <p className="text-xl font-bold">Usługi</p>
        <ul className="list-disc list-inside ml-4">
          <li>Usługi dźwigowe Stargard</li>
          <li>Podnośniki Koszowe Stargard</li>
          <li>Karczowanie działek, wycinanie krzaków, sprzątanie działek</li>
        </ul>
      </div>
    </div>
  );
};

export default Wizytowka;
