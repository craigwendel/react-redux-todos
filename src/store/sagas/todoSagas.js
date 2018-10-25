import { call, put, takeEvery } from 'redux-saga/effects'
import actions from '../actions/actionTypes'
import Api from '../../api/Api'

export function* fetchTodosSaga(action) {
   try {
      const response = yield call(Api.fetchTodos)
      const todos = response.json()
      yield put({ type: actions.FETCH_TODOS_COMPLETED, todos: todos });
      console.log('fetching')
   } catch (error) {
      yield put({type: actions.FETCH_TODOS_ERROR, message: error.message});
   }
}

export function* addNewTodoSaga(action) {
	try {
		const response = yield Api.addNewTodo(action.todo)
		const todos = yield response.json();
		yield put({ type: actions.ADD_TODO_COMPLETED });
		yield put({ type: actions.FETCH_TODOS_COMPLETED, todos: todos })
	} catch (error) {
		yield put({ type: actions.ADD_TODO_ERROR, message: error.message })
	}
}

export function* removeTodoSaga(action) {
	try {
		const response = yield Api.deleteTodo(action.id)
		const todos = yield response.json()
		yield put({ type: actions.REMOVE_TODO_COMPLETED })
		yield put({ type: actions.FETCH_TODOS_COMPLETED, todos: todos })
	} catch (error) {
		yield put({ type: actions.REMOVE_TODO_ERROR, message: error.message })
	}
}

export function* completeTodoSaga(action) {
    try {
        const response = yield Api.completeTodo(action.id)
        const todos = yield response.json()
        yield put({ type: actions.COMPLETE_TODO_COMPLETED })
        yield put({ type: actions.FETCH_TODOS_COMPLETED, todos: todos })
    } catch (error) {
        yield put({ type: actions.COMPLETE_TODO_ERROR, message: error.message })
    }
}





export default function* watchTodos() {
    yield takeEvery(actions.FETCH_TODOS_START, fetchTodosSaga)
    yield takeEvery(actions.ADD_TODO_START, addNewTodoSaga)
    yield takeEvery(actions.REMOVE_TODO_START, removeTodoSaga)
    yield takeEvery(actions.COMPLETE_TODO_START, completeTodoSaga)
};