"use client"
import { Check, Navbar } from "@/components";
import { useLogInContext } from "@/context";
import { useRouter } from "next/navigation";

export default function SuccessPage() {

  const { setEmailValidated } = useLogInContext();

  const router = useRouter();
  const handleGoToLogin = () => {
    setEmailValidated(false)
    router.push(`/auth/login`);
  };

  return (
    <>
      <Navbar isBgGreen={true} onUserPage={false}/>
      <main className="w-full min-h-[86vh] bg-dark-1 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center gap-8 px-[15vw]">
        <h2 className="text-white text-center font-semibold text-3xl ">Registro Existoso</h2>
        <div className="flex justify-center">
          <Check className="w-[101px] h-[104px] object-cover text-center" fill="#C1FD35"/>
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
      </main>
    </>
    
  )
}
