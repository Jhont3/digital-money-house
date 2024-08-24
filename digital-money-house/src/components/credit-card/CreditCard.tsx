
  import { CardData } from "@/interfaces";
  import { useAccountCardsStore } from "@/store";
  import Image from "next/image";

  export const CreditCard = ({cardsUser}:any) => {

    console.log(cardsUser, "cards in store")


    if (cardsUser.length < 1) {
      return ( <p> No tienes tarjetas asociadas </p> )
    }

    return (
      <>
        {cardsUser.map((card: CardData) => (
          <>
          <div key={card.id} className="flex justify-between py-4">
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
            <button onClick={() => {}} className="flex items-start">
              <span className="text-xs text-black font-bold text-end md:text-base">
                Eliminar
              </span>
            </button>
          </div>
          <hr className="md:border-t md:border-transparent md:border-black" />
          </>
        ))} 
      </>
    );
  };
