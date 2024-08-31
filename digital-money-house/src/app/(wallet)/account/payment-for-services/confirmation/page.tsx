"use client"
import { UsePaymentStore } from "@/store";

export default function ConfirmationPage() {

    const { paymentData, clearPaymentInfo } = UsePaymentStore()
    console.log(paymentData);
    
    return(
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">
            <div>
                <p>hola</p>
                <p>asdasd</p>
            </div>
        </section>
    )
}