import React from 'react'
import { Grid } from '@material-ui/core'

import TodoList from './TodoList'
import AddNewTodo from './containters/AddNewTodo'


export const TodoHome = () => (
    <Grid>
        <TodoList />
        <AddNewTodo />
    </Grid>
)

export default TodoHome
