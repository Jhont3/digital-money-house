"use client"
import { parseToken } from "@/utils";
import { ReactNode, createContext, useContext, useState } from "react"

interface LogInContextType {
    finalStateForm: {
      email: string;
      password: string;
    };
    setFinalForm: React.Dispatch<React.SetStateAction<{ email: string; password: string }>>;
    convertInfoToken: () => void;
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

    const [emailValidated, setEmailValidated] = useState(false)

    const convertInfoToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            const modUser = parseToken(token);
            setDataUser({
                username: modUser.username,
                email: modUser.email,
                exp: modUser.exp,
            });
            // TODO
            // localStorage.setItem("rol", modUser.role);
            // localStorage.setItem("uid", modUser.id);
        } else {
            console.warn('No token found in localStorage');
        }
    };


    return (
        <LogInContext.Provider value={{finalStateForm, setFinalForm, convertInfoToken, dataUser, emailValidated, setEmailValidated }}>
            {children}
        </LogInContext.Provider>
    )
}

