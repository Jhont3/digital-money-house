
"use client"

import { UsePaymentStore } from "@/store"
import { errorAlert } from "@/utils"
import { useRouter } from "next/navigation"

export const GoToAmountBtn = ({displayButtonFull, displayButtonMobile}:any) => {

    const router = useRouter()
    const { paymentData } = UsePaymentStore()

    const goToAmountPage = () => {
        if (!paymentData.selectedCardId || paymentData.selectedCardId === 0 ) {
            errorAlert("Por favor selecciona una tarjeta")
            return;
        } else {
            router.push('/account/payment-methods/select-card/amount')
        }
    }

    return (
        <>
            { !displayButtonMobile &&
                <button onClick={goToAmountPage} className="flex justify-end w-full md:hidden ">
                    <span className="bg-green-1 w-40 h-12 text-dark-1 rounded-lg font-bold flex justify-center items-center shadow-[0_4px_4px_rgba(0,0,0,0.10)]"> 
                        Continuar
                    </span>
                </button>
            }

            { !displayButtonFull &&
                <button onClick={goToAmountPage} className="hidden w-full md:flex items-center justify-center lg:inline-block lg:w-auto shadow-[0_4px_4px_rgba(0,0,0,0.10)]" >
                    <span className="bg-green-1 w-full h-16 text-dark-1 rounded-lg font-bold flex justify-center items-center 
                    lg:w-56"
                    > 
                        Continuar
                    </span>
                </button>
            }
        </>
    )
}