"use client";

import { useState } from "react";
import { getToDos, addToDo, updateToDo, deleteToDo } from "@/actions";
import { ToDoForm } from "@/components/ToDoForm";

export type ToDoType = {
  id: string;
  title: string;
  metadata: { completed: boolean };
};

export function ToDos({ todos }: { todos: ToDoType[] | [] }) {
  const [clientTodos, setClientTodos] = useState(todos);
  const [todoTitle, setTodoTitle] = useState("");
  function handleStatusChange(todo: ToDoType) {
    updateToDo(todo.id, !todo.metadata.completed);
    const updatedTodos = clientTodos.map((updatedTodo) => {
      if (updatedTodo.id === todo.id)
        updatedTodo.metadata.completed = !updatedTodo.metadata.completed;
      return updatedTodo;
    });
    setClientTodos(updatedTodos);
  }
  async function handleAddToDo(title: string) {
    if (!title.trim()) return;
    addToDo(title);
    // Reset title field
    setTodoTitle("");
    // Instant data change
    setClientTodos([
      ...clientTodos,
      { id: "temporary-id", title, metadata: { completed: false } },
    ]);
    // Refetch real data
    setClientTodos(await getToDos());
  }
  async function handleDeleteClick(id: string) {
    deleteToDo(id);
    // Instant data change
    setClientTodos(clientTodos?.filter((todo) => todo.id !== id));
  }
  function handleTitleChange(title: string) {
    setTodoTitle(title);
  }
  return (
    <>
      <div className="mb-4 text-gray-600 dark:text-gray-200">
        {clientTodos.map((todo: ToDoType) => {
          return (
            <div key={todo.id} className="group flex gap-x-1 cursor-pointer">
              <input
                onChange={() => handleStatusChange(todo)}
                type="checkbox"
                checked={todo.metadata.completed}
              />
              &nbsp;
              <span
                onClick={() => handleStatusChange(todo)}
                style={{
                  textDecoration: `${
                    todo.metadata.completed ? "line-through" : "none"
                  }`,
                }}
              >
                {todo.title}
              </span>
              <span
                className="group-hover:inline-block hidden ml-2 text-red-400"
                onClick={() => handleDeleteClick(todo.id)}
              >
                x delete
              </span>
            </div>
          );
        })}
      </div>
      <ToDoForm
        handleTitleChange={handleTitleChange}
        handleAddToDo={handleAddToDo}
        todoTitle={todoTitle}
      />
    </>
  );
}
