import { create } from 'zustand';

interface UserState {
  userData: {
    id: number;
    dni: number;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    password: string;
  };
  setUserInfo: (data: Partial<UserState['userData']>) => void;
  clearUserInfo: () => void;
}

const initialState: UserState['userData'] = { 
    id: 0,
    dni: 0,
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    password: "******",     
};

export const useUserStore = create<UserState>((set) => ({
  userData: initialState,
  setUserInfo: (data) => set((state) => ({
    userData: { ...state.userData, ...data },
  })),
  clearUserInfo: () => set(() => ({
    userData: initialState,
  })),
}));
