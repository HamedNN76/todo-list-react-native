import { LOAD_TODO_LIST, watchGetTodoList } from './modules/todoList';
import { all, takeEvery } from 'redux-saga/effects';

export function* rootSaga() {
  yield all([takeEvery(LOAD_TODO_LIST, watchGetTodoList)]);
}
