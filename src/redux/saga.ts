import { all } from 'redux-saga/effects';
import { Store } from '../types/types';

export function* rootSaga(store: Store) {
  yield all([]);
}
