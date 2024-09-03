"use client"
import { createContext, useState, useContext, ReactNode } from 'react';

interface FilterModalProviderProps {
  children: ReactNode;
}

type FilterModalContextValue = {
  isFilterModalOpen: boolean;
  setIsFilterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterModalContext = createContext<FilterModalContextValue | undefined>(undefined);

export const useFilterModalContext = () => {
  const context = useContext(FilterModalContext);
  if (!context) throw new Error('FilterModalContext must be used within a FilterModalProvider');
  return context;
}

export const FilterModalProvider = ({ children }: FilterModalProviderProps) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <FilterModalContext.Provider value={{ isFilterModalOpen, setIsFilterModalOpen}}>
      {children}
    </FilterModalContext.Provider>
  );
};
