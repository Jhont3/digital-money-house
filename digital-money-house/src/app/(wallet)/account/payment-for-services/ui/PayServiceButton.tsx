"use client"
import { Transaction } from "@/interfaces";
import { postTransaction } from "@/services";
import { UsePaymentStore } from "@/store";
import { errorAlert } from "@/utils";
import { useRouter } from "next/navigation";

export function PayServiceButton ({accountInfo}:any) {
    
    const { paymentData } = UsePaymentStore();
    
    const router = useRouter();

    const handleConfirmationSubmit = async (event: any) => {
        event.preventDefault();
        const newDate = new Date().toISOString();
        const accountId = localStorage.getItem('account-id');

        if (!paymentData.selectedCardId) {
            errorAlert("Seleccione una tarjeta de credito")
            return
        }

        const normalizedData: Transaction = {   
            amount: -1153.73,
            dated: newDate.toString(),
            description: `Pago a ${paymentData.destination}`,
        };
        
        try {
            if (accountInfo.available_amount < 1153.73) {
                throw new Error
            }

            const resp = await postTransaction(Number(accountId), normalizedData);

            if (!resp.error) {
                router.push(`/account/payment-for-services/confirmation`);
                router.refresh();
            }
        } catch (error) {
            console.error(error);
            router.push(`/account/payment-for-services/error`);
        }
    };

    return (
        <div className="w-full flex justify-end">
            <button
                onClick={handleConfirmationSubmit}
                className="bg-green-1 text-dark-1 font-bold py-2 px-4 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)] w-40 h-12
                md:w-56 "         
            >
                Continuar
            </button>
        </div>
    )
}
