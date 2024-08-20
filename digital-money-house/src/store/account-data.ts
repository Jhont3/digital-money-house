import { create } from 'zustand';

interface AccountState {
  accountData: {
    id: number;
    user_id: number;
    cvu: string;
    alias: string;
    available_amount: number;
  };
  setAccountInfo: (data: Partial<AccountState['accountData']>) => void;
  clearAccountInfo: () => void;
}

const initialState: AccountState['accountData'] = {
  id: 0,
  user_id: 0,
  cvu: '',
  alias: '',
  available_amount: 0,
};

export const useAccountStore = create<AccountState>((set) => ({
  accountData: initialState,
  setAccountInfo: (data) => set((state) => ({
    accountData: { ...state.accountData, ...data },
  })),
  clearAccountInfo: () => set(() => ({
    accountData: initialState,
  })),
}));
