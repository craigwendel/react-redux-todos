import fetch from 'isomorphic-fetch'

const fetchTodos = () => {
    return fetch('https://practiceapi.devmountain.com/api/tasks')
}

export default { fetchTodos: fetchTodos }