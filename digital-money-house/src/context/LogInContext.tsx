"use client"
import { ReactNode, createContext, useContext, useState } from "react"

interface LogInContextType {
    finalStateForm: {
      email: string;
      password: string;
    };
    setFinalForm: React.Dispatch<React.SetStateAction<{ email: string; password: string }>>;
}

interface LogInProviderProps {
    children: ReactNode;
}


const LogInContext = createContext<LogInContextType | undefined>(undefined);


export const useLogInContext = () => {
    const context = useContext(LogInContext);
    if (!context) {
        throw new Error('useLogInContext must be used within a LogInProvider');
    }
    return context;
}

export const LogInProvider = ({ children }: LogInProviderProps) => {

    const [finalStateForm, setFinalForm] = useState({ 
        email: "",
        password: "",
    }) 

    return (
        <LogInContext.Provider value={{finalStateForm, setFinalForm}}>
            {children}
        </LogInContext.Provider>
    )
}

