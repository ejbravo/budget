import { SagaMiddleware } from '@redux-saga/core';
// import * as testSage from "./testSaga";
import * as entriesSaga from './entriesSaga';
import * as entriesSagaDeletion from './entriesSagaDeletion';
import * as entriesSagaAdd from './entriesSagaAdd';

function initSagas(sagaMiddleware: SagaMiddleware) {
  Object.values(entriesSaga).forEach(
    sagaMiddleware.run.bind(sagaMiddleware) as any
  );
  Object.values(entriesSagaDeletion).forEach(
    sagaMiddleware.run.bind(sagaMiddleware) as any
  );
  Object.values(entriesSagaAdd).forEach(
    sagaMiddleware.run.bind(sagaMiddleware) as any
  );
}

export { initSagas };
