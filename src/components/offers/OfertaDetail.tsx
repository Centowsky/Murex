import React from "react";
import Header from "../Header";
import Navbar from "../main/Navbar";
import { useParams } from "react-router-dom";

const OfertaDetail: React.FC = () => {
  // Uzyskaj parametr offerId z URL za pomocą hooka useParams
  const { offerId } = useParams<{ offerId: string }>();

  // Tutaj możesz dodać logikę do pobrania danych szczegółowych oferty na podstawie offerId
  // Na przykład, możesz mieć tablicę ofert i wyszukać ofertę na podstawie offerId

  // Przykładowa tablica ofert
  const ofertaList = [
    {
      id: "wycinka",
      title: "Wycinka i pielęgnacja drzew",
      content:
        "Specjalizujemy się w pielęgnacji i wycince drzew. Także w miejscach trudno dostępnych, budynków, na terenach pod inwestycje, cmentarzach oraz parkach.",
    },
    {
      id: "podnosniki",
      title: "Wynajem Podnośników Koszowych",
      content:
        "Prowadzimy wynajem podnośników koszowych o maksymalnej wysokości roboczej do 28 metrów. Nasze podnośniki umożliwiają bezpieczne i komfortowe wykonywanie prac.",
    },
    {
      id: "koparki",
      title: "Wynajem koparko-ładowarki",
      content:
        "Oferujemy kompleksową gamę usług wynajmu koparko-ładowarki i nie tylko.",
    },
    {
      id: "wysokosc",
      title: "Prace na wysokości",
      content:
        "Wykonujemy prace na wysokości. Czyścimy rynny, montujemy siatki oraz reklamy, myjemy dachy i wymieniamy dachówki. Oferujemy szeroki zakres usług.",
    },
  ];

  // Znajdź ofertę na podstawie offerId
  const selectedOffer = ofertaList.find((offer) => offer.id === offerId);

  if (!selectedOffer) {
    return (
      <>
        <Navbar />
        <Header currentPage="Oferta" />
        <div className="text-3xl font-bold ">Nie znaleziono oferty</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Header currentPage="Oferta" />
      <div>
        <h2>{selectedOffer.title}</h2>
        <p>{selectedOffer.content}</p>
        {/* Dodaj tutaj inne szczegóły oferty, które chcesz wyświetlić */}
      </div>
    </>
  );
};

export default OfertaDetail;
