"use client"
import { useFormC } from "@/hooks"
import Image from "next/image"
import { FormEvent } from "react";

const initialState = {
    email: "",
    password: "",
    textToSearch: "",
  };

export  function SearchForm () {
    
    const { formState, onInputChange, onResetForm } = useFormC(initialState)

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        onResetForm()
    }

    return (
    <>
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
    </>
    )
}