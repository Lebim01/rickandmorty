import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CharactersState } from "./characters.types";
import { Character } from "rickmortyapi";

const initialState: CharactersState = {
  items: [],
  loading: false,
  error: null,
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
  },
});

export const { getAllRequested, getAllSucceeded, getAllFailed } =
  charactersSlice.actions;

export default charactersSlice.reducer;
