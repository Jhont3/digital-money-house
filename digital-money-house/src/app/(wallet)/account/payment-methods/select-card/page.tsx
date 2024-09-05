import { Add, CreditCard, GoToAmountBtn, Subtitle } from "@/components";
import { getAccountInfo, getCards } from "@/services";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function SelectCardPage() {

    const token = cookies().get('authToken')?.value || '';
    const accountInfo = await getAccountInfo(token);
    const cardsUser = await getCards(accountInfo.id, token);

    return (
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 md:gap-5 lg:px-20">

            <Subtitle text="Cargar dinero"/>
            
            <div className="bg-dark-1 rounded-lg px-5 py-4 md:px-14 md:py-12">

                <h2 className="font-bold text-xl text-green-1 pb-4 md:text-2xl">Seleccionar tarjeta</h2>

                <article className="bg-white p-5 rounded-lg flex flex-col gap-4 md:p-8 md:py-10">

                    <CreditCard cardsUser={cardsUser} accountId={accountInfo.id} onSelectCardPg eraseLastHr/>
                    
                </article>

                <div className="lg:flex lg:justify-between lg:mt-5">
                    <Link href={"/account/my-cards/new-card"}  className="flex justify-between pt-4 pb-2">
                        <div className="flex items-center gap-4 md:pt-2 md:pb-3">
                            <span className="justify-start">
                                <Add/>
                            </span>
                            <p className=" text-green-1 font-bold md:text-xl">Nueva tarjeta</p>
                        </div>
    
                    </Link>
                    <GoToAmountBtn displayButtonFull={false} displayButtonMobile/>
                </div>
            </div>
            
            <GoToAmountBtn displayButtonFull displayButtonMobile={false}/>

        </section>
    )
}
