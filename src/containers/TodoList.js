import React, { Component } from 'react'
// import { Grid, List } from '@material-ui/core/Button'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        const { todos } = this.props
         return (
            <div className="todo-list">
                {todos.map(todo => 
                    <TodoItem key={todo.id} todo={todo} />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, null)(TodoList)