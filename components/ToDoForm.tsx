export function ToDoForm({
  handleTitleChange,
  handleAddToDo,
  todoTitle,
}: {
  handleTitleChange: (title: string) => void;
  handleAddToDo: (title: string) => void;
  todoTitle: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 flex-row text-lg">
      <input
        className="text-gray-600 md:col-span-3 col-span-4 dark:text-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-900 p-2 border-2 rounded-lg"
        type="text"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          handleTitleChange(e.currentTarget?.value);
        }}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            handleAddToDo(todoTitle);
          }
        }}
        placeholder="Enter todo task"
        autoFocus
        value={todoTitle}
      />
      <button
        type="submit"
        disabled={!todoTitle.trim()}
        className="p-2 mt-2 md:mt-0 md:col-span-1 col-span-4 border-2 border-gray-400 dark:border-gray-900 rounded-lg"
        onClick={() => handleAddToDo(todoTitle)}
      >
        Add
      </button>
    </div>
  );
}
