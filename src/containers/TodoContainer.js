import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import {
  addTodo as addTodoRedux,
  doneTodo as doneTodoRedux,
} from "../redux/modules/todo";

const TodoContainer = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addTodo = useCallback(
    (todo) => {
      dispatch(addTodoRedux(todo));
    },
    [dispatch]
  );

  const doneTodo = useCallback(
    (id) => {
      dispatch(doneTodoRedux(id));
    },
    [dispatch]
  );

  return <Todo todos={todos} addTodo={addTodo} doneTodo={doneTodo} />;
};

export default TodoContainer;
