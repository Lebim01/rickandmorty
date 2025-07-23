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
import { ApiResponse, Character, getCharacters, Info } from "rickmortyapi";

function* handleGetAllCharacters() {
  try {
    const data: ApiResponse<Info<Character[]>> = yield call(getCharacters);
    const list: Character[] = data.data.results ?? [];
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
    const res: ApiResponse<Info<Character[]>> = yield call(getCharacters, {
      name: query,
    });

    const list: Character[] = res.data.results ?? [];
    yield put(searchSucceeded(list));
  } catch (err: any) {
    yield put(searchFailed(err?.message ?? "Error desconocido"));
  }
}

export function* charactersSaga() {
  yield takeLatest(getAllRequested.type, handleGetAllCharacters);
  yield takeLatest(searchRequested, handleSearchCharacters);
}
