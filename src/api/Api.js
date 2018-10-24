import isoFetch from 'isomorphic-fetch'

const fetchTodos = () => {
    return isoFetch('https://practiceapi.devmountain.com/api/tasks')
}

const addNewTodo = ({title}) => {
	const postHeaders = new Headers();
	postHeaders.append('Content-Type', 'application/json');
	return isoFetch(`https://practiceapi.devmountain.com/api/tasks`, {
		method: "post",
		headers: postHeaders,
		body: JSON.stringify( { title: title } )
	});
}


export default { 
    fetchTodos: fetchTodos,
    addNewTodo: addNewTodo
}