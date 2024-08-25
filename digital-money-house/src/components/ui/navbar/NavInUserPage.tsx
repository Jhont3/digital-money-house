"use client"
import { useSideBarContext } from "@/context";
import Image from "next/image";
import Link from "next/link";

export const NavInUserPage = ({profileInfo}:any) => {

    const { setIsSidebarOpen } = useSideBarContext() 

    if (!profileInfo) {
      <div>Cargando...</div>
    }

    return (
        <div className="text-black font-bold flex gap-2 pr-3 "> 
        
        <Link href="/account" className="inline-flex bg-green-1 rounded-lg w-[39px] h-8 justify-center items-center ">
          {profileInfo?.firstname.charAt(0)}{profileInfo?.lastname.charAt(0)}
        </Link>

        <Image
            src={'/imgs/hamburguer.png'}
            alt="logo green digital money house"
            className="p-1 object-cover md:hidden"
            width="40"
            height="40"
            onClick={()=>{setIsSidebarOpen(true)}}
        />

        <Link href={'/account'}>
          <p className="hidden md:inline-flex text-white font-bold items-center h-full">
            Hola, {profileInfo?.firstname} {profileInfo?.lastname}
          </p>
        </Link>

      </div>
    );
  };
  