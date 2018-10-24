import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../store/actions/actionCreators"

class AddNewTodo extends Component {
    state = {
        title: '',
        description: '',
        completed: false
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleAddTodo = () => {
        if (this.state.title.length < 3 || this.state.title === '') {
            alert('Please enter a valid todo item more than 2 characters.')
        } else {
            this.props.addTodo(this.state)
            this.setState({title: '' })
            this.setState({description: '' })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="todo">Add Todo below</label>
                    <input type="text"  onChange={this.handleChange} value={this.state.title} name="title" />
                    <input type="text"  onChange={this.handleChange} value={this.state.description} name="description" placeholder="Write a short description if you'd like!"/>
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