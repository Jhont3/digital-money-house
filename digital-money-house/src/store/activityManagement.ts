import { Activity } from "@/interfaces";
import { create } from "zustand";

interface ActivitiesState {
    activities: Activity[];
    inputSearch: string;
    setInputSearch: (value: string) => void;
    setActivities: (newActivities: Activity[]) => void;
    clearCards: () => void;
}

export const useActivitiesManagement = create<ActivitiesState>((set) => ({
    activities: [],
    inputSearch: "",
    setInputSearch: (value) => set({inputSearch: value}),
    setActivities: (newActivities) => set({ activities: newActivities }),
    clearCards: () => set({ activities: [] }),
}));
