"use client"
import { createContext, useState, useContext, ReactNode } from 'react';

interface SidebarProviderProps {
  children: ReactNode;
}

type SidebarContextValue = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export const useSideBarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error('useLogInContext must be used within a LogInProvider');
  return context;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen}}>
      {children}
    </SidebarContext.Provider>
  );
};
