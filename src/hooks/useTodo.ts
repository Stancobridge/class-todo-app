import { useState } from "react";
import { todos } from "../data/todos";
import { ITodo } from "../interface/todo.interface";

export const useTodo = () => {
  const [appTodos, setAppTodos] = useState<ITodo[]>(todos);

  const toggleTodo = (id: number) => {
    const updatedTodos = appTodos.map((todo) => {
      if (todo.id === id) {
        if (todo.completed) {
          todo.completed = false;
        } else {
          todo.completed = true;
        }
      }

      return todo;
    });

    setAppTodos(updatedTodos);
  };

  const addTodoBtnClicked = () => {
    const updatedTodos = [
      ...appTodos,
      { id: appTodos.length + 1, completed: false, title: "" },
    ];

    setAppTodos(updatedTodos);
  };

  return { toggleTodo, appTodos, addTodoBtnClicked };
};
