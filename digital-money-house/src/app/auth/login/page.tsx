"use client"
import { useLogInContext } from '@/context';
import { useFormC } from '@/hooks';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';


export default function LoginPage() {
  const router = useRouter();

  const { finalStateForm, setFinalForm, emailValidated } = useLogInContext();
  const { formState, onInputChange, onResetForm } = useFormC(finalStateForm);

  const [isValidEmail, setIsValidEmail] = useState<undefined | boolean>(undefined)

  const validateEmail = (email: string): boolean => {
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValid = validateEmail(formState.email);
    setIsValidEmail(emailValid);

    if (!emailValid) return;

    setFinalForm(formState);
    onResetForm();
    
    router.push(`/auth/login/pass`);
  }

  const handleGoToRegister = () => {
    router.push(`/auth/new-account`);
  };

  return (
    <>
        <h2 className='text-xl font-semibold text-white text-center -mt-[14vh] pb-6 md:-mt-[20vh] lg:-mt-[10vh]'>¡Hola!, ingresá tu e-mail</h2>
        <form onSubmit={onSubmit} className="text-white flex flex-col justify-center px-[10vw] gap-5 md:px-[30vw] lg:px-[36vw] lg:gap-4">
            <div>                
                <input
                    id='email'
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={onInputChange}
                    className={ clsx ({
                      'border-dark-1' : isValidEmail || isValidEmail == undefined, 
                      'border-error-2' : isValidEmail == false,
                    },
                      'text-black text-base w-full py-3 px-4 rounded-lg border-[1.6px] border-dark-1')}
                    placeholder='Correo electrónico'
                    autoComplete='email'                    
                />
            </div>


            {
              !emailValidated && <>
                <div className=' relative'>
                  <button type="submit" className='bg-green-1 text-black text-base font-bold rounded-xl p-3 w-full'>Ingresar</button>
                  <div className={ clsx({
                      'hidden': isValidEmail !== false
                  },   
                  'text-error-1 italic text-sm text-center absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full')}>
                      <p>Usuario inexistente. Vuelve a intentarlo</p>
                  </div>
                </div>
                <div className='p-3 text-black w-full'>-</div>
              </>
            }

            {
              emailValidated && <>
                <button type="submit" className='bg-green-1 text-black text-base font-bold rounded-xl p-3'>Continuar</button>
                <div className=' relative'>
                  <button onClick={handleGoToRegister} className='bg-gray-1 text-black text-base font-bold rounded-xl p-3 w-full'>Crear Cuenta</button>
                  <div className={ clsx({
                    'hidden': isValidEmail !== false
                  },   
                  'text-error-1 italic text-sm text-center absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full ')}>
                      <p>Usuario inexistente. Vuelve a intentarlo </p>
                  </div>
                </div>                 
              </>
            }



        </form>
    </>
  )
}
