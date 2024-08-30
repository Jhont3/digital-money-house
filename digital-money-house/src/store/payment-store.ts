import { create } from "zustand";

interface PaymentInfoState {
    paymentData: {
      id: number;
      selectedCardId: number;
      totalAmount: number;
    };
    setPaymentInfo: (data: Partial<PaymentInfoState['paymentData']>) => void;
    clearPaymentInfo: () => void;
}

const initialState: PaymentInfoState['paymentData'] = {
    id: 0,
    selectedCardId: 0,
    totalAmount: 0,
  };  

export const UsePaymentStore = create<PaymentInfoState>((set) => ({
    paymentData: initialState,
    setPaymentInfo: (data) => set((state) => ({
      paymentData: { ...state.paymentData, ...data },
    })),
    clearPaymentInfo: () => set(() => ({
      paymentData: initialState,
    })),
}));
