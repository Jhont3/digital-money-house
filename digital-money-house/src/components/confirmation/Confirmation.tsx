
"use client"
import { Check, Subtitle } from "@/components";
import { roboto } from "@/config";
import { mockCVU } from "@/lib";
import { UsePaymentStore } from "@/store";
import { formatDate, getCreditCardType } from "@/utils";
import { useRouter } from "next/navigation";

export const Confirmation = ( { onDepositPg, onPayServicesPg } : any ) => {

    const router = useRouter()
    const { paymentData, clearPaymentInfo } = UsePaymentStore();
    
    const goToAccount = () => {
        clearPaymentInfo()
        router.push(`/account`);
    }

    return (
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 md:gap-5 lg:px-20">
            <Subtitle text="Cargar dinero"/>  

            <div className="bg-green-1 text-black rounded-lg flex flex-col justify-center items-center h-28 gap-2 xl:h-36">
                <div><Check/></div>
                <p className="md:text-2xl font-bold">
                    {onDepositPg && <span>Ya cargamos el dinero en tu cuenta</span>}
                    {onPayServicesPg && <span className="md:text-2xl">Ya realizamos tu pago</span>}                                       
                </p>
            </div>
            
            <div className="bg-dark-1 text-white rounded-lg px-5 py-4 md:px-14 md:py-12 flex flex-col gap-6">
                {onDepositPg &&                 
                <div className="pt-3">
                    <h2 className="font-bold text-xl text-green-1 pb-7 md:text-2xl">
                        Revisá que está  todo bien
                    </h2>

                    <hr className="border-t border-gray-[#cecece]] "/>
                </div>}

                <div>
                    <p className="text-xs pb-1 md:text-base">{formatDate(new Date().toISOString())}</p>
                    <p className="text-green-1 font-bold text-xl">
                        {onDepositPg && <span>${paymentData.totalAmount || "Cargando..."}</span>}
                        {onPayServicesPg && <span>$1.153,75</span>}                        
                    </p>
                </div>

                <div>
                    <p className="text-xs pb-1 md:text-base">Para</p>
                    <p className="text-green-1 font-bold text-xl md:text-2xl">                        
                        {onDepositPg && <span>Cuenta propia</span>}
                        {onPayServicesPg && <span>{paymentData.destination}</span>}    
                    </p>
                </div>

                {!onPayServicesPg &&
                <div className="text-white pb-9">
                    <p className="pb-1">Brubank</p>
                    <p className="text-xs ">CVU {mockCVU}</p>
                </div>
                }

                {onPayServicesPg && 
                <div className={`${roboto.className} text-white `} >
                    <p className="pb-1 md:font-bold">Tarjeta</p>
                    <p className="text-xs md:text-base md:font-bold">
                        {getCreditCardType(paymentData.selectedCardId.toString())} ********{paymentData.selectedCardId.toString().slice(-4)} 
                    </p>
                </div>
                }

            </div>

            <div className="flex flex-col md:flex-row-reverse gap-5 mb-3 xl:w-full">
                <button onClick={()=>{}} className="bg-green-1 w-full h-12 text-dark-1 rounded-lg font-bold flex 
                items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.10)] xl:w-[233px]">          
                        Descargar comprobante
                </button>

                <button onClick={goToAccount}  className="bg-[#cecece] w-full h-12 text-dark-1 rounded-lg font-bold flex
                 items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.10)] xl:w-[233px]">                 
                        Ir al inicio             
                </button>
            </div>
        </section>
    )
}
