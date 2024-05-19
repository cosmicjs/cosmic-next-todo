// app/page.tsx
import { ToDos } from "@/components/ToDos";
import { getToDos } from "@/actions";
import { Footer } from "@/components/Footer";
import { GitHubLink } from "@/components/GitHubLink";
export default async function ToDoPage() {
  let todos = [];
  try {
    todos = await getToDos();
  } catch (e) {}
  return (
    <>
      <GitHubLink />
      <div className="p-10 max-w-[450px] my-10 mx-auto">
        <h1 className="text-xl font-semibold mb-4">My ToDos</h1>
        <div className="p-4 mx-auto border border-gray-400 dark:border-gray-900 rounded-lg">
          <ToDos todos={todos} />
        </div>
        <Footer />
      </div>
    </>
  );
}
