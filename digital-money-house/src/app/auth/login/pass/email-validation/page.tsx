
"use client"
import { useLogInContext } from '@/context';
import { useFormC } from '@/hooks';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';


export default function EmailValidationPage() {

  const { finalStateForm, setFinalForm, convertInfoToken, setEmailValidated } = useLogInContext();
  const { formState, onInputChange, onResetForm } = useFormC(finalStateForm);
  
  const [isValidCode, setIsValidCode] = useState<undefined | boolean>(undefined)

  const router = useRouter();

  const validateCode = (code: string): boolean => {
    return /^[a-zA-Z\d]{3,}$/.test(code);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(formState.validationCode)

      const code = formState?.validationCode ?? '';
      const codeValid = validateCode(code);
      setIsValidCode(codeValid);

      if (!codeValid) return;

      console.log(finalStateForm, "final state")

      const response = await fetch('https://digitalmoney.digitalhouse.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: finalStateForm.email,
          password: finalStateForm.password
        })
      });

   
      if (!response.ok) {
        throw new Error('Login failed');
      }

            
      if (code === "000") {
        setEmailValidated(true);
      } else {
        setEmailValidated(false);
        return;
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem("token", data.token);
      convertInfoToken();
      // TODO
      // localStorage.setItem("token-init-date", new Date().getTime());
      onResetForm();
      setFinalForm(  {
          email: "",
          password: "",
      });
      
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
      <h2 className='text-xl font-semibold text-white text-center -mt-[14vh] pb-6 md:-mt-[20vh] lg:-mt-[10vh]'>Ingresá el código de verificación</h2>
      <form onSubmit={onSubmit} className="text-white flex flex-col justify-center px-[10vw] gap-5  md:px-[30vw] lg:px-[36vw] lg:gap-4">
          <div>                
              <input
                  id='validationCode'
                  name='validationCode'
                  value={formState.validationCode ?? ""}
                  onChange={onInputChange}
                  className={ clsx ({
                    'border-dark-1' : isValidCode || isValidCode == undefined, 
                    'border-error-2' : isValidCode == false,
                  },
                  'text-black text-base w-full py-3 px-4 rounded-lg border-[1.6px]')} 
                  placeholder='Código'
                  autoComplete='current-password'
              />
          </div>
          
          <div className=' relative'>
              <button type="submit" className='bg-green-1 text-black text-base font-bold rounded-xl p-3 w-full'>Ingresar</button>
              <div className={ clsx({
                'hidden': isValidCode !== false
              },   
              'text-error-1 italic text-sm text-center absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full')}>
                  <p>Código incorrecto. Vuelve a intentarlo</p>
              </div>
          </div>
          <div className='p-3 text-black w-full'>-</div>
      </form>
    </>
  )
}
