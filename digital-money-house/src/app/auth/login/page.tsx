"use client"
import { useLogInContext } from '@/context';
import { useFormC } from '@/hooks';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';


export default function LoginPage() {
  const router = useRouter();

  const { finalStateForm, setFinalForm } = useLogInContext();
  const { formState, onInputChange, onResetForm } = useFormC(finalStateForm);


  const [isValidEmail, setIsValidEmail] = useState<undefined | boolean>(undefined)

  // const handleEmailValidation = () => {
  //   setIsValidEmail(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(formState.email));
  // };

  const validateEmail = (email: string): boolean => {
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // email validation

    console.log(formState, "form state")
    console.log(finalStateForm, "final state")

    const emailValid = validateEmail(formState.email);
    setIsValidEmail(emailValid);

    if (!emailValid) return;
    
    // handleEmailValidation();

    // if (isValidEmail == false || isValidEmail == undefined) return;
    console.log( "llegó")
    console.log(finalStateForm, "final state")
    setFinalForm(formState);
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
                    className={ clsx ({
                      'border-error-2' : !isValidEmail,
                      'border-dark-1' : isValidEmail || isValidEmail == undefined  
                    },
                      'text-black text-base w-full py-3 px-4 rounded-lg border-[1.6px]')}
                    placeholder='Correo electrónico'
                    autoComplete='email'                    
                />
            </div>

            <button type="submit" className='bg-green-1 text-black text-base font-bold rounded-xl p-3'>Continuar</button>
            
            <div className=' relative'>
               <button className='bg-gray-1 text-black text-base font-bold rounded-xl p-3 w-full'>Crear Cuenta</button>
               <div className={ clsx({
                'hidden': isValidEmail !== false
              },   
              'text-error-1 italic text-sm text-center absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full')}>
                  <p>Usuario inexistente. Vuelve a intentarlo </p>
              </div>
            </div>

        </form>
    </>
  )
}
