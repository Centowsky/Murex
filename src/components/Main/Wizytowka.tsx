import React from "react";

const Wizytowka: React.FC = () => {
  return (
    <div className="rounded-lg shadow-lg w-full flex flex-col md:flex-row p-4">
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="max-w-full rounded-lg border border-gray-200 bg-gray-100 min-h-[20vh] md:w-1/3 flex flex-col items-center justify-center mx-4 my-1 md:my-3"
          >
            {index === 0 ? (
              <>
                <h2 className="text-xl font-bold">MUREX Jarosław Organista</h2>
                <p>Ławy 32/1, 74-300 Myślibórz</p>
                <p>
                  TEL:{" "}
                  <span className="text-orange-500 transform hover:transform hover:translate-x-2">
                    530-301-301
                  </span>
                </p>
                <p>NIP: 597-156-33-173</p>
              </>
            ) : (
              <>
                <p className="text-xl font-bold">Usługi</p>
                <ul className="list-disc list-inside ml-4">
                  {index === 1 ? (
                    <>
                      <li>Wycinka i pielęgnacja drzew</li>
                      <li>Prace na wysokości</li>
                      <li>Usługi dźwigowe Stargard</li>
                    </>
                  ) : (
                    <>
                      <li>Usługi dźwigowe Stargard</li>
                      <li>Podnośniki Koszowe Stargard</li>
                      <li>Karczowanie działek, wycinanie krzaków</li>
                    </>
                  )}
                </ul>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default Wizytowka;
