"use client";

import { useState } from "react";
import { useDogStore } from "@/store/dogStore";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function AddDogPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const addDog = useDogStore((state) => state.addDog);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (desc.trim().length < 10) {
      alert("Description must be at least 10 characters");
      return;
    }

    addDog({ id: uuidv4(), name, image, description: desc, liked: false });
    router.push("/");
  };

  return (
    <Card className="max-w-xl mx-auto mt-6 shadow-md">
      <CardHeader>
        <CardTitle>🐶 Add a new dog breed</CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            placeholder="Breed Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus-visible:ring-[#4B0082] focus-visible:ring-2 transition-colors duration-300"
            required
          />
          <Input
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="focus-visible:ring-[#4B0082] focus-visible:ring-2 transition-colors duration-300"
            required
          />
          <Textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="focus-visible:ring-[#4B0082] focus-visible:ring-2 transition-colors duration-300"
            required
          />
        </CardContent>

        <CardFooter className="flex justify-center pt-5">
          <Button
            type="submit"
            className="bg-[#4B0082] text-white transform transition-transform duration-300 hover:scale-105 hover:bg-[#6A5ACD]"
          >
            Add Breed
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
