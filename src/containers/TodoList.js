import React from 'react'
import { List } from '@material-ui/core'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'

export const TodoList = ({todos}) => (
    <List className="todo-list">
        {todos.map(todo => 
            <TodoItem key={todo.id} todo={todo} />
        )}
    </List>
)

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps, null)(TodoList)