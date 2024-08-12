import { create } from 'zustand';

interface AccountState {
  userData: {
    id: number;
    user_id: number;
    cvu: string;
    alias: string;
    available_amount: number;
  };
  setAccountInfo: (data: Partial<AccountState['userData']>) => void;
  clearAccountInfo: () => void;
}

const initialState: AccountState['userData'] = {
  id: 0,
  user_id: 0,
  cvu: '',
  alias: '',
  available_amount: 0,
};

export const useAccountStore = create<AccountState>((set) => ({
  userData: initialState,
  setAccountInfo: (data) => set((state) => ({
    userData: { ...state.userData, ...data },
  })),
  clearAccountInfo: () => set(() => ({
    userData: initialState,
  })),
}));

