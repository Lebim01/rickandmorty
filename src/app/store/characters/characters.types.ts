import { Character } from "rickmortyapi";

export interface CharactersState {
  items: Character[];
  loading: boolean;
  error: string | null;
  selectedCharacter: null | Character;
  selectedCharacterIndex: null | number;
  filterName: string | null;
  filteredItems: Character[];
}
