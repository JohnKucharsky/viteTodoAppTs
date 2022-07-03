import { useState } from "react";

export default function AddTodo({
  onAddTodo,
}: {
  onAddTodo: (t: string) => void;
}) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}>
        Add
      </button>
    </>
  );
}
