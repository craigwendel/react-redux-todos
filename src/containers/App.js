import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../store/actions/actionCreators';

import TodoList from './TodoList'
import AddNewTodo from './AddNewTodo'


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>These are the todos</h1>
                <AddNewTodo />
                <TodoList />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos())
})

export default connect(null, mapDispatchToProps)(App)

// export default App;
