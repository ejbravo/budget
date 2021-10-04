import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = () => {
  const storeMiddlewares = composeWithDevTools(applyMiddleware(...middlewares));
  const _store = createStore(reducers, storeMiddlewares);

  initSagas(sagaMiddleware);

  return _store;
};
