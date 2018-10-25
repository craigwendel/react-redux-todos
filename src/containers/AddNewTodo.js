import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../store/actions/actionCreators"
import PropTypes from 'prop-types';
import {Grid, TextField, Paper, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	addNewTodoRoot: {
		flexGrow: 1,
        width: '800px',
        textAlign: 'center',
        margin: theme.spacing.unit * 2,
	},
	paper: {
		padding: theme.spacing.unit * 2
    }, 
    textField: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit,
        textAlign: 'left',
        width: 400,
    },
    buttonDesign: {
        textAlign: 'right',
    }
})

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
        }
    }

    render() {
        return (
            <Grid>
                <Grid item xs={12} className={this.props.classes.addNewTodoRoot}>
                    <Paper className={this.props.classes.paper}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="display1">
                                    todos
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-with-placeholder"
                                    label="New todo"
                                    placeholder="Enter a todo!"
                                    className={this.props.classes.textField}
                                    margin="normal"
                                    onChange={this.handleChange}
                                    value={this.state.title} 
                                    name="title"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button onClick={this.handleAddTodo} variant="contained" color="primary" className={this.props.classes.buttonDesign}>
                                    ADD TODO
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

AddNewTodo.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(AddNewTodo))