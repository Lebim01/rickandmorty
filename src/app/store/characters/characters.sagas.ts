/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getAllRequested,
  getAllSucceeded,
  getAllFailed,
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

export function* charactersSaga() {
  yield takeLatest(getAllRequested.type, handleGetAllCharacters);
}
