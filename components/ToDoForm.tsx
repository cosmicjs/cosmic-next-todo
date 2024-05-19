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
    <div className="flex gap-x-2">
      <input
        className="text-gray-600 dark:text-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-900 p-2 border-2 rounded-lg"
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
        className="border-2 border-gray-400 dark:border-gray-900 rounded-lg w-32"
        onClick={() => handleAddToDo(todoTitle)}
      >
        Save
      </button>
    </div>
  );
}
