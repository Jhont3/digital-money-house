"use client"
import { Navbar } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SuccessPage() {

  const router = useRouter();
  const handleGoToLogin = () => {
    router.push(`/auth/login`);
  };

  return (
    <>
      <Navbar isBgGreen={true} />
      <div className="w-full min-h-[86vh] bg-dark-1 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center gap-8 px-[15vw]">
        <h2 className="text-white text-center font-semibold text-3xl ">Registro Existoso</h2>
        <div className="flex justify-center">
          <Image
                src="/imgs/check.png "
                alt="success image"
                width={101}
                height={104}
                className="object-cover text-center"
          />
        </div>
        <p className="text-white text-center">Hemos enviado un correo de confirmación para validar tu email, por favor revisalo para iniciar sesión.</p>
        <div className="pb-6 w-full md:w-[360px] flex justify-center">
            <button
              onClick={handleGoToLogin}
              className="bg-green-1 text-black text-sm font-bold rounded-xl p-3 w-full "
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
    
  )
}
