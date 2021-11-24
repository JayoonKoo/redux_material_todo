import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import PropTypes from 'prop-types'

const Todo = ({addTodo, todos, doneTodo}) => {

	return (
		<>
			<TodoInput addTodo={addTodo}/>
			<TodoList todos={todos} doneTodo={doneTodo}/>
		</>
	)
}

Todo.propTypes = {
	addTodo: PropTypes.func,
	doneTodo: PropTypes.func,
	todos: PropTypes.array
}

export default Todo
