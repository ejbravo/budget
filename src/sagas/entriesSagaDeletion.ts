import axios from "axios";
import { take, call, put } from "redux-saga/effects";
import { types } from "../redux/actions/entryAction";

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(types.DELETE_ENTRY); // payload = id
    yield call(deleteEntry, payload);
    yield put({ type: types.DELETE_ENTRY_RESULT, payload });
  }
}

function deleteEntry(id: string): void {
  axios.delete(`http://localhost:3001/entries/${id}`);
  axios.delete(`http://localhost:3001/values/${id}`);
}
