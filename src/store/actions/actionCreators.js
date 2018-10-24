import actions from './actionTypes'

export const fetchTodos = () => ({
	type: actions.FETCH_TODOS_START
})

export const addTodo = (todo) => ({
	type: actions.ADD_TODO_START,
	todo
})

export const completeTodo = (id) => ({
	type: 'COMPLETE_TODO',
	id
})

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	id
})