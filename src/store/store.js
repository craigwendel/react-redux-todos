import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

import todosReducer from './reducers/todosReducer'
// import watchTodos from './sagas/todoSagas';

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  todosReducer
//   applyMiddleware(sagaMiddleware)
)

// then run the saga
// sagaMiddleware.run(watchTodos)

export default store
