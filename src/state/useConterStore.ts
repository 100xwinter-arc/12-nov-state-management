import { create } from "zustand";

type CounterStore = {
  count: number;
  name: string;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// zutand
export const useCounterStore = create<CounterStore>(set => ({
    count: 0,
    name: "John",
    increment: () => set((state) => ({ count: state.count + 1})),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));
