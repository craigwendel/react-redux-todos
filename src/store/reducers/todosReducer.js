import actions from '../actions/actionTypes'

let initialState = {
    todos: [],
    loaded: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_TODOS_COMPLETED: {
            return {
                todos: action.todos,
                loaded: true
			};
        }

        case actions.REMOVE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(({id}) => id !== action.id)
            }
        }


        default:
            return state

    }
}

