import actions from '../actions/actionTypes'

export default (state = {}, action) => {
    switch(action.type) {
        case actions.FETCH_TODOS_ERROR: {
            return {
                message: actions.message
            }
        }
        case actions.ADD_TODO_ERROR: {
            return {
                message: actions.message
            }
        }
        case actions.REMOVE_TODO_ERROR: {
            return {
                message: actions.message
            }
        }
        case actions.COMPLETE_TODO_ERROR: {
            return {
                message: actions.message
            }
        }
        case actions.EDIT_TODO_ERROR: {
            return {
                message: actions.message
            }
        }

        default: 
            return state
    }
}