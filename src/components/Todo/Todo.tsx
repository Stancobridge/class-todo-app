import { ITodo } from "../../interface/todo.interface";

export const Todo = ({
  completed,
  id,
  title,
  toggleTodo,
}: ITodo & { toggleTodo: (id: number) => void }) => {
  return (
    <div
      className={`border-2 border-gray-400 space-x-2 px-4 py-2 flex rounded-lg shadow-xl items-center ${
        completed ? "bg-gray-200" : "bg-white"
      }`}
    >
      <input
        type="checkbox"
        className="w-6 h-6 rounded-full "
        name=""
        id=""
        onClick={() => {
          toggleTodo(id);
        }}
        defaultChecked={completed}
      />
      <input
        className="flex-1 text-lg font-semibold text-gray-600 outline-none py-3 bg-transparent"
        type="text"
        name=""
        id={id.toString()}
        defaultValue={title}
        disabled={completed}
      />
    </div>
  );
};
