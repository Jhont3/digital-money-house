"use client"
import { Error, Subtitle } from "@/components";
import { UsePaymentStore } from "@/store";
import { useRouter } from "next/navigation";

export default function ErrorPage() {

    const router = useRouter()
    const { clearPaymentInfo } = UsePaymentStore();
    
    const goToPayServices = () => {
        clearPaymentInfo()
        router.push(`/account/payment-for-services`,);
    }
    
    return(
        <section className="flex flex-col gap-4 md:col-span-9">
            <article className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 md:gap-5 lg:px-20">
                <Subtitle text="Pagar servicios"/>  
                
                <div className="bg-dark-1 text-white rounded-lg px-5 py-7 md:px-14 md:py-12 flex flex-col gap-6">
                    <div className="flex justify-center"><Error/></div>

                    <p className="font-bold text-white text-xl md:flex md:justify-center md:text-2xl">
                        <span className="flex justify-center md:inline-block">Hubo un problema</span>&nbsp;
                        <span className="flex justify-center md:inline-block">con tu pago</span>               
                    </p>

                    <hr className="md:border-t md:border-dark-2"/>

                    <p className="text-[#cecece] text-xs md:flex md:flex-col md:justify-center md:items-center md:text-base">
                        <span className="flex justify-center md:inline-block">Puede deberse a fondos insuficientes</span>
                        <span className="flex justify-center md:inline-block">
                            Comunicate con la entidad emisora de la tarjeta
                        </span> 
                    </p>

                </div>
                             
                <div className="flex justify-end ">
                    <button 
                        onClick={goToPayServices}  
                        className="bg-green-1 w-48 h-12 text-dark-1 rounded-lg font-bold flex
                          items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:w-full xl:w-[233px]"
                    >                 
                            <span className="md:hidden xl:inline-block">Volver a intentarlo</span>        
                            <span className="hidden md:inline-block xl:hidden">Ver comprobante</span>        
                    </button>
                </div>
            </article>
        </section>
    )
}