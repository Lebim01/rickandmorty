import { all, fork } from "redux-saga/effects";
import { charactersSaga } from "./characters/characters.sagas";

export function* rootSaga() {
  yield all([fork(charactersSaga)]);
}
