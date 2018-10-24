import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../store/actions/actionCreators"

class AddNewTodo extends Component {
    state = {
        id: '',
        title: '',
        description: '',
        completed: false
    }

    handleChange = (e) => {
        const { value } = e.target
        this.setState({ title: value })
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state)
        this.setState({ title: '' })
    }

    render() {
        return (
            <div>
                <h2>Todos!</h2>
                <div>
                    <label htmlFor="todo">Add Todo below</label>
                    <input type="text"  onChange={this.handleChange} value={this.state.title} />
                    <button onClick={this.handleAddTodo}>ADD TODO</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(AddNewTodo);