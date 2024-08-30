"use client"

import { UsePaymentStore } from "@/store";
import clsx from "clsx"

export function Step2Amount( {onSubmit, onChangeInput, amount, isValidAmount}: any ) {
    
     const { paymentData, setPaymentInfo, clearPaymentInfo } = UsePaymentStore();

    return (
        <>
            <div>Cantidad: {paymentData.totalAmount}</div>
        </>
    )
}
