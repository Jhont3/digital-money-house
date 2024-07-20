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
    <>
      <p className="flex">
        <span className="flex items-center">
          <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
        </span> &nbsp;
        <span className="underline text-base text-dark-1">Inicio</span>
      </p>

      {/* User money */}
      <div className="bg-dark-1 p-4 rounded-lg flex flex-col gap-4">
        <p className=" flex justify-end text-white text-xs font-semibold gap-2 pb-2">
          <span>Ver tarjetas</span>
          <span>Ver CVU</span>
        </p>
        <p className="text-white">Dinero disponible</p>
        <p className=" text-white py-2 font-bold text-2xl">
          <span className=" rounded-full border border-green-1 py-2 px-4 ">$ 6.890.534,17</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Link href={'/'} className="bg-green-1 text-center p-4 rounded-lg font-bold drop-shadow-md">
          Ingresar dinero
        </Link>

        <Link href={'/'} className="bg-green-1 text-center p-4 rounded-lg font-bold drop-shadow-md">
          Pago de servicios
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
          className="text-black text-base w-full py-3 pl-8 px-4 rounded-lg drop-shadow-md"
          placeholder="Buscar en tu actividad"
          autoComplete="textToSearch"   
        />
      </form>

      {/* User activity */}
      <div className="bg-white p-4 rounded-lg flex flex-col gap-4 drop-shadow-md  ">
        
        <p className="text-dark-1 font-bold">Tu actividad</p>
        <hr />

        <div className="flex justify-between">
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base">        
            <span className="">
              <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 h-8"/>
            </span>
            Transferiste a Rodrigo
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-dark-2 text-end">-$ 1265,57</span>
            <span className="text-xs text-black opacity-50 text-end">Sábado</span>
          </div>
        </div>
        <hr />

        <div className="flex justify-between">
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base">        
            <span className="">
              <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 h-8"/>
            </span>
            Transfereriste a Consorcio
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-dark-2 text-end">-$ 1265,57</span>
            <span className="text-xs text-black opacity-50 text-end">Sábado</span>
          </div>
        </div>
        <hr />

        <div className="flex justify-between">
          <p className="flex items-center text-sm gap-2 text-dark-1 md:text-base">        
            <span className="">
              <Image src="/imgs/greenCircle.png" alt="icon" width={24} height={24} className="md:w-8 h-8"/>
            </span>
            Ingresaste dinero
          </p>
          <div className="flex flex-col">
            <span className="text-sm text-dark-2 text-end">-$ 1265,57</span>
            <span className="text-xs text-black opacity-50 text-end">Sábado</span>
          </div>
        </div>
        <hr />
        
        <p>asd</p>
        <hr />

        <Link href={'/'} className="text-black font-bold text-[12px] flex justify-between">
          <span>Ver toda tu actividad</span>
          <span className="flex items-center">
            <Image src="/imgs/greyArrow.png" alt="icon" width={12} height={12}/>
          </span>
        </Link>
      

      </div>

    </>
  );
}
