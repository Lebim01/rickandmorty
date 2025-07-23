import { RootState } from "../rootReducer";

export const selectCharactersState = (state: RootState) => state.characters;

export const selectCharacters = (state: RootState) =>
  selectCharactersState(state).items;
export const selectCharactersLoading = (state: RootState) =>
  selectCharactersState(state).loading;
export const selectCharactersError = (state: RootState) =>
  selectCharactersState(state).error;
