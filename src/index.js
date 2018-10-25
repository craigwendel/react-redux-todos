import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';

import configureStore from './store/store'
import { fetchTodos } from './store/actions/actionCreators';

const store  = configureStore()

const initialFetch = () => {
    store.dispatch(fetchTodos())
}

initialFetch()


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

