// import { call, put, takeEvery } from 'redux-saga/effects'
// import Api from '../../api/Api'

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// export function* fetchTodosSaga(action) {
//    try {
//       const response = yield call(Api.fetchTodos);
//       const todos = response.json()
//       yield put({type: "FETCH_TODOS_COMPLETED", todos: todos});
//       console.log('fetching')
//    } catch (e) {
//       yield put({type: "FETCH_TODOS_ERROR", message: e.message});
//    }
// }

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */

// export default function* watchTodos() {
//     yield takeEvery("FETCH_TODOS_START", fetchTodosSaga);
// };