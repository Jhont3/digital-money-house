"use client"
import { Confirmation } from "@/components";

export default function ConfirmationPage() {
    
    return(
        <section className="flex flex-col gap-4 md:col-span-9">
            <Confirmation onDepositPg onPayServicesPg={false}/>
        </section>
    )
}
