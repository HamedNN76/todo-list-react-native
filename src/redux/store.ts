import { createStore, applyMiddleware, Middleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer';
import { name } from '../../package.json';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function configureStore() {
  const persistConfig = {
    key: `${name}-persist`,
    storage: AsyncStorage,
    whitelist: [],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const sagaMiddleware = createSagaMiddleware();

  const middlewares: Array<Middleware> = [sagaMiddleware];

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga, store);

  return { store, persistor };
}
