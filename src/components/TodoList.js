import React from 'react'
import {Grid, Paper, List, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'

import TodoItem from '../containers/TodoItem'

const styles = theme => ({
    todoListRoot: {
        flexGrow: 1,
        width: "600px",
        textAlign: "center",
        margin: theme.spacing.unit * 2,
    },
    paper: {
        padding: theme.spacing.unit * 2
    },
    typeText: {
        fontSize: "1.5em"
    }
});

export const TodoList = ({todos, classes}) => (
    (todos.length > 0) ? (
    <Grid item xs={8} className={classes.todoListRoot}>
        <Paper className={classes.paper}>
            <List>
                {todos.map(todo => 
                    <TodoItem key={todo.id} todo={todo} />
                )}
            </List>
        </Paper>
    </Grid>
    ) : 
    <Grid item xs={8} className={classes.todoListRoot}>
        <Paper className={classes.paper}>
            <Typography className={classes.typeText}>No todos yet...add some above!</Typography>
        </Paper>
    </Grid>
)

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

TodoList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(withStyles(styles)(TodoList))