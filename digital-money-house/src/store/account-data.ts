import { create } from 'zustand';

interface AccountState {
  accountData: {
    cvu: string;
  };
  setAccountInfo: (data: Partial<AccountState['accountData']>) => void;
  clearAccountInfo: () => void;
}

const initialState: AccountState['accountData'] = {
  cvu: '',
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
