"use client"
import { Transaction } from "@/interfaces";
import { postTransaction, postTransference } from "@/services";
import { UsePaymentStore } from "@/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function PayServiceButton ( {accountId}: any ) {
    
    const { paymentData } = UsePaymentStore();
    console.log(paymentData);
    
    const router = useRouter();

    const handleConfirmationSubmit = async (event: any) => {
        event.preventDefault();
        const newDate = new Date().toISOString();
        const accountId = localStorage.getItem('account-id');

        const normalizedData: Transaction = {   
            amount: -2000,
            dated: newDate.toString(),
            description: `Pago a ${paymentData.destination}`,
        };

        console.log(normalizedData);
        
        try {
            const resp = await postTransaction(Number(accountId), normalizedData);

            if (!resp.error) {
                router.push(`/account/payment-for-services/confirmation`);
            }
        } catch (error) {
            console.error(error);
        }
    };

	// const redirectToActivityPage = () => {
	// 	if (searchInput.trim().length > 0) {
	// 		router.push(`/account/my-activity?search=${searchInput}`);
	// 	}
	// };

    return (
        <button
            onClick={handleConfirmationSubmit}
            // disabled={!isValidAccountNumber}
            // className= {clsx({                
            //     "bg-[#cecece]": !isValidAccountNumber,
            //     "bg-green-1": isValidAccountNumber,
            // },
            // "mt-4  text-white py-2 px-4 rounded-lg")}    
            className= {"bg-green-1 text-white py-2 px-4 rounded-lg"}         
        >
            Continuar
        </button>
    )
}
