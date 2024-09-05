"use client"
import { UsePaymentStore } from "@/store";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

export function Step2PayService( {setStep}: any ) {

    const [ accountNumber, setAccountNumber ] = useState<string>('');
    const [ isValidAccountNumber, setIsValidAccountNumber ] = useState<undefined | boolean>(undefined);

    const { setPaymentInfo } = UsePaymentStore()

    const validateAmount = (accountNumber: string): boolean => {
        return /^[^2]\d{10}$/.test(accountNumber);
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setAccountNumber(value);
        setIsValidAccountNumber(validateAmount(value));
    };

    const handleAccountNumberSubmit = (accountNumber:string) => {
        
        let  paddedAccountNumber = ''
        if (accountNumber.length < 11) { 
            paddedAccountNumber = accountNumber.padStart(11, "0");
            setPaymentInfo({ totalAmount: paddedAccountNumber });
        } else {
            setPaymentInfo({ totalAmount: accountNumber });
        }
        
        setStep(3);
    };

    return (
        <>                 
            <div className="bg-dark-1 rounded-lg px-5 py-4 md:px-14 md:py-12">
                <h2 className="font-bold text-xl text-green-1 pb-4 md:text-2xl">
                    Número de cuenta sin el primer 2
                </h2>
        
                <form >
                    <input
                    id="accountNumber"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={onChangeInput}
                    className={"text-black border-[1.6px] outline-none border-gray-1 focus:border-select-1 focus:ring-0 text-base w-full py-3 px-4 rounded-lg"}
                    placeholder="Ingresa el numero de cuenta"
                    autoComplete="off"
                    />
                </form>
            </div>
          
            <button
                onClick={()=>handleAccountNumberSubmit(accountNumber)}
                disabled={!isValidAccountNumber}
                className= {clsx({                
                    "bg-[#cecece]": !isValidAccountNumber,
                    "bg-green-1": isValidAccountNumber,
                },
                "mt-4 text-dark-1 font-bold py-2 px-4 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)]")}             
                >
                Continuar
            </button>
        
        </>
    )
}