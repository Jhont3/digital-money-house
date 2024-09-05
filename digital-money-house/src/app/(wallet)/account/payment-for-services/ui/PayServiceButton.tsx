"use client"
import { Transaction } from "@/interfaces";
import { postTransaction } from "@/services";
import { UsePaymentStore } from "@/store";
import { useRouter } from "next/navigation";

export function PayServiceButton ( {accountId}: any ) {
    
    const { paymentData } = UsePaymentStore();
    console.log(paymentData);
    
    const router = useRouter();

    const handleConfirmationSubmit = async (event: any) => {
        event.preventDefault();
        const newDate = new Date().toISOString();
        const accountId = localStorage.getItem('account-id');

        const normalizedData: Transaction = {   
            amount: -1153.73,
            dated: newDate.toString(),
            description: `Pago a ${paymentData.destination}`,
        };

        console.log(normalizedData);
        
        try {
            const resp = await postTransaction(Number(accountId), normalizedData);

            if (!resp.error) {
                router.push(`/account/payment-for-services/confirmation`);
                router.refresh();
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <button
            onClick={handleConfirmationSubmit}
            className= {"bg-green-1 text-dark-1 font-bold py-2 px-4 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]"}         
        >
            Continuar
        </button>
    )
}
