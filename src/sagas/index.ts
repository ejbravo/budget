import { SagaMiddleware } from "@redux-saga/core";
// import * as testSage from "./testSaga";
import * as entriesSaga from "./entriesSaga";

function initSagas(sagaMiddleware: SagaMiddleware) {
  Object.values(entriesSaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware) as any
  );
}

export { initSagas };
