import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters/characters.slice";

export const rootReducer = combineReducers({
  characters: charactersReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>