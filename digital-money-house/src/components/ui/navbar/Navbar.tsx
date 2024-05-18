import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full bg-dark-1 h-[8vh]">
      <div className="p-2" >
        <Link href="/" >
          <Image
            src="/imgs/simpleLogoGreen.png"
            alt="logo green digital money house"
            className="p-2"
            width="80"
            height="80"
          />
        </Link>
      </div>
      <div className="flex justify-end gap-2 p-2 w-[70%] md:w-1/3">
        <Link
          className="bg-dark-1 text-green-1 font-bold text-xs border border-green-1 py-2 px-6  rounded text-center align-middle w-1/2 md:w-auto"
          href="/auth/login"
        >
          Ingresar
        </Link>
        <Link
          className="bg-green-1  text-dark-2 font-bold text-xs border-green-1 py-2 px-1 rounded text-center w-1/2"
          href="/auth/new-account"
        >
          Crear cuenta
        </Link>
      </div>
    </nav>
  );
};
