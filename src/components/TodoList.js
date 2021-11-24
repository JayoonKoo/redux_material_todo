import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = React.memo(({ todos, doneTodo }) => {
  return (
    <Container className="container">
      <TodosUl>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            doneTodo={doneTodo}
            done={todo.done}
            title={todo.title}
          />
        ))}
      </TodosUl>
    </Container>
  );
});

TodoList.propTypes = {
  todos: PropTypes.array,
  doneTodo: PropTypes.func,
};

const Container = styled.section`
	padding-top: 40px;
`;

const TodosUl = styled.ul``;

export default TodoList;
