"use client"

import { useLogInContext } from "@/context"


export const LoginForm = () => {

  
  const { finalStateForm, setFinalForm } = useLogInContext();

  return (
    <div className="text-white">FORM</div>
  )
}

