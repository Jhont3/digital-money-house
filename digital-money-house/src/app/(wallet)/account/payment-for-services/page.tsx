import {  Subtitle } from "@/components";
import { StepsServicePayment } from "./StepsSelection";
import { cookies } from "next/headers";
import { getAccountInfo, getCards } from "@/services";

export default async function ServicePaymentsPage() {

    const token = cookies().get('authToken')?.value || '';
    const accountInfo = await getAccountInfo(token);
    const cardsUser = await getCards(accountInfo.id, token);
    
    return(
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">
            <Subtitle text="Pagar servicios"/>
            <StepsServicePayment cardsUser={cardsUser} accountInfo={accountInfo}/>
        </section>
    )
}