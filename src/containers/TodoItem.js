import React, { Component } from 'react';
import { removeTodo, completeTodo } from '../store/actions/actionCreators'
import { connect } from 'react-redux'

class TodoItem extends Component {

    handleRemove = () => {
        this.props.removeTodo(this.props.todo.id)
    }

    handleComplete = () => {
        this.props.completeTodo(this.props.todo.id)
    }
 
    render() {
        return (
            <div className="todo-item" key={this.props.todo.id}>
                <span>
                    <h4 style={(this.props.todo.completed) ? completedStyle : null}>{this.props.todo.title}</h4>
                    <button onClick={this.handleComplete}>Complete</button>
                    <button onClick={this.handleRemove}>Delete</button>
                </span>
            </div>
        );
    }
}

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