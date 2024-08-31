"use client"
import { postTransference } from "@/services";
import { UsePaymentStore } from "@/store";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";

export function PayServiceButton ( {accountId}: any ) {
    
    const [ cardsUser, setCardsUser ] = useState<any>();
    const { paymentData } = UsePaymentStore();
    const router = useRouter();

    const handleConfirmationSubmit = async (event: any) => {
        event.preventDefault();
        const newDate = new Date().toISOString();
        const accountId = localStorage.getItem('account-id');

        const normalizedData = {   
            amount: Number(paymentData.totalAmount),
            dated: newDate.toString(),
            destination: paymentData.destination,
            origin: paymentData.origin,
        };

        try {
            const resp = await postTransference(Number(accountId), normalizedData);

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
    <>
        {/* Search input*/}
        <div className="relative w-full">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                <Image src="/imgs/search.png" alt="icon" width={14.7} height={14.7}/>
            </span>

            <input                     
            id="textToSearch"
            name="textToSearch"
            // value={searchInput}
            // onKeyDown={handleSearchInputKeyDown}
            // onChange={handleSearchInputChange}
            className="text-black text-base w-full py-3 pl-8 px-4 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)] 
                         border-[1.6px] outline-none border-gray-1 focus:border-select-1 focus:ring-0 md:min-h-16 "
            placeholder="Buscar en tu actividad"
            autoComplete="textToSearch"   
            />
        </div>
    </>
    )
}
