import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <div className="todo-item" key={this.props.todo.id}>
                <span><h4>{this.props.todo.title}</h4><button>Complete</button></span>
            </div>
        );
    }
}

export default TodoItem;