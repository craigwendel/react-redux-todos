import { call, put, takeEvery } from 'redux-saga/effects'
import Api from '../../api/Api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchTodos(action) {
   try {
      const todos = yield call(Api.fetchTodos);
      yield put({type: "TODOS_FETCH_SUCCEEDED", todos: todos});
   } catch (e) {
      yield put({type: "TODOS_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

export default function* watchTodos() {
    yield takeEvery("TODOS_FETCH_REQUESTED", fetchTodos);
};