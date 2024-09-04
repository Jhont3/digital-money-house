"use client"
import { EditPencil } from "@/components";
import { mockCVU } from "@/lib";
import { postDeposit } from "@/services";
import { UsePaymentStore } from "@/store";
import { errorAlert, successAlert } from "@/utils";
import { useRouter } from "next/navigation";
import { useState, KeyboardEvent } from "react";

interface Editing { amount: boolean; }

export function Step2Amount( {}: any ) {

    const { paymentData, setPaymentInfo, clearPaymentInfo } = UsePaymentStore();
    const [ amount, setAmount ] = useState<string>(`${paymentData.totalAmount}` || "");
    const [ isValidAmount, setIsValidAmount ] = useState<undefined | boolean>(undefined);
    const [ editing, setEditing ] = useState<Editing>({ amount: true, });        

    const router = useRouter()

    const validateAmount = (amount: string): boolean => {
      const amountNumber = Number(amount.replace("$", ""));
      return /^\d+$/.test(amount) && amountNumber > 0 && amountNumber < 1000000;
    };
  
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setIsValidAmount(validateAmount(value));               
        setAmount(value);
    };
    
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			amount.trim();            
            if (isValidAmount) {            
                setPaymentInfo({totalAmount: amount});
                setEditing({ amount: false });                        
                successAlert("Valor modificado correctamente")                        
            } else {
                errorAlert("Algo fue mal")
            }
		} 
	};

    const handleEdit = (key: keyof Editing) => {
        setEditing((prevEditing) => ({
            ...prevEditing,
            [key]: !prevEditing[key],
        }));
    };

    const handleConfirmationSubmit = async (event: any) => {
        event.preventDefault();
        const newDate = new Date().toISOString();
        const accountId = localStorage.getItem('account-id');
    
        const normalizedData = {   
            amount: Number(paymentData.totalAmount),
            dated: newDate.toString(),
            destination: "My account",
            origin: "My account",
        }
    
        try {
            const resp = await postDeposit( Number(accountId), normalizedData);
                
            if (!resp.error) {
                setAmount("")                
                router.push(`/account/payment-methods/select-card/amount/confirmation`);
            }
    
        } catch (error) {
            console.error(error);
        }
    };

    if (!paymentData.totalAmount || paymentData.totalAmount === "") {
        return <div>Cargando...</div>;
    }

    return (
    <>
        <form onSubmit={handleConfirmationSubmit} className="bg-dark-1 rounded-lg px-5 py-4 md:px-14 md:py-12 flex flex-col gap-6">

            <div className="pt-3">
                <h2 className="font-bold text-xl text-green-1 pb-7 md:text-2xl">
                     Revisá que está  todo bien
                </h2>

                <hr className="border-t  border-gray-[#cecece]] "/>
            </div>
            
            <div>
                <div className="flex">
                    <span className="pr-2 text-white">Vas a tranferir</span>
                    <span onClick={() => handleEdit("amount")}><EditPencil/></span>
                </div>

                <input
                    id="amount"                     
                    name="amount"
                    value={amount}
                    // placeholder={`$${paymentData.totalAmount}`}
                    className="font-bold text-white bg-dark-1 outline-none border-gray-1 focus:border-select-1 focus:ring-0"                                           
                    autoComplete={'off'}                   
                    onChange={onChangeInput}
                    onKeyDown={handleKeyDown}
                    disabled={editing.amount}                                                    
                />
            </div>

            <div className="text-white">
                <p>Para</p>
                <p className="font-bold">Cuenta propia</p>
            </div>

            <div className="text-white pb-9">
                <p>Brubank</p>
                <p className="text-xs">CVU {mockCVU}</p>
            </div>

            <button type="submit" className="hidden md:flex items-center justify-center" >
                <span className="bg-green-1 w-full h-16 text-dark-1 rounded-lg font-bold"> 
                    Continuar
                </span>
            </button>
        </form>

        <button onClick={handleConfirmationSubmit} className="flex justify-end md:hidden ">
            <span className="bg-green-1 w-40 h-12 text-dark-1 rounded-lg font-bold flex items-center justify-center"> 
                Continuar
            </span>
        </button>
    </>
    )
}
