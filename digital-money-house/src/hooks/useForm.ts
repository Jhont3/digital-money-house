"use client"
import { ChangeEvent, useState } from 'react';

interface FormState {
    email: string;
    password: string;
    validationCode?: string;
  }

export const useFormC = ( initialForm : FormState ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}