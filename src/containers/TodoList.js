import React, { Component } from 'react'
// import { Grid, List } from '@material-ui/core/Button'
import { connect } from 'react-redux'

class TodoList extends Component {
    render(
        { todos } = this.props
    ) {
        return (
            <div className="todo-list">
                <div>{todos}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos.todos 
})

export default connect(mapStateToProps, null)(TodoList)