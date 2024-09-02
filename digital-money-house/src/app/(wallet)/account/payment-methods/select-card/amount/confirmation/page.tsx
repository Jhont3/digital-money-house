"use client"
import { Confirmation } from "@/components";

export default function ConfirmationPage() {
    
    return(
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">
            <Confirmation onDepositPg onPayServicesPg={false}/>
        </section>
    )
}
