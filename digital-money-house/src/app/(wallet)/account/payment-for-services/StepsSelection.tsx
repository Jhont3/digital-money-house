"use client"
import { useState } from "react";
import { Step1PayService } from "./Step1PayService";
import { Step2PayService } from "./Step2PayService"
import { Step3PayService } from "./Step3PayService"

export function StepsServicePayment( {cardsUser, accountInfo}:any ) {

    const [ step, setStep ] = useState(1);

    return (
        <>
            {step === 1 && <Step1PayService setStep={setStep}/>}
            {step === 2 && <Step2PayService setStep={setStep}/>}
            {step === 3 && <Step3PayService cardsUser={cardsUser} accountInfo={accountInfo}/>}
        </>
    )
}
