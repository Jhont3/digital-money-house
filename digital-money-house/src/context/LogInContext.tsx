"use client"
import { parseToken } from "@/utils";
import { ReactNode, createContext, useContext, useState } from "react"

interface LogInContextType {
    finalStateForm: {
      email: string;
      password: string;
    };
    setFinalForm: React.Dispatch<React.SetStateAction<{ email: string; password: string }>>;
    dataUser: {
        username: string;
        email: string;
        exp: string;
    };
    emailValidated: boolean;
    setEmailValidated: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LogInProviderProps {
    children: ReactNode;
}

const initialDataTokenUser = {
    username: "",
    email: "",
    exp: "",
  };


const LogInContext = createContext<LogInContextType | undefined>(undefined);


export const useLogInContext = () => {
    const context = useContext(LogInContext);
    if (!context) {
        throw new Error('useLogInContext must be used within a LogInProvider');
    }
    return context;
}

export const LogInProvider = ({ children }: LogInProviderProps) => {

    const [dataUser, setDataUser] = useState(initialDataTokenUser)

    const [finalStateForm, setFinalForm] = useState({ 
        email: "",
        password: "",
    }) 

    const [emailValidated, setEmailValidated] = useState(true)

    return (
        <LogInContext.Provider value={{finalStateForm, setFinalForm, dataUser, emailValidated, setEmailValidated }}>
            {children}
        </LogInContext.Provider>
    )
}

