import React from 'react'
import { Grid } from '@material-ui/core'

import TodoList from './TodoList'
import AddNewTodo from '../containers/AddNewTodo'


export const TodoHome = () => (
    <Grid>
        <AddNewTodo />
        <TodoList />
    </Grid>
)

export default TodoHome
