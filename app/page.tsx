// app/page.tsx
import { ToDos } from "@/components/ToDos";
import { getToDos } from "@/actions";

export default async function ToDoPage() {
  let todos = [];
  try {
    todos = await getToDos();
  } catch (e) {}
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">My ToDos</h1>
      <ToDos todos={todos} />
    </>
  );
}
