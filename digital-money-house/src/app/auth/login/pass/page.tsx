
"use client"
import { useLogInContext } from '@/context';
import { useFormC } from '@/hooks';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';


export default function LoginPassPage() {

  const { finalStateForm, convertInfoToken } = useLogInContext();
  const { formState, onInputChange, onResetForm } = useFormC(finalStateForm);
  
  const [isValidPass, setIsValidPass] = useState<undefined | boolean>(undefined)

  const router = useRouter();

  const validatePassword = (password: string): boolean => {
    return /^(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
         
      const passValid = validatePassword(formState.password);
      setIsValidPass(passValid);

      if (!passValid) return;

      const response = await fetch('https://digitalmoney.digitalhouse.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: finalStateForm.email,
          password: formState.password
        })
      });

   
      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem("token", data.token);
      convertInfoToken();
      // TODO
      // localStorage.setItem("token-init-date", new Date().getTime());
      onResetForm();
      router.push(`/`);

    } catch (error) {
      console.error('Error during login:', error);
    }

    console.log(formState, "form state")
    console.log(finalStateForm, "final state")
    onResetForm();
  }

  return (
    <>
      <h2 className='text-xl font-semibold text-white text-center -mt-[14vh] pb-6'>Ingresá tu contraseña</h2>
      <form onSubmit={onSubmit} className="text-white flex flex-col justify-center px-[10vw] gap-5">
          <div>                
              <input
                  id='password'
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={onInputChange}
                  className={ clsx ({
                    'border-dark-1' : isValidPass || isValidPass == undefined, 
                    'border-error-2' : isValidPass == false,
                  },
                  'text-black text-base w-full py-3 px-4 rounded-lg border-[1.6px]')} 
                  placeholder='Contraseña'
                  autoComplete='current-password'
              />
          </div>
          
          <div className=' relative'>
              <button type="submit" className='bg-green-1 text-black text-base font-bold rounded-xl p-3 w-full'>Ingresar</button>
              <div className={ clsx({
                'hidden': isValidPass !== false
              },   
              'text-error-1 italic text-sm text-center absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full')}>
                  <p>Contraseña incorrecta. Vuelve a intentarlo</p>
              </div>
          </div>
          <div className='p-3 text-black w-full'>-</div>
      </form>
    </>
  )
}
