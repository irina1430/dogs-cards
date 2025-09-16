"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Dog } from "@/utils/fetchDogs";

interface DogStore {
  dogs: Dog[];
  addDog: (dog: Dog) => void;
  removeDog: (id: string) => void;
  toggleLike: (id: string) => void;
  setDogs: (dogs: Dog[] | ((prevDogs: Dog[]) => Dog[])) => void;
}

export const useDogStore = create<DogStore>()(
  persist(
    (set) => ({
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
      setDogs: (dogsOrFn) =>
        set((state) => ({
          dogs:
            typeof dogsOrFn === "function" ? dogsOrFn(state.dogs) : dogsOrFn,
        })),
    }),
    { name: "dog-storage" }
  )
);
