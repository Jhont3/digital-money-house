"use client"
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { useMemo } from "react";
import { useSideBarContext } from "@/context";

interface NavbarProps {
  isBgGreen : boolean;
  loginBtnOn?: boolean;
  onUserPage: boolean;
}

export const Navbar: React.FC<NavbarProps> = ( {isBgGreen, loginBtnOn, onUserPage} ) => {

  const logoSrc = useMemo(() => isBgGreen ? '/imgs/simpleLogoBlack.png' : '/imgs/simpleLogoGreen.png', [isBgGreen]);

  const { isSidebarOpen, setIsSidebarOpen } = useSideBarContext() 

  return (
    <nav className={ clsx({
      'bg-dark-1': !isBgGreen,
      'bg-green-1': isBgGreen,
      'text-white': isBgGreen
    }, 
    "flex justify-between items-center w-full h-[7vh] lg:max-h-[7vh] ")}>

      {/* Page logo */}
      <div className="p-2" >
        <Link href="/" >
          <Image
            src={logoSrc}
            alt="logo green digital money house"
            className="p-2"
            width="80"
            height="80"
          />
        </Link>
      </div>

      {/* Normal login/register links */}
      {!onUserPage && <div className={ clsx({
        'hidden': isBgGreen,
      },
       "flex justify-end gap-2 p-2 w-[70%] md:w-1/3 ")
       }>
        <Link
          className="bg-dark-1 text-green-1 font-bold text-xs border border-green-1 py-2 px-6 rounded text-center align-middle w-1/2 md:w-auto "
          href="/auth/login"
        >
          Ingresar
        </Link>
        <Link
          className="bg-green-1  text-dark-2 font-bold text-xs border-green-1 py-2 px-1 rounded text-center w-1/2 lg:max-w-28"
          href="/auth/new-account"
        >
          Crear cuenta
        </Link>
      </div>}
      

      {/* User pages nav - Hamburger */}
      {onUserPage && 
      <div className="text-black font-bold flex gap-2 pr-3 "> 
        
        <Link href="/account/profile" className="inline-flex bg-green-1 rounded-lg w-[39px] h-8 justify-center items-center ">
          MB
        </Link>

        <Image
            src={'/imgs/hamburguer.png'}
            alt="logo green digital money house"
            className="p-1 object-cover md:hidden"
            width="40"
            height="40"
            onClick={()=>{setIsSidebarOpen(true)}}
        />

        <p className="hidden md:inline-flex text-white font-bold items-center">
          Hola, Mauricio Brito
        </p>

        
        
      </div>}
      

       {/* Opcional only login */}
      <div className={ clsx({
        'hidden': !loginBtnOn
      },
       "flex justify-end gap-2 p-2 w-[70%] md:w-1/3 ")
       }>
        <Link
          className="bg-dark-1 text-white font-bold text-xs border border-green-1 py-2 px-4 rounded text-center align-middle md:w-auto "
          href="/auth/login"
        >
          Iniciar sesion
        </Link>
      </div>

    </nav>
  );
};
