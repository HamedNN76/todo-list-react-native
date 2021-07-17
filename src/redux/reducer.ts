import { combineReducers } from 'redux';
import todoList from './modules/todoList';

const reducers = combineReducers({
  todoList,
});

export default reducers;
