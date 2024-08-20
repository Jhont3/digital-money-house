import { CardData } from "@/interfaces";
import { create } from "zustand";

interface AccountCardsState {
    cards: CardData[];
    setCards: (newCards: CardData[]) => void;
    addCard: (newCard: CardData) => void;
    updateCard: (id: number, updatedCard: Partial<CardData>) => void;
    removeCard: (id: number) => void;
    clearCards: () => void;
}

export const useAccountCardsStore = create<AccountCardsState>((set) => ({
    cards: [],
    setCards: (newCards) => set({ cards: newCards }),
    addCard: (newCard) => set((state) => ({ cards: [...state.cards, newCard] })),
    updateCard: (id, updatedCard) =>
        set((state) => ({
        cards: state.cards.map((card) =>
            card.id === id ? { ...card, ...updatedCard } : card
        ),
        })),
    removeCard: (id) =>
        set((state) => ({
        cards: state.cards.filter((card) => card.id !== id),
        })),
    clearCards: () => set({ cards: [] }),
}));
