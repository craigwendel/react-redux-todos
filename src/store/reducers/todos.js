import actions from '../actions/actionTypes'

let initialState = {
    todos: [],
    fetched: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_TODOS_COMPLETED:
            return {
                todos: action.todos,
                fetched: true
            };

        default:
            return state
            
    }
}

