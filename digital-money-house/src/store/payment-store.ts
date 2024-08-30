import { create } from "zustand";

interface PaymentInfoState {
    paymentData: {
      origin: string;
      destination: string;
      selectedCardId: number;
      totalAmount: string;
    };
    setPaymentInfo: (data: Partial<PaymentInfoState['paymentData']>) => void;
    clearPaymentInfo: () => void;
}

const initialState: PaymentInfoState['paymentData'] = {
    origin: '',
    destination: '',
    selectedCardId: 0,
    totalAmount: "",
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
