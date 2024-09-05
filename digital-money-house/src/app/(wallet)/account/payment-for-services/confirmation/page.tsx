"use client"
import { Confirmation } from "@/components";
import { getAccountInfo } from "@/services";
import { useAccountStore } from "@/store/account-data";
import { getCookieClient } from "@/utils";
import { useEffect } from "react";

export default function ConfirmationPage() {

    const { setAccountInfo } = useAccountStore()
  
    useEffect(() => {
      const token = getCookieClient('authToken') || '';
      const fetchAccountInfo = async () => {
        const accountInfo = await getAccountInfo(token);
        setAccountInfo(accountInfo)
      }
      fetchAccountInfo()
    }, [setAccountInfo])
  
    
    return(
        <section className="flex flex-col gap-4 md:col-span-9">
            <Confirmation onDepositPg={false} onPayServicesPg />
        </section>
    )
}