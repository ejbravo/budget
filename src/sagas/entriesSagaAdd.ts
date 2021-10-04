import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { types } from "../redux/actions/entryAction";
import { IEntry } from "../utils/interfaces";

export function* addEntrySaga() {
  yield takeLatest(types.ADD_ENTRY, addEntryToDB); // take + cancel + fork
}

function* addEntryToDB({ payload }: any) {
  console.log("add entry", payload);
  yield call(addEntry, payload);
  yield call(addEntryValue, payload);
  yield put({ type: types.ADD_ENTRY_RESULT, payload });
}

async function addEntry({ id, description }: IEntry) {
  await axios.post(`http://localhost:3001/entries`, { id, description });
}

async function addEntryValue({ id, value, isExpense }: IEntry) {
  await axios.post(`http://localhost:3001/values`, { id, value, isExpense });
}
