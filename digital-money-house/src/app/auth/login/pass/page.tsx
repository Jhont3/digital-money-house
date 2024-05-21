
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
        <h2 className='text-white pt-6 text-3xl'>Ingresá tu contraseña</h2>
        {/* <LoginForm/> */}
        <form onSubmit={onSubmit} className="text-white">
            <div className='text-black'>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={onInputChange}
                />
            </div>

            <button type="submit">Ingresar</button>
        </form>
    </>
  )
}
