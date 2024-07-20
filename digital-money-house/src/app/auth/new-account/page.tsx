"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { Navbar } from "@/components";


type Inputs = {
  firstName: string;
  lastName: string;
  dni: number;
  email: string;
  pass: string;
  againPass: string;
  phone: string;
};

export default function RegisterPage() {

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<Inputs>();

  const hasErrors = Object.values(errors).some(error => error);
  
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data)  => {
    console.log(data, "1");
    try {

      if (hasErrors) return;

      const response = await fetch('https://digitalmoney.digitalhouse.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          dni: Number(data.dni),
          email: data.email,
          password: data.pass,
          phone: data.phone,
        })
      });
     

      if (!response.ok) {
        throw new Error('Login failed');
      }
      const responseData  = await response.json();

      console.log(data);
      console.log(responseData, "respuesta");
      // localStorage.setItem("token", responseData?.token);

      reset()
      router.push(`/auth/new-account/success`);

    } catch (error) {
      console.error('Error during login:', error);
    }
    console.log("final")
    reset()
  }

  return (
    <>
      <Navbar isBgGreen={true} loginBtnOn={true} onUserPage={false}/>
      <div className="w-full min-h-[86vh] bg-dark-1 flex flex-col justify-center">
        <h2 className="text-lg font-semibold text-white text-center py-4 ">
          Crear cuenta
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-white flex flex-col justify-center px-[14vw] gap-4 md:px-[30vw] lg:px-[20vw] lg:gap-4 md:grid md:grid-cols-2"
        >
          <div>
            <input
              id="firstName"
              {...register("firstName", { required: true, minLength: 2 })}
              className={clsx ({
                      'border-dark-1' :  !errors?.firstName,  
                      'border-error-2' : errors?.firstName,
                    },"border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]")}
              placeholder="Nombre*"
              autoComplete="firstName"
            />
          </div>
          <div>
            <input
              id="lastName"
              {...register("lastName", { required: true, minLength: 2 })}            
              className={clsx ({
                      'border-dark-1' :  !errors?.lastName,  
                      'border-error-2' : errors?.lastName,
                    },"border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]")}
              placeholder="Apellido*"
              autoComplete="lastName"
            />
          </div>
          <div>
            <input
              id="dni"
              type="number"
              {...register("dni", { required: true, minLength: 1 })}
              className={clsx ({
                      'border-dark-1' :  !errors?.dni,  
                      'border-error-2' : errors?.dni,
                    },"border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]")}
              placeholder="DNI*"
              autoComplete="dni"
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              {...register("email", { required: true, minLength: 2 })}            
              className={clsx ({
                      'border-dark-1' :  !errors?.email,  
                      'border-error-2' : errors?.email,
                    },"border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]")}
              placeholder="Correo electrónico*"
              autoComplete="email"
            />
          </div>
          <p className="text-[0.6rem] text-gray-1 font-normal text-center md:col-span-2  ">Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número)</p>
          <div>
            <input
              id="pass"
              type="password"
              {...register("pass", { required: true, minLength: 6 })}            
              className={clsx ({
                      'border-dark-1' :  !errors?.pass,  
                      'border-error-2' : errors?.pass,
                    },"border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]")}
              placeholder="Contraseña*"
              autoComplete="pass"
            />
          </div>
          <div>
            <input
              id="againPass"
              type="password"
              {...register("againPass", { required: true, minLength: 6, validate: value => value === watch('pass') || "Las contraseñas no coinciden" })}            
              className={clsx ({
                      'border-dark-1' :  !errors?.againPass,  
                      'border-error-2' : errors?.againPass,
                    },"border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]")}
              placeholder="Confirmar contraseña*"
              autoComplete="againPass"
            />
          </div>
          <div>
            <input
              id="phone"

              {...register("phone", { required: true, pattern: { value: /^[+]?(\d.*){6,}$/, message: "El teléfono debe contener al menos 6 números" } })}            
              className={clsx ({
                      'border-dark-1' :  !errors?.phone,  
                      'border-error-2' : errors?.phone,
                    },"border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]")}
              placeholder="Telefono*"
              autoComplete="phone"
            />
          </div>

          <div className="relative pt-4 pb-6 md:pt-0">
            <button
              type="submit"
              className="bg-green-1 text-black text-sm font-bold rounded-xl p-3 w-full"
            >
              Crear cuenta
            </button>
            <div className={clsx({'hidden': !hasErrors},
            "text-error-1 italic text-sm text-center absolute left-1/2 -bottom-0.5 transform -translate-x-1/2 w-full")}
          >
              <p>Completa los campos requeridos </p>
            </div>
          </div>
        </form>
      </div>
      
    </>
  );
}
