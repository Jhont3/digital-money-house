import { Add, CreditCard, GreenArrow, GreyArrow, Subtitle } from "@/components";
import { getAccountInfo, getCards } from "@/services";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function MyCardsPage() {

    const token = cookies().get('authToken')?.value || '';
    const accountInfo = await getAccountInfo(token);
    const cardsUser = await getCards(accountInfo.id, token);
    
    return(

        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">

        <Subtitle text="Tarjetas"/>
        
        {/* Add new card */}
        <article className="flex flex-col justify-between bg-dark-1 p-6 min-h-[147px] md:p-8 rounded-lg md:gap-8">

            <h3 className="text-gray-1 font-bold md:w-full ">
                Agregá tu tarjeta de débito o crédito
            </h3>


            <Link href={"/account/my-cards/new-card"}  className="flex justify-between py-4">
                <div className="flex gap-4">
                    <span className="justify-start">
                        <Add className="w-[34px] h-[34px]"/>
                    </span>
                    <p className=" text-green-1 font-bold text-xl">Nueva tarjeta</p>
                </div>
                <span className="flex justify-end items-center">
                    <GreenArrow className="w-[18px] h-[18px]"/>
                </span>
            </Link>

         </article>

        {/* Your cards */}
        <article className="bg-white p-5 rounded-lg flex flex-col gap-4 md:p-8 md:py-10">       
            <p className="text-dark-1 font-bold">Tus tarjetas</p>
            <hr className="md:border-t md:border-black"/>

            <CreditCard cardsUser={cardsUser} accountId={accountInfo.id} onSelectCardPg={false} />
        </article>

    </section>
    )

}