
"use client"
import { useLogInContext } from '@/context';
import { useFormC } from '@/hooks';
import { FormEvent } from 'react';
// import { LoginForm } from './ui/LoginForm';


export default function LoginPassPage() {

  const { finalStateForm, setFinalForm } = useLogInContext();
  const { formState, onInputChange, onResetForm } = useFormC(finalStateForm);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // email validation
    // setFinalForm(formState);
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
                  className='text-black text-base w-full py-3 px-4 rounded-lg border-[1.6px] border-error-2'
                  placeholder='Contraseña'
                  autoComplete='on'
              />
          </div>

          <div className='relative'>
            <button type="submit" className='bg-green-1 text-black text-base font-bold rounded-xl p-3 w-full'>Ingresar</button>
            <div className='text-error-1 italic text-sm text-center absolute left-1/2 -bottom-10 transform -translate-x-1/2 w-full'>
                  <p>Contraseña incorrecta. Vuelve a intentarlo</p>
            </div>
          </div>

          <div className='p-3 text-black w-full'>-</div>
          
      </form>
    </>
  )
}
