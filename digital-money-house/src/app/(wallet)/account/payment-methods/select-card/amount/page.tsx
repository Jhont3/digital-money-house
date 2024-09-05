"use client";
import { UsePaymentStore } from "@/store";
import { useEffect, useState } from "react";
import { Step1Amount } from "./Step1Amount";
import { Step2Amount } from "./Step2Amount";
import { Subtitle } from "@/components";
import { getCookieClient } from "@/utils";
import { getAccountInfo } from "@/services";
import { useAccountStore } from "@/store/account-data";

export default function AmountPage() {

  const { setAccountInfo } = useAccountStore()
  
  useEffect(() => {
    const token = getCookieClient('authToken') || '';
    const fetchAccountInfo = async () => {
      const accountInfo = await getAccountInfo(token);
      setAccountInfo(accountInfo)
    }
    fetchAccountInfo()
  }, [setAccountInfo])

  
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
        <Step2Amount />
      )}
     
    </section>
  );
}
