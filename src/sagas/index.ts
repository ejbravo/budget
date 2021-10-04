import { SagaMiddleware } from "@redux-saga/core";
// import * as testSage from "./testSaga";
import * as entriesSaga from "./entriesSaga";
import * as entriesSagaDeletion from "./entriesSagaDeletion";
import * as entriesSagaAdd from "./entriesSagaAdd";

function initSagas(sagaMiddleware: SagaMiddleware) {
  Object.values(entriesSaga).forEach(
    <any>sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(entriesSagaDeletion).forEach(
    <any>sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(entriesSagaAdd).forEach(
    <any>sagaMiddleware.run.bind(sagaMiddleware)
  );
}

export { initSagas };
