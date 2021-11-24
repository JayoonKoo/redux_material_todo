import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

const TodoInput = React.memo(({addTodo}) => {
	const inputRef = useRef(null);
	
	const handleAddClick = useCallback(() => {
		const title = inputRef.current.value
		if (title === "") return
		const todo = {
			id: uuidv4(),
			title: inputRef.current.value,
			done: false
		}
		addTodo(todo)
		inputRef.current.value = ""
	}, [addTodo])
	return (
		<Container className="container">
			<label htmlFor="todo-title">title</label>
			<input ref={inputRef} type="text" id="todo-title"/>
			<button onClick={handleAddClick} className="waves-effect waves-light right btn">ADD</button>
		</Container>
	)
})

TodoInput.propTypes = {
	addTodo: PropTypes.func,
}

const Container = styled.div` 
	padding-top: 40px;
`

export default TodoInput
