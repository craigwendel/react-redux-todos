import actions from '../actions/actionTypes'

// let initialState = {
//         todos: [
//             {
//                 id : 1, 
//                 title: 'Lets go!',
//                 description: '',
//                 completed: true
//             }, 
//             {
//                 id : 2, 
//                 title: 'Hope this loads!',
//                 description: '',
//                 completed: false
//             }
//         ]
//     }

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

        // case 'ADD_TODO': {
        //     return {
        //         ...state,
        //         todos: [...state.todos, action.todo]
        //     }
        // }

        case 'REMOVE_TODO': {
            return {
                ...state,
                todos: state.todos.filter(({id}) => id !== action.id)
            }
        }

        default:
            return state

    }
}

