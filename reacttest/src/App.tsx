import axios from "axios";
import React, { useEffect, useState } from "react";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const App: React.FC = () => {
  const [text, setText] = useState("Hello world!");
  const [todos, setTodos] = useState<Todo[]>([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} data-testid='todo'>
            {todo.title}
          </li>
        ))}
      </ul>
      {text}
    </div>
  );
};
