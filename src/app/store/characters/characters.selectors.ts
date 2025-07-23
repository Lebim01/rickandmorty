import { RootState } from "../rootReducer";

export const selectorCharactersState = (state: RootState) => state.characters;

export const selectorCharacters = (state: RootState) =>
  selectorCharactersState(state).items;
export const selectorCharactersLoading = (state: RootState) =>
  selectorCharactersState(state).loading;
export const selectorCharactersError = (state: RootState) =>
  selectorCharactersState(state).error;

export const selectorSelectedCharacter = (state: RootState) =>
  selectorCharactersState(state).selectedCharacter;
