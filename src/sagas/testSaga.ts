import { Task } from "@redux-saga/types";
import {
  delay,
  take,
  put,
  call,
  fork,
  takeEvery,
  cancel,
  cancelled,
  takeLatest,
} from "redux-saga/effects";

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

export function* testSagaFork() {
  while (true) {
    yield take("TEST_MESSAGE_2");
    yield call(doNothing); // call wait for the result
    yield call(doNothing);
    yield call(doNothing);
    yield fork(doNothing); // fork is asyncronoush (parallel)
    yield fork(doNothing);
    yield fork(doNothing);
  }
}

function* testSagaTakeEveryProcess({ payload }: any) {
  console.log(`Starting Process for index ${payload}`);
  yield delay(3000);
  console.log(`Ending process for index ${payload}`);
}

function* testSagaTakeEvery() {
  const { payload } = yield takeEvery(
    "TEST_MESSAGE_3",
    testSagaTakeEveryProcess
  );
  console.log(`Finish takeEvery for index ${payload}`);
}

function* infinitySaga() {
  console.log("Starting infinity Saga");
  let index = 0;

  while (true) {
    index++;
    try {
      console.log(`Inside infinity loop: ${index}`);
      yield delay(1000);
    } catch (error) {
      console.error(error);
    } finally {
      const isCancelled: Parameters<any> = yield cancelled();
      console.log("The fork was cancelled?", isCancelled);
    }
  }
  // console.log("Ending infinity Saga");
}

export function* testSagaCancelled() {
  yield take("TEST_MESSAGE_4");
  const handleCancel: Task = yield fork(infinitySaga);
  yield delay(3000);
  yield cancel(handleCancel);
}

export function* testSagaTakeLatest() {
  yield takeLatest("TEST_MESSAGE_5", infinitySaga);
}

function* dispatchTest() {
  let index = 0;
  /*
  
  yield put({ type: "TEST_MESSAGE_4", payload: index });
  */

  while (true) {
    yield delay(5000);
    yield put({ type: "TEST_MESSAGE_5", payload: index });
    index++;
  }
}

function double(number: number) {
  return number * 2;
}

function* doNothing() {
  console.log("I have been called by fork");
  yield delay(1000);
  console.log("I am doing nothing");
}

export { testSaga, dispatchTest, testSagaTakeEvery, testSagaTakeEveryProcess };
