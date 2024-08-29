import { CreditCard, Subtitle } from "@/components";
import { getAccountInfo, getCards } from "@/services";
import { cookies } from "next/headers";
import Image from "next/image";
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
                        <Image src="/imgs/add.png" alt="add icon" width={34} height={34}/>
                    </span>
                    <p className=" text-green-1 font-bold text-xl">Nueva tarjeta</p>
                </div>
                <span className="flex justify-end items-center">
                    <Image src="/imgs/arrow.png" alt="add icon" width={18} height={18}/>
                </span>
            </Link>

         </article>

        {/* Your cards */}
        <article className="bg-white p-5 rounded-lg flex flex-col gap-4 md:p-8 md:py-10">       
            <p className="text-dark-1 font-bold">Tus tarjetas</p>
            <hr className="md:border-t md:border-transparent md:border-black"/>

            <CreditCard cardsUser={cardsUser} accountId={accountInfo.id}/>

        </article>

    </section>
    )

}