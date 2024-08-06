import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface TokenState {
  token: string ;
  setToken: (newToken: string) => void;
}

type MyPersist = (
  config: (set: any, get: any, api: any) => TokenState,
  options: PersistOptions<TokenState>
) => (set: any, get: any, api: any) => TokenState;

const useTokenStore = create<TokenState>(
  (persist as MyPersist)(
    (set, get) => ({
      token: '',
      setToken: (newToken) => set({ token: newToken }),
    }),
    {
      name: 'token',
    }
  )
);

export default useTokenStore;