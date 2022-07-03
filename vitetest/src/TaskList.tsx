import { useState } from "react";
import { todoType } from "./App";

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: {
  todos: todoType[];
  onChangeTodo: (nextTodo: todoType) => void;
  onDeleteTodo: (todoId: number) => void;
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task
            todo={todo}
            onChangeTodo={onChangeTodo}
            onDelete={onDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({
  todo,
  onChangeTodo,
  onDelete,
}: {
  todo: todoType;
  onChangeTodo: (nextTodo: todoType) => void;
  onDelete: (todoId: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChangeTodo({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChangeTodo({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
