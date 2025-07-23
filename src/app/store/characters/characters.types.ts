import { Character } from "rickmortyapi";

export interface CharactersState {
  items: Character[];
  loading: boolean;
  error: string | null;
}
