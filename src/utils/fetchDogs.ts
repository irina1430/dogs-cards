export interface Dog {
  id: string;
  name: string;
  image: string | null;
  description: string;
  liked: boolean;
}

interface DogApiResponse {
  id: number;
  name: string;
  image?: { url: string };
  temperament?: string;
}

export async function fetchDogs(limit = 21): Promise<Dog[]> {
  try {
    const res = await fetch(
      `https://api.thedogapi.com/v1/breeds?limit=${limit}`,
      {
        headers: {
          "x-api-key":
            "live_3TkzSEZYRQmhTPY45dTtax1rhB2I4FEscr3P0KFxjIn6FLEPFaHNdUqHcybDxDcB",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data: DogApiResponse[] = await res.json();

    return data.map((dog) => ({
      id: dog.id.toString(),
      name: dog.name,
      image: dog.image?.url ?? null,
      description: dog.temperament ?? "No description available",
      liked: false,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}
