import React from "react";

const Wizytowka: React.FC = () => {
  return (
    <div
      className="rounded-lg shadow-lg w-full flex flex-col md:flex-row p-4"
      id="kontakt"
    >
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="max-w-full rounded-lg border bg-gray-100 md:bg-gray-300 border-gray-200 min-h-[20vh] md:w-1/3 flex flex-col items-center justify-center mx-4 my-1 md:my-3"
          >
            {index === 0 ? (
              <>
                <h2 className="text-xl font-bold">MUREX Jarosław Organista</h2>
                <p>Ławy 32/1, 74-300 Myślibórz</p>
                <p>
                  TEL:{" "}
                  <span className="text-orange-500 transform hover:transform hover:translate-x-2">
                    <a href="tel:530301301">530-301-301</a>
                  </span>
                </p>
                <p>NIP: 597-156-33-173</p>
              </>
            ) : null}
            {index === 1 ? (
              <>
                <p className="text-xl font-bold">
                  Profesjonalny sprzęt i fachowa pomoc
                </p>
                <ul className="list-disc list-inside ml-4">
                  <li>Specjalistyczny sprzęt</li>
                  <li>Doświadczeni pracownicy</li>
                </ul>
              </>
            ) : null}
            {index === 2 ? (
              <>
                <p className="text-xl font-bold">Usługi</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Podnośniki Koszowe Myślibórz i okolice</li>
                  <li>Usługi koparko-ładowarką</li>
                </ul>
              </>
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default Wizytowka;
