import { SagaMiddleware } from "@redux-saga/core";
import * as testSage from "./testSaga";

function initSagas(sagaMiddleware: SagaMiddleware) {
  Object.values(testSage).forEach(
    sagaMiddleware.run.bind(sagaMiddleware) as any
  );
}

export { initSagas };
