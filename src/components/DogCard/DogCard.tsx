"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dog } from "@/utils/fetchDogs";
import { Heart, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface DogCardProps {
  dog: Dog;
  toggleLike: (id: string) => void;
  removeDog: (id: string) => void;
}

export default function DogCard({ dog, toggleLike, removeDog }: DogCardProps) {
  const router = useRouter();

  return (
    <Card
      className="relative overflow-hidden flex flex-col items-center bg-[#F5F5F5] hover:shadow-lg hover:bg-[#E6E6FA] cursor-pointer] h-[400px]"
      onClick={() => router.push(`/${dog.id}`)}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
        onClick={(e) => {
          e.stopPropagation();
          removeDog(dog.id);
        }}
      >
        <X className="h-4 w-4" />
      </Button>
      <h2>
        <CardTitle>{dog.name}</CardTitle>
      </h2>
      <Image
        src={dog.image || "/placeholder.jpg"}
        alt={dog.name}
        width={300}
        height={400}
        className="h-48 object-contain"
      />

      <CardDescription className="px-4 text-center text-[14px] line-clamp-1">
        <span className="font-bold">Description:</span> {dog.description}
      </CardDescription>

      <CardFooter className=" flex gap-2 w-full px-4">
        <Button
          variant={dog.liked ? "default" : "ghost"}
          size="lg"
          className="mx-auto"
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(dog.id);
          }}
        >
          <Heart
            className={`h-4 w-4 ${
              dog.liked ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
