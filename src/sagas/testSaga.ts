import { delay, take, put, call } from "redux-saga/effects";

function* testSaga() {
  while (true) {
    console.log("Hi Sage");
    const state: Parameters<any> = yield take("TEST_MESSAGE");
    const a: Parameters<any> = yield call(double, 2);
    console.log(a);
    const b: Parameters<any> = yield double(3);
    console.log(b);
    console.log("Bye Saga", state);
  }
}

function* dispatchTest() {
  while (true) {
    yield delay(1000);
    yield put({ type: "TEST_MESSAGE", payload: 1000 });
  }
}

function double(number: number) {
  return number * 2;
}

export { testSaga, dispatchTest };
