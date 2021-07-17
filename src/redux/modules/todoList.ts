import { toast } from './../../utils/alert';
import { TTodoListData } from './../../types/webServices/todoList';
import { fetch } from '../../utils/fetch';
import { put } from 'redux-saga/effects';

export type TodoListAction = {
  type: string;
  category?: number;
  data?: TTodoListData;
  error?: any;
};

export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const loadTodoList = (category?: number) => ({
  type: LOAD_TODO_LIST,
  category,
});

export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS';
export const loadTodoSuccess = (data: TTodoListData) => ({
  type: LOAD_TODO_SUCCESS,
  data,
});

export const LOAD_TODO_FAILURE = 'LOAD_TODO_FAILURE';
export const loadTodoFailure = (error: any) => ({
  type: LOAD_TODO_FAILURE,
  error,
});

export type TodoListInitialState = {
  loading: boolean;
  data: TTodoListData | null;
  error: any;
  form: any;
};
export const todoListInitialState: TodoListInitialState = {
  loading: false,
  data: null,
  error: null,
  form: null,
};

export default function reducer(
  state: TodoListInitialState = todoListInitialState,
  action: TodoListAction
): TodoListInitialState {
  switch (action.type) {
    case LOAD_TODO_LIST:
      return {
        ...state,
        loading: true,
        form: action.category,
      };
    case LOAD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data || null,
      };
    case LOAD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function* watchGetTodoList({ category }: TodoListAction) {
  try {
    const res: TTodoListData = yield fetch('todoList.get', {
      params: { category },
    });
    yield put(loadTodoSuccess(res));
  } catch (e) {
    yield put(loadTodoFailure(e));
    toast(e.message);
  }
}
