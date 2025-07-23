import { RootState } from "../rootReducer";

export const selectorCharactersState = (state: RootState) => state.characters;

export const selectorCharacters = (state: RootState) => {
  const { filterName, items, filteredItems } = selectorCharactersState(state);
  return filterName ? filteredItems : items;
};
export const selectorCharactersLoading = (state: RootState) =>
  selectorCharactersState(state).loading;
export const selectorCharactersError = (state: RootState) =>
  selectorCharactersState(state).error;

export const selectorSelectedCharacter = (state: RootState) =>
  selectorCharactersState(state).selectedCharacter;

export const selectorIsFavorite = (id: number) => (state: RootState) =>
  selectorCharactersState(state).favorites.includes(id);
