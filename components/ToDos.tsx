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
      <div className="text-gray-600 dark:text-gray-200 text-lg font-semibold">
        {clientTodos.map((todo: ToDoType) => {
          return (
            <div key={todo.id} className="group mb-3 flex gap-x-1">
              <input
                onChange={() => handleStatusChange(todo)}
                type="checkbox"
                checked={todo.metadata.completed}
                className="cursor-pointer"
              />
              &nbsp;
              <div
                onClick={() => handleStatusChange(todo)}
                className={
                  todo.metadata.completed
                    ? "cursor-pointer line-through"
                    : "cursor-pointer"
                }
              >
                {todo.title}
              </div>
              <div
                className="cursor-pointer group-hover:inline-block hidden ml-2 w-[100px] text-red-400"
                onClick={() => handleDeleteClick(todo.id)}
              >
                delete
              </div>
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
