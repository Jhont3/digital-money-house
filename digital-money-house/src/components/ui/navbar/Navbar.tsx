"use client"
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { useSideBarContext } from "@/context";
import { useUserStore } from "@/store/user-data";
import { useEffect } from "react";
import { getCookie } from "cookies-next";

interface NavbarProps {
  isBgGreen : boolean;
  loginBtnOn?: boolean;
  onUserPage: boolean;
}

export const Navbar: React.FC<NavbarProps> = ( {isBgGreen, loginBtnOn, onUserPage} ) => {

  const { setIsSidebarOpen } = useSideBarContext() 
  const { userData, setUserInfo } = useUserStore()

  useEffect(() => {
    const userDataCookie = getCookie('userData');
    if (userDataCookie) {
        const parsedUserData = JSON.parse(userDataCookie);
        setUserInfo(parsedUserData);
    }
  }, [onUserPage, setUserInfo])
  

  return (
    <nav className={ clsx({
      'bg-dark-1': !isBgGreen,
      'bg-green-1': isBgGreen,
      'text-white': isBgGreen,
    }, 
    "flex justify-between items-center w-full h-[7vh] lg:max-h-[7vh] ")}>

      {/* Page logo */}
      <div className="p-2" >
        <Link href="/" >
          <Image
            src={'/imgs/simpleLogoGreen.png'}
            alt="logo green digital money house"
            className={clsx("p-2", { 'filter brightness-0 saturate-100': isBgGreen })}
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
        
        <Link href="/account" className="inline-flex bg-green-1 rounded-lg w-[39px] h-8 justify-center items-center ">
          {userData?.firstname.charAt(0)}{userData?.lastname.charAt(0)}
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
            Hola, {userData?.firstname} {userData?.lastname}
          </p>
        </Link>

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
