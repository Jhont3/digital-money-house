"use client"
import { CardData } from "@/interfaces";
import { deleteCard } from "@/services";
import { UsePaymentStore } from "@/store";
import { errorAlert, successAlert } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GreenCircle } from "../common/icons/GreenCircle";

export const CreditCard = ({ cardsUser, accountId, onSelectCardPg, eraseLastHr }: any) => {
  const router = useRouter();

  const [ selectedCardId, setSelectedCardId ] = useState<number | null>(null);
  const { setPaymentInfo } = UsePaymentStore();

  const handleSelect = (cardId: number) => {
    setSelectedCardId(cardId);
    setPaymentInfo({ selectedCardId: cardId });
  };

  if (cardsUser.length < 1) return <p>No tienes tarjetas asociadas</p>;

  const cardsToShow = cardsUser.toReversed();

  const handleDelete = async (id: number) => {
    try {
      await deleteCard(accountId, id);

      await fetch("/api/revalidate?tag=revalidate-cards");
      router.refresh();

      successAlert();
    } catch (error) {
      console.error(error);
      errorAlert();
    }
  };

  return (
    <>
      {cardsToShow.map((card: CardData, i:any) => (
        <div key={card.id}>
          <div className="flex justify-between py-4">
            <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:gap-3">
              <span>
                <GreenCircle className="w-[24px] h-[24px] md:w-8 md:h-8"/>
              </span>
              Terminada en {card.number_id.toString().slice(-4)}
            </p>

            {!onSelectCardPg && (
              <button className="flex items-start" onClick={() => handleDelete(card.id)}>
                <span className="text-xs text-black font-bold text-end md:text-base ">
                  Eliminar
                </span>
              </button>
            )}

            {onSelectCardPg && (
              <div className=" flex items-center relative">
                <input
                  type="radio"
                  name="selectedCard"
                  value={card.number_id}
                  checked={selectedCardId === card.number_id}
                  onChange={() => handleSelect(card.number_id)}
                className="w-4 h-4 cursor-pointer appearance-none border-[1.6px] border-dark-1 checked:bg-green-1 
                    rounded-full border-opacity-50 relative"
                />              
              </div>
            )}
          </div>
          {!(eraseLastHr && i === cardsToShow.length - 1) && (
            <hr className="md:border-t md:border-black" />
          )} 
        </div>
      ))}
    </>
  );
};
