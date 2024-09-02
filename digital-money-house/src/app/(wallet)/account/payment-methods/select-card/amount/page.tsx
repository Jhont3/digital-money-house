"use client";
import { UsePaymentStore } from "@/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Step1Amount } from "./Step1Amount";
import { Step2Amount } from "./Step2Amount";
import { Subtitle } from "@/components";

export default function AmountPage() {
  const router = useRouter();

  const [ step, setStep ] = useState(1);
  const [ amount, setAmount ] = useState<string>("");
  
  const { setPaymentInfo } = UsePaymentStore();
  
  const [ isValidAmount, setIsValidAmount ] = useState<undefined | boolean>(undefined);

  const validateAmount = (amount: string): boolean => {
    const amountNumber = Number(amount);
    return /^\d+$/.test(amount) && amountNumber > 0 && amountNumber < 1000000;
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value);
    setIsValidAmount(validateAmount(value));
  };

  const handleAmountSubmit = (amount:string) => {
    setAmount(amount);
    setPaymentInfo({ totalAmount: amount });
    setStep(2);
  };

  return (
    <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 md:gap-5 lg:px-20">
      
      <Subtitle text="Cargar dinero"/>

      {step === 1 && (
				<Step1Amount
          handleAmountSubmit={handleAmountSubmit}
          onChangeInput={onChangeInput}
          amount={amount}
          isValidAmount={isValidAmount}
				/>
			)}

			{step === 2 && (
        <Step2Amount           
        />
      )}
     
    </section>
  );
}
