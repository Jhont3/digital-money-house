import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';
import { useMemo } from "react";

interface NavbarProps {
  isBgGreen : boolean;
  loginBtnOn?: boolean;
  onUserPage: boolean;
}

export const Navbar: React.FC<NavbarProps> = ( {isBgGreen, loginBtnOn, onUserPage} ) => {

  const logoSrc = useMemo(() => isBgGreen ? '/imgs/simpleLogoBlack.png' : '/imgs/simpleLogoGreen.png', [isBgGreen]);

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
      

      {/* User pages nav */}
      {onUserPage && <div> icon and hamburguer </div>}
      

       {/* Opcional login */}
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
