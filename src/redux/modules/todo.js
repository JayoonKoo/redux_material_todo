import {createActions, handleActions} from 'redux-actions'

const prefix = 'todo-redux/todo'

export const {addTodo, doneTodo} = createActions('ADD_TODO', 'DONE_TODO', {prefix})

const initialState = {
	todos : []
}

const reducer = handleActions(
	{
		ADD_TODO:(state, action) => ({todos : [...state.todos, action.payload]}),
		DONE_TODO: (state, action) => {
			const id = action.payload;
			const index = state.todos.findIndex(todo => todo.id === id)
			const doneTodo = {
				...state.todos[index],
				done: true
			}
			const nextTodos = [...state.todos]
			nextTodos.splice(index, 1, doneTodo)
			return {
				todos : nextTodos
			}
		},
	},
	initialState,
	{prefix})

export default reducer
