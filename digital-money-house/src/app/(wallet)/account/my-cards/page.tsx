"use client"
import { fetchActivities } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function MyCardsPage() {

    useEffect(() => {
        fetchActivities()
    }, [])
    

    return(
        <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-12 lg:py-8 md:gap-5">

        {/* Title */}
        <div className="flex md:hidden">
            <span className="flex items-center">
                <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
            </span> &nbsp;
            <h2 ><span className="underline decoration-1 decoration-[rgba(0,0,0,0.50)] text-base text-dark-1 font-semibold">Tarjetas</span></h2>
        </div>
        
        {/* Add new card */}
        <article className="flex flex-col justify-between bg-dark-1 p-6 min-h-[147px] md:p-8 rounded-lg md:gap-8">

            <h3 className="text-gray-1 font-bold md:w-full ">
                Agregá tu tarjeta de débito o crédito
            </h3>


            <Link href={"/account/my-cards/1"}  className="flex justify-between py-4">
                <div className="flex gap-4">
                    <span className="justify-start">
                        <Image src="/imgs/add.png" alt="add icon" width={34} height={34}/>
                    </span>
                    <p className=" text-green-1 font-bold text-xl">Nueva tarjeta</p>
                </div>
                <span className="flex justify-end items-center">
                    <Image src="/imgs/arrow.png" alt="add icon" width={18} height={18}/>
                </span>
            </Link>

         </article>

        {/* Your cards */}
        <article className="bg-white p-5 rounded-lg flex flex-col gap-4 md:p-8 md:py-10">       
            <p className="text-dark-1 font-bold">Tus tarjetas</p>
            <hr className="md:border-t md:border-transparent md:border-black"/>

            <div className="flex justify-between py-4">
                <p className="flex items-center text-sm gap-2  text-dark-1 md:text-base md:gap-3">        
                    <span className="">
                        <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:md:h-8"/>
                    </span>
                    Terminada en 4067
                </p>
                <button onClick={()=>{}} className="flex items-start">
                    <span className="text-xs text-black font-bold text-end md:text-base">Eliminar</span>
                </button>
            </div>            
            <hr className="md:border-t md:border-transparent md:border-black"/>

            <div className="flex justify-between py-4">
                <p className="flex items-center text-sm gap-2  text-dark-1 md:text-base md:gap-3">        
                    <span className="">
                        <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:md:h-8"/>
                    </span>
                    Terminada en 4067
                </p>
                <button onClick={()=>{}} className="flex items-start">
                    <span className="text-xs text-black font-bold text-end md:text-base">Eliminar</span>
                </button>
            </div>            
            <hr className="md:border-t md:border-transparent md:border-black"/>

            <div className="flex justify-between py-4">
                <p className="flex items-center text-sm gap-2  text-dark-1 md:text-base md:gap-3">        
                    <span className="">
                        <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:md:h-8"/>
                    </span>
                    Terminada en 4067
                </p>
                <button onClick={()=>{}} className="flex items-start">
                    <span className="text-xs text-black font-bold text-end md:text-base">Eliminar</span>
                </button>
            </div>            
            <hr className="md:border-t md:border-transparent md:border-black"/>

        </article>

    </section>
    )

}