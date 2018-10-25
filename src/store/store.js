import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import todosReducer from './reducers/todosReducer'
import watchTodos from './sagas/todoSagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// mount it on the Store
export default () => {
    const store = createStore(
        todosReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    // then run the saga
    sagaMiddleware.run(watchTodos)

    return store
}



