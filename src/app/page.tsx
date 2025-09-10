"use client";

import { useEffect, useState } from "react";
import { useDogStore } from "@/store/dogStore";
import { fetchDogs } from "@/utils/fetchDogs";
import DogCard from "@/components/DogCard/DogCard";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { dogs, setDogs, toggleLike, removeDog } = useDogStore();
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    fetchDogs().then(setDogs);
  }, [setDogs]);

  const filteredDogs = showFavorites ? dogs.filter((dog) => dog.liked) : dogs;

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Button
          className="hover:bg-[#E6E6FA] transform transition-transform duration-300 hover:scale-105"
          variant="outline"
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? "Показать все" : "Показать избранное"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredDogs.map((dog) => (
          <DogCard
            key={dog.id}
            dog={dog}
            toggleLike={toggleLike}
            removeDog={removeDog}
          />
        ))}
      </div>
    </div>
  );
}
