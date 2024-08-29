
"use client"
import { CardData } from "@/interfaces";
import { deleteCard } from "@/services";
import { errorAlert, successAlert } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CreditCard = ({cardsUser, accountId}:any) => {

  const router = useRouter();

  if (cardsUser.length < 1) return ( <p> No tienes tarjetas asociadas </p> )

  let cardsToShow = []
  if (cardsUser) cardsToShow = cardsUser.toReversed()

  const handleDelete = async(id: number) => {
    try {
      await deleteCard(accountId, id);

      await fetch('/api/revalidate?tag=revalidate-cards');   
      router.refresh();

      successAlert()

    } catch (error) {
      console.error(error)
      errorAlert()
    }
    
  };

  return (
    <>
      {cardsToShow.map((card: CardData) => (
        <div key={card.id} >
        <div className="flex justify-between py-4">
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:gap-3">
            <span>
              <Image
                src="/imgs/greenCircle.png"
                alt="icon"
                width={24}
                height={24}
                className="md:w-8 md:h-8"
              />
            </span>
            Terminada en {card.number_id.toString().slice(-4)}
          </p>
          <button className="flex items-start" onClick={()=> handleDelete(card.id)}>
            <span className="text-xs text-black font-bold text-end md:text-base">
              Eliminar
            </span>
          </button>
        </div>
        <hr key={`${card.id}${card.id}`} className="md:border-t md:border-transparent md:border-black" />
        </div>
      ))} 
    </>
  );
};
