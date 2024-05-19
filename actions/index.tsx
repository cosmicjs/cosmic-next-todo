"use server";

import { cosmic } from "@/cosmic/client";

export async function getToDos() {
  const { objects: todos } = await cosmic.objects
    .find({ type: "todos" })
    .props("id,title,metadata.completed")
    .sort("created_at");
  return todos;
}

export async function addToDo(title: string) {
  await cosmic.objects.insertOne({
    type: "todos",
    title,
    metadata: {
      completed: false,
    },
  });
}

export async function updateToDo(id: string, completed: boolean) {
  await cosmic.objects.updateOne(id, {
    metadata: {
      completed,
    },
  });
}

export async function deleteToDo(id: string) {
  await cosmic.objects.deleteOne(id);
}
