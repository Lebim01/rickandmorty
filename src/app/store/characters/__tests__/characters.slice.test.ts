/* eslint-disable @typescript-eslint/no-explicit-any */
import reducer, {
  getAllRequested,
  getAllSucceeded,
  getAllFailed,
  selectCharacter,
  resetSelectedCharacter,
  searchRequested,
  searchSucceeded,
  searchFailed,
  setFavorite,
  removeFavorite,
  nextCharacter,
  prevCharacter,
} from "../characters.slice";
import type { CharactersState } from "../characters.types";
import type { Character } from "rickmortyapi";

const init = (): CharactersState =>
  reducer(undefined, { type: "@@INIT" } as any);

const char1: Character = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
} as Character;

const char2: Character = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
} as Character;

describe("characters slice", () => {
  /* --------------------------------FETCH-------------------------------- */
  describe("fetch list flow", () => {
    it("getAllRequested → set loading true", () => {
      const state = reducer(init(), getAllRequested());
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it("getAllSucceeded → items list & loading false", () => {
      const state = reducer(
        { ...init(), loading: true },
        getAllSucceeded([char1, char2])
      );
      expect(state.items).toEqual([char1, char2]);
      expect(state.loading).toBe(false);
    });

    it("getAllFailed → error stored", () => {
      const state = reducer(
        { ...init(), loading: true },
        getAllFailed("Boom!")
      );
      expect(state.error).toBe("Boom!");
      expect(state.loading).toBe(false);
    });
  });

  /* --------------------------------SELECT CHARACTER-------------------------------- */
  describe("select / reset character", () => {
    it("selectCharacter guarda character e index", () => {
      const state = reducer(
        { ...init(), items: [char1, char2] },
        selectCharacter({ character: char2, index: 1 })
      );
      expect(state.selectedCharacter).toBe(char2);
      expect(state.selectedCharacterIndex).toBe(1);
    });

    it("resetSelectedCharacter vacía selección", () => {
      const selected = {
        ...init(),
        selectedCharacter: char1,
        selectedCharacterIndex: 0,
      };
      const state = reducer(selected, resetSelectedCharacter());
      expect(state.selectedCharacter).toBeNull();
      expect(state.selectedCharacterIndex).toBeNull();
    });
  });

  /* --------------------------------FILTERS-------------------------------- */
  describe("filter flow", () => {
    it("searchRequested → loading true y limpia selección", () => {
      const base = {
        ...init(),
        selectedCharacter: char1,
        selectedCharacterIndex: 0,
      };
      const state = reducer(base, searchRequested("rick"));
      expect(state.loading).toBe(true);
      expect(state.filterName).toBe("rick");
      expect(state.selectedCharacter).toBeNull();
    });

    it("searchSucceeded → llena filteredItems", () => {
      const state = reducer(
        { ...init(), loading: true },
        searchSucceeded([char1])
      );
      expect(state.filteredItems).toEqual([char1]);
      expect(state.loading).toBe(false);
    });

    it("searchFailed → limpia filteredItems y setea error", () => {
      const state = reducer(
        { ...init(), loading: true, filteredItems: [char1] },
        searchFailed("Not found")
      );
      expect(state.filteredItems).toEqual([]);
      expect(state.error).toBe("Not found");
      expect(state.loading).toBe(false);
    });
  });

  /* --------------------------------FAVORITES-------------------------------- */
  describe("favorites", () => {
    it("setFavorite agrega si no existe", () => {
      const state = reducer(init(), setFavorite(char1));
      expect(state.favorites).toEqual([char1]);
    });

    it("setFavorite ignora duplicados", () => {
      const state = reducer(
        { ...init(), favorites: [char1] },
        setFavorite(char1)
      );
      expect(state.favorites).toHaveLength(1);
    });

    it("removeFavorite elimina por id", () => {
      const state = reducer(
        { ...init(), favorites: [char1, char2] },
        removeFavorite(1)
      );
      expect(state.favorites).toEqual([char2]);
    });
  });

  /* --------------------------------NAVIGATION ARROWS-------------------------------- */
  describe("navigation arrows", () => {
    const base = {
      ...init(),
      items: [char1, char2],
      filteredItems: [], // sin filtro
      selectedCharacter: char1,
      selectedCharacterIndex: 0,
    };

    it("nextCharacter avanza si hay siguiente", () => {
      const state = reducer(base, nextCharacter());
      expect(state.selectedCharacter).toBe(char2);
      expect(state.selectedCharacterIndex).toBe(1);
    });

    it("nextCharacter no avanza si ya es el último", () => {
      const last = {
        ...base,
        selectedCharacter: char2,
        selectedCharacterIndex: 1,
      };
      const state = reducer(last, nextCharacter());
      expect(state.selectedCharacterIndex).toBe(1);
    });

    it("prevCharacter retrocede si index > 0", () => {
      const first = reducer(base, nextCharacter());
      const state = reducer(first, prevCharacter());
      expect(state.selectedCharacterIndex).toBe(0);
      expect(state.selectedCharacter).toBe(char1);
    });

    it("prevCharacter no retrocede si index = 0", () => {
      const state = reducer(base, prevCharacter());
      expect(state.selectedCharacterIndex).toBe(0);
    });
  });
});
