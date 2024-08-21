import { Subtitle } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function PaymentMethodsPage() {
    return(
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 md:gap-5 lg:px-20">
            <Subtitle text="Cargar dinero"/>

            <article className="flex flex-col gap-5 ">
                <Link href={"/account/payment-methods/transfer"}  
                    className="bg-dark-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex justify-between py-5 px-9 min-h-32 md:min-h-40 rounded-lg"
                >
                    <div className="flex gap-4 items-center">
                        <span className="justify-start">
                            <Image src="/imgs/user.png" alt="user icon" width={34} height={34}/>
                        </span>
                        <p className="text-green-1 font-bold text-xl lg:inline-block">
                            <span className="block lg:inline">Tranferencia </span>
                            <span className="block lg:inline">bancaria</span>
                        </p>
                    </div>
                    <span className="flex justify-end items-center">
                        <Image src="/imgs/arrow.png" alt="arrow icon" width={18} height={18}/>
                    </span>
                </Link>

                <Link href={"/account/payment-methods/select-card"}  
                    className="bg-dark-1 shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex justify-between py-5 px-9 min-h-32 md:min-h-40 rounded-lg"
                >
                    <div className="flex gap-4 items-center">
                        <span className="justify-start">
                            <Image src="/imgs/card.png" alt="card icon" width={34} height={34}/>
                        </span>
                        <p className="text-green-1 font-bold text-xl lg:inline-block">
                            <span className="block lg:inline">Seleccionar </span>
                            <span className="block lg:inline">tarjeta</span>
                        </p>
                    </div>
                    <span className="flex justify-end items-center">
                        <Image src="/imgs/arrow.png" alt="arrow icon" width={18} height={18}/>
                    </span>
                </Link>

            </article>
               

        </section>
    )

}
