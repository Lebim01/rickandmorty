import { combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "./characters/characters.slice";

export const rootReducer = combineReducers({
  characters: charactersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
