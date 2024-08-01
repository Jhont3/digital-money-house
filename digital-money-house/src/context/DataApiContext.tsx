"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface DataApiProviderProps {
    children: ReactNode;    
}

type DataApiContextValues = {

};

const DataAPIContext = createContext<DataApiContextValues | undefined>(undefined)

export const useDataAPIContext = () => {
    const context = useContext(DataAPIContext);
    if (!context) throw new Error('DataAPIContext must be used within a DataAPIProvider');
    return context;
}


export const DataAPIProvider = ({ children }: DataApiProviderProps) => {

    const [cards, setCards] = useState([]);
    const [transferences, setTransferences] = useState([])
    const [deposits, setDeposits] = useState([])
    
  
    return (
      <DataAPIContext.Provider value={{  }}>
        {children}
      </DataAPIContext.Provider>
    );
  };
  