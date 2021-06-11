import { useCallback, useEffect, useState } from "react";
import { Todo } from "../types/todo";
import axios from "axios";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = useCallback(() => {
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((todo) => {
        if (todo.data) {
          setTodos(todo.data);
        }
      });
  }, []);

  return { todos, getTodos };
};
