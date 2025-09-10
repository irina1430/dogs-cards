import { create } from "zustand";
import { Dog } from "@/utils/fetchDogs";

interface DogStore {
  dogs: Dog[];
  addDog: (dog: Dog) => void;
  removeDog: (id: string) => void;
  toggleLike: (id: string) => void;
  setDogs: (dogs: Dog[]) => void;
}

export const useDogStore = create<DogStore>((set) => ({
  dogs: [],
  addDog: (dog) => set((state) => ({ dogs: [...state.dogs, dog] })),
  removeDog: (id) =>
    set((state) => ({ dogs: state.dogs.filter((d) => d.id !== id) })),
  toggleLike: (id) =>
    set((state) => ({
      dogs: state.dogs.map((d) =>
        d.id === id ? { ...d, liked: !d.liked } : d
      ),
    })),
  setDogs: (dogs) => set({ dogs }),
}));
