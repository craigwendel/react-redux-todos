import actions from '../actions/actionTypes'

let initialState = {
        todos: [
            {
                id : 1, 
                title: 'Lets go!',
                description: '',
                completed: false
            }, 
            {
                id : 2, 
                title: 'Hope this loads!',
                description: '',
                completed: false
            }
        ]
    }

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }
        default:
            return state

    }
}

