import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CharactersState } from "./characters.types";
import { Character } from "rickmortyapi";
import { selectorCharacters } from "./characters.selectors";

const initialState: CharactersState = {
  items: [],
  loading: false,
  error: null,
  selectedCharacter: null,
  selectedCharacterIndex: null,
  filterName: null,
  filteredItems: [],
  favorites: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getAllRequested(state) {
      state.loading = true;
      state.error = null;
    },
    getAllSucceeded(state, action: PayloadAction<Character[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    getAllFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // Feat: select character
    selectCharacter(
      state,
      action: PayloadAction<{ character: Character; index: number }>
    ) {
      state.selectedCharacter = action.payload.character;
      state.selectedCharacterIndex = action.payload.index;
    },
    resetSelectedCharacter(state) {
      state.selectedCharacter = null;
      state.selectedCharacterIndex = null;
    },

    // Feat: filter by name
    searchRequested(state, action: PayloadAction<string>) {
      state.filterName = action.payload;
      state.loading = true;
      state.error = null;
      state.selectedCharacter = null;
      state.selectedCharacterIndex = null;
    },
    searchSucceeded(state, action: PayloadAction<Character[]>) {
      state.loading = false;
      state.filteredItems = action.payload;
    },
    searchFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.filteredItems = [];
      state.error = action.payload;
    },

    // Feat: favorites
    // dispatch(setFavorite(character))
    setFavorite(state, action: PayloadAction<Character>) {
      const find = state.favorites.find((c) => c.id == action.payload.id);
      if (!find) {
        state.favorites.push(action.payload);
      }
    },
    // dispatch(removeFavorite(characterId))
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter((c) => c.id != action.payload);
    },

    // Feat: navigation arrows
    nextCharacter(state) {
      if (state.selectedCharacterIndex != null) {
        const characters = selectorCharacters({ characters: state });
        const newindex = state.selectedCharacterIndex + 1;
        if (characters.length > newindex) {
          state.selectedCharacter = characters[newindex];
          state.selectedCharacterIndex = newindex;
        }
      }
    },
    prevCharacter(state) {
      if (
        state.selectedCharacterIndex != null &&
        state.selectedCharacterIndex > 0
      ) {
        const newindex = state.selectedCharacterIndex - 1;
        const characters = selectorCharacters({ characters: state });
        state.selectedCharacter = characters[newindex];
        state.selectedCharacterIndex = newindex;
      }
    },
  },
});

export const {
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
} = charactersSlice.actions;

export default charactersSlice.reducer;
