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
        <h2 className='text-white pt-6 text-3xl'>Hola, ingresá tu email</h2>
        {/* <LoginForm/> */}
        <form onSubmit={onSubmit} className="text-white">
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={onInputChange}
                    className='text-black'
                />
            </div>

            <button type="submit">Continuar</button>
            <button >Crear Cuenta</button>
        </form>
    </>
  )
}
