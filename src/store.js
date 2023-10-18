import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer'; // Create your reducers
import userSaga from './sagas/userSaga'; // Create your sagas

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, // Your combined reducers
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga); // Run your root saga

//const store = createStore(rootReducer);

export default store;