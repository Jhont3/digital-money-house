"use client"

import { UsePaymentStore } from "@/store";

export default function ConfirmationPage( ) {
    
    const { paymentData, setPaymentInfo, clearPaymentInfo } = UsePaymentStore();
    console.log(paymentData);
    

    return (
        <>
            <div>Hola Cantidad: {paymentData.totalAmount}</div>
        </>
    )
}
