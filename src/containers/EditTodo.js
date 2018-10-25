import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Button, TextField, Paper, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import {fetchTodos, completeTodo, removeTodo, editTodo } from '../store/actions/actionCreators'

const styles = theme => ({
	editTodoRoot: {
		flexGrow: 1,
        width: '600px',
        textAlign: 'center',
        margin: theme.spacing.unit * 2,
    },
    backButtonDivDetails: {
        marginTop: "1em",
        marginBottom: "3em"
    },
    buttonDetails: {
        marginBottom: "5em",
        marginTop: "2em"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: "1em",
        textAlign: "left",
        width: 400,
    },
    descTextField: {
        marginTop: "1em",
        textAlign: "left",
        width: 400,
        marginRight: "7.25em"
    }
})

class EditTodo extends Component {

    state = {
        title: '',
        description: ''
    }
    
    handleBackButton = () => {
        this.props.history.push('/')
    }

    handleOnChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.props.todo[name] = value;
    }
    
    handleOnCompleted = () => {
        this.props.completeTodo(this.props.todo.id)
        this.props.history.push('/')
    }

    handleSaveTodo = () => {
        const { title, description, completed, id } = this.props.todo
        let updates = {
            title,
            description,
            completed
        }

        if (updates.title === '' || updates.title.length < 1) {
            alert('Title is required')
        } else {
            this.props.editTodo(id, updates)
            this.props.history.push('/')
        }
        
    }

    handleCancelTodo = () => {
        const { todo, initialTodo } = this.props
        this.setState({ ...this.props.initialTodo })
        todo.title = initialTodo.title
        todo.description = initialTodo.description
    }

    handleDeleteTodo = () => {
        this.props.removeTodo(this.props.todo.id)
        this.props.history.push('/')
    }

render() {

    const { todo, classes, loaded } = this.props

    return (
        loaded ? 
            <Grid container justify="center" >
                <Grid item xs={8}className={classes.editTodoRoot}>
                    <Paper>
                        <Grid container className={classes.editTodoRoot}>
                            <Grid item xs={6} className={classes.backButtonDivDetails}>
                                <Button variant="outlined" size="medium" color="default" onClick={this.handleBackButton}>
                                    <Typography variant="button">Back to todos</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12}> 
                                <TextField 
                                    label="Title"
                                    name="title"
                                    value={todo.title}
                                    onChange={this.handleOnChange}
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <Button 
                                    variant="contained" 
                                    color="default"
                                    size="medium"
                                    disabled={todo.completed}
                                    onClick={() => this.handleOnCompleted(todo.id)}
                                    >Complete
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    label="Description"
                                    multiline
                                    name="description"
                                    value={todo.description}
                                    onChange={this.handleOnChange}
                                    className={classes.descTextField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container justify="space-evenly" spacing={8}>
                                    <Grid item xs={4}>
                                        <Button
                                            color="primary"
                                            variant="contained" 
                                            onClick={this.handleSaveTodo}
                                            className={classes.buttonDetails}
                                        >Save</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            color="default"
                                            variant="contained" 
                                            onClick={this.handleCancelTodo}
                                            className={classes.buttonDetails}
                                        >Cancel</Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            color="secondary"
                                            variant="contained" 
                                            onClick={this.handleDeleteTodo}
                                            className={classes.buttonDetails}
                                        >Remove</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid> : <p>Loading the todo...</p>
            )
        }
    }

EditTodo.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
    if(state.todos.loaded) {
        const currentTodo = state.todos.todos.find((todo) => todo.id === parseInt(props.match.params.id, 10))
        const { title, description, completed } = currentTodo
        const initialTodo = {
            title: title,
            description: description,
            completed: completed
        }
        return { 
            todo: currentTodo,
            initialTodo: initialTodo,
            loaded: state.todos.loaded
        }
    }

    return { 
        todo: {},
        initialTodo: {},
        loaded: state.todos.loaded
    }
}
        
const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos()),
    editTodo: (id, updates) => dispatch(editTodo(id, updates)),
    completeTodo: (id) => dispatch(completeTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id))
})
        
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EditTodo));
