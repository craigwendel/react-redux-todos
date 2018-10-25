import React from 'react';
import PropTypes from 'prop-types';
import { removeTodo, completeTodo } from '../store/actions/actionCreators'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ListItem, Button, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	completedStyle: {
        textDecoration: 'line-through',
        color: 'red',
        fontStyle: 'italic',
        fontSize: '30px'
    },
    listItemText: {
        font: '30px'
    }
})

export const TodoItem = ({todo, removeTodo, completeTodo, history, classes}) => (

    <ListItem key={todo.id} button onClick={() => { history.push(`/edit/${todo.id}`)}} className={classes.ListItem}>
        <ListItemText 
            className={todo.completed ? classes.completedStyle : classes.listItemText}
            primary={todo.title}/>
        <ListItemSecondaryAction>
            <Button variant="outlined" color="primary" size="small" disabled={todo.completed} tabIndex={-1} onClick={() => completeTodo(todo.id)}>
                Complete
            </Button>
            <Button variant="outlined" color="secondary" size="small" onClick={() => removeTodo(todo.id)}>
                X
            </Button>
        </ListItemSecondaryAction>
    </ListItem>
);

const completedStyle = {
    textDecoration: 'line-through',
    
};

TodoItem.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    removeTodo: (id) => dispatch(removeTodo(id)),
    completeTodo: (id) => dispatch(completeTodo(id))
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(TodoItem)))