import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

export type todoType = { id: number; title: string; done: boolean };
let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

function App() {
  const [todos, setTodos] = useState<todoType[]>(initialTodos);

  function handleAddTodo(title: string) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function onChangeTodo(nextTodo: todoType) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  }

  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={onChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
export default App;
