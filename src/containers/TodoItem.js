import React from 'react';
import { removeTodo, completeTodo } from '../store/actions/actionCreators'
import { connect } from 'react-redux'

export const TodoItem = ({todo, removeTodo, completeTodo}) => (

    <div className="todo-item" key={todo.id}>
        <span>
            <h4 style={(todo.completed) ? completedStyle : null}>{todo.title}</h4>
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </span>
    </div>
)  

const completedStyle = {
    textDecoration: 'line-through',
    color: 'red',
    fontStyle: 'italic'
};

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    completeTodo: (id) => dispatch(completeTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem);

// () => removeTodo(this.props.todo.id)