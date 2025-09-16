"use client";

import { useParams } from "next/navigation";
import { useDogStore } from "@/store/dogStore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function DogDetailPage() {
  const { id } = useParams();
  const dog = useDogStore((state) => state.dogs.find((d) => d.id === id));

  if (!dog) return <p>The Dog Breed is not found</p>;

  return (
    <div className="flex justify-center items-center pt-10">
      <div className="p-6 rounded-lg shadow-md text-center border-gray-300 bg-[#F5F5F5] w-[500px]">
        <h1 className="text-3xl font-bold">{dog.name}</h1>
        <Image
          src={dog.image}
          alt={dog.name}
          width={500}
          height={400}
          className="h-auto object-contain mt-4 rounded mx-auto"
        />
        <p className="mt-4">
          <span className="font-bold">Description:</span> {dog.description}
        </p>
        <Link href="/">
          <Button className="mt-6 bg-[#4B0082] text-white  transform transition-transform duration-300 hover:scale-105">
            Back to Home page
          </Button>
        </Link>
      </div>
    </div>
  );
}
