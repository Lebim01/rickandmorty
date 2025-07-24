/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllRequested,
  getAllSucceeded,
  getAllFailed,
  searchSucceeded,
  searchFailed,
  searchRequested,
} from "./characters.slice";
import { Character } from "rickmortyapi";
import { fetchCharacters } from "@/app/api/characters.api";

type ApiResponse = { characters: Character[]; total: number };

function* handleGetAllCharacters() {
  try {
    const data: ApiResponse = yield call(fetchCharacters);
    const list: Character[] = data.characters ?? [];
    yield put(getAllSucceeded(list));
  } catch (err: any) {
    yield put(getAllFailed(err?.message ?? "Error desconocido"));
  }
}

function* handleSearchCharacters(action: { payload: string }) {
  const query = action.payload.trim();

  if (!query) {
    // Empty string
    yield put(searchSucceeded([]));
    return;
  }

  try {
    const res: ApiResponse = yield call(fetchCharacters, {
      search: query,
    });

    const list: Character[] = res.characters ?? [];
    yield put(searchSucceeded(list));
  } catch (err: any) {
    yield put(searchFailed(err?.message ?? "Error desconocido"));
  }
}

export function* charactersSaga() {
  yield takeLatest(getAllRequested.type, handleGetAllCharacters);
  yield takeLatest(searchRequested, handleSearchCharacters);
}
