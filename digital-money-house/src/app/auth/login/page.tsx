"use client"
import { useLogInContext } from '@/context';
import { useFormC } from '@/hooks';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

// import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  const router = useRouter();

  const { finalStateForm, setFinalForm } = useLogInContext();
  const { formState, onInputChange, onResetForm } = useFormC(finalStateForm);



  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // email validation
    setFinalForm(formState);
    console.log(formState, "form state")
    console.log(finalStateForm, "final state")
    router.push(`/auth/login/pass`);
    onResetForm();
  }

  return (
    <>
        <h2 className='text-xl font-semibold text-white text-center -mt-[14vh] pb-6'>¡Hola!, ingresá tu e-mail</h2>
        <form onSubmit={onSubmit} className="text-white flex flex-col justify-center px-[10vw] gap-5">
            <div>                
                <input
                    id='email'
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={onInputChange}
                    className='text-black text-base w-full py-3 px-4 rounded-lg border-[1.6px] border-error-2'
                    placeholder='Correo electrónico'
                    autoComplete='on'
                />
            </div>

            <button type="submit" className='bg-green-1 text-black text-base font-bold rounded-xl p-3'>Continuar</button>
            
            <div className=' relative'>
               <button className='bg-gray-1 text-black text-base font-bold rounded-xl p-3 w-full'>Crear Cuenta</button>
               <div className='text-error-1 italic text-sm text-center absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full '>
                  <p>Usuario inexistente. Vuelve a intentarlo</p>
              </div>
            </div>

        </form>
    </>
  )
}
