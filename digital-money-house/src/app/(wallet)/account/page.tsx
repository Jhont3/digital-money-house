"use client"
import { useFormC } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

const initialState = {
  email: "",
  password: "",
  textToSearch: "",
};

export default function ProfilePage() {

  const { formState, onInputChange, onResetForm } = useFormC(initialState)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    onResetForm()
  }

  return (
    <section className="flex flex-col gap-4 md:col-span-9 md:p-12 md:py-14 lg:px-20 lg:py-14 xl:col-span-10">
      <p className="flex md:hidden">
        <span className="flex items-center">
          <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
        </span> &nbsp;
        <span className="underline text-base text-dark-1">Inicio</span>
      </p>

      {/* User money */}
      <div className="bg-dark-1 p-4 pb-6 rounded-lg flex flex-col gap-4 shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:px-6 md:pb-12 ">
        <p className=" flex justify-end text-white text-xs font-semibold gap-2 pb-2">
          <span>Ver tarjetas</span>
          <span>Ver CVU</span>
        </p>
        <p className="text-white md:pl-2 md:font-bold">Dinero disponible</p>
        <p className=" text-white py-2 font-bold text-2xl md:text-4xl ">
          <span className=" rounded-full border border-green-1 py-2 px-4 md:pr-6 md:pl-4 md:border-2 ">$ 6.890.534,17</span>
        </p>
      </div>

      <div className="flex flex-col gap-4 md:text-2xl lg:flex-row  ">
        <Link href={'/'} className="flex items-center justify-center bg-green-1 text-center p-4 rounded-lg font-bold shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:min-h-20 lg:flex-1">
          <span className="block md:hidden">Ingresar dinero</span>
          <span className="hidden md:block lg:hidden">Transferir dinero</span>
          <span className="hidden lg:block">Cargar dinero</span>
        </Link>

        <Link href={'/'} className="flex items-center justify-center bg-green-1 text-center p-4 rounded-lg font-bold shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:min-h-20 lg:flex-1">
          <span className="block md:hidden">Pago servicios</span>
          <span className="hidden md:block lg:hidden">Pagar servicios</span>
          <span className="hidden lg:block">Pago de servicios</span>
        </Link>
      </div>

      {/* Search input*/}
      <form onSubmit={onSubmit} className="relative w-full">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          <Image src="/imgs/search.png" alt="icon" width={14.7} height={14.7}/>
        </span>
        <input                     
          id="textToSearch"
          name="textToSearch"
          value={formState.textToSearch}
          onChange={onInputChange}
          className="text-black text-base w-full py-3 pl-8 px-4 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.10)] md:min-h-16"
          placeholder="Buscar en tu actividad"
          autoComplete="textToSearch"   
        />
      </form>

      {/* User activity */}
      <article className="bg-white p-4 rounded-lg flex flex-col gap-4 shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:p-8 md:py-10">
        
        <p className="text-dark-1 font-bold">Tu actividad</p>
        <hr className="md:border-t md:border-transparent md:border-black"/>

        <div className="flex justify-between">
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:gap-3">        
            <span className="">
              <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:md:h-8"/>
            </span>
            Transferiste a Rodrigo
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-dark-2 text-end md:text-base">-$ 1265,57</span>
            <span className="text-xs text-black opacity-50 text-end md:text-sm md:opacity-40">Sábado</span>
          </div>
        </div>
        <hr className="md:border-t md:border-transparent md:border-black"/>

        <div className="flex justify-between">
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:gap-3">        
            <span>
              <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:h-8"/>
            </span>
            Transfereriste a Consorcio
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-dark-2 text-end md:text-base ">-$ 1265,57</span>
            <span className="text-xs text-black opacity-50 text-end md:text-sm md:opacity-40">Sábado</span>
          </div>
        </div>
        <hr className="md:border-t md:border-transparent md:border-black"/>

        <div className="flex justify-between">
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base md:gap-3">        
            <span>
              <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 md:h-8"/>
            </span>
            Ingresaste dinero
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-dark-2 text-end md:text-base">-$ 1265,57</span>
            <span className="text-xs text-black opacity-50 text-end md:text-sm md:opacity-40">Sábado</span>
          </div>
        </div>
        <hr className="md:border-t md:border-transparent md:border-black"/>

        <Link href={'/'} className="text-black font-bold text-[12px] flex justify-between md:text-base">
          <span className="">Ver toda tu actividad</span>
          <span className="flex items-center">
            <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12} className="md:w-[18px] md:h-[18px]"/>
          </span>
        </Link>
      

      </article>

    </section>
  );
}
