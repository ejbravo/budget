import { take, call, put, fork } from "redux-saga/effects";
import { setEntries, setEntryValue, types } from "../redux/actions/entryAction";
import axios from "axios";

export function* getAllEntries() {
  const { GET_ENTRIES } = types;
  yield take(GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3001/entries");
  yield put(setEntries(data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(types.SET_ENTRIES);

  for (let index: number = 0; index < payload.length; index++) {
    yield fork(getEntryDetails, payload[index].id);
  }
}

function* getEntryDetails(id: string) {
  const valuesUrl = `http://localhost:3001/values/${id}`;
  const { data: valueData } = yield call(axios, valuesUrl);
  yield put(setEntryValue(valueData));
}
