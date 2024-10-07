"use client"
import { Hamburger } from "@/components";
import { useSideBarContext } from "@/context";
import Link from "next/link";

export const NavInUserPage = ({profileInfo}:any) => {

    const { setIsSidebarOpen } = useSideBarContext() 

    if (!profileInfo) {
      <div>Cargando...</div>
    }

    return (
        <div className="text-black font-bold flex gap-2 pr-3 items-center "> 
        
        <Link href="/account" className="flex bg-green-1 rounded-lg w-[39px] h-8 justify-center items-center ">
          {profileInfo?.firstname.charAt(0)}{profileInfo?.lastname.charAt(0)}
        </Link>
        <span onClick={()=>{setIsSidebarOpen(true)}}><Hamburger className="p-1 object-cover md:hidden w-10 h-10" /></span>

        <Link href={'/account'}>
          <p className="hidden md:inline-flex text-white font-bold items-center h-full">
            Hola, {profileInfo?.firstname} {profileInfo?.lastname}
          </p>
        </Link>

      </div>
    );
  };
  