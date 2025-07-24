import { Character } from "rickmortyapi";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export interface FetchParams {
  search?: string;
}

/** GET /characters (paginado + filtro por nombre) */
export async function fetchCharacters({
  search = "",
}: FetchParams = {}): Promise<{ characters: Character[]; total: number }> {
  const res = await fetch(`${BASE_URL}/characters`);

  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const characters: Character[] = await res.json();

  const filtered = search
    ? characters.filter((r) =>
        r.name.toLowerCase().includes(search.toLocaleLowerCase().trim())
      )
    : characters;

  return { characters: filtered, total: filtered.length };
}
