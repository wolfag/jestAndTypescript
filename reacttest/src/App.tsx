import axios from "axios";
import React, { useEffect, useState } from "react";

// test2
export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const App: React.FC = () => {
  const [text, setText] = useState("Hello world!");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showCompleted, setShowCompleted] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await axios.get<Todo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(res.data.filter((item) => item.userId === 1));
    } catch (error) {
      console.log({ error });
    }
  };

  const filtered: Todo[] = showCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {filtered.map((todo) => (
          <li key={todo.id} data-testid='todo'>
            {todo.title}
          </li>
        ))}
      </ul>
      {text}
      <button
        onClick={() => {
          setShowCompleted(!showCompleted);
        }}
      >
        Toggle
      </button>
    </div>
  );
};
