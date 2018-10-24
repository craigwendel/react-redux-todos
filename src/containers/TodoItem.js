import React, { Component } from 'react';
import { removeTodo } from '../store/actions/actionCreators'
import { connect } from 'react-redux'

class TodoItem extends Component {

    handleRemove = () => {
        this.props.removeTodo(this.props.todo.id)
    }

    render() {
        return (
            <div className="todo-item" key={this.props.todo.id}>
                <span>
                    <h4>{this.props.todo.title}</h4>
                    <button>Complete</button>
                    <button onClick={this.handleRemove}>Delete</button>
                </span>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem);

// () => removeTodo(this.props.todo.id)