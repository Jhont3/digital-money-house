"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from 'clsx';

type Inputs = {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  pass: string;
  againPass: string;
  phone: string;
};

export default function RegisterPage() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);;

  const hasErrors = Object.values(errors).some(error => error);

  // console.log(watch("firstName")) 
  // watch input value by passing the name of it

  return (
    <>
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
            type="firstName"
            {...register("firstName", { required: true, minLength: 2 })}
            className="border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]"
            placeholder="Nombre*"
            autoComplete="firstName"
          />
        </div>
        <div>
          <input
            id="lastName"
            type="lastName"
            {...register("lastName", { required: true, minLength: 2 })}            
            className="border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]"
            placeholder="Apellido*"
            autoComplete="lastName"
          />
        </div>
        <div>
          <input
            id="dni"
            type="dni"
            {...register("dni", { required: true, minLength: 2 })}
            className="border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]"
            placeholder="DNI*"
            autoComplete="dni"
          />
        </div>
        <div>
          <input
            id="email"
            type="email"
            {...register("email", { required: true, minLength: 2 })}            
            className="border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]"
            placeholder="Correo electrónico*"
            autoComplete="email"
          />
        </div>
        <p className="text-[0.6rem] text-[#EEEAEA] font-normal text-center md:col-span-2  ">Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número)</p>
        <div>
          <input
            id="pass"
            type="pass"
            {...register("pass", { required: true, minLength: 6 })}            
            className="border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]"
            placeholder="Contraseña*"
            autoComplete="pass"
          />
        </div>
        <div>
          <input
            id="againPass"
            type="againPass"
            {...register("againPass", { required: true, minLength: 6 })}            
            className="border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]"
            placeholder="Confirmar contraseña*"
            autoComplete="againPass"
          />
        </div>
        <div>
          <input
            id="phone"
            type="phone"
            {...register("phone", { required: true, pattern: { value: /^[+]?(\d.*){6,}$/, message: "El teléfono debe contener al menos 6 números" } })}            
            className="border-dark-1 text-black text-sm w-full py-3 px-4 rounded-lg border-[1.6px]"
            placeholder="Telefono*"
            autoComplete="phone"
          />
        </div>

        <div className="relative pt-4 pb-6 lg:pt-0">
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

    </>
  );
}
