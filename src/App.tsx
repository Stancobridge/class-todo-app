import { Todo } from "./components/Todo/Todo";
import { useTodo } from "./hooks/useTodo";

function App() {
  const { appTodos, toggleTodo, addTodoBtnClicked } = useTodo();
  return (
    <div className="w-4/12 m-auto mt-5 border-l-2 border-b-2 pb-6  border-r-2 px-4 border-black/50">
      <h1 className="text-2xl font-bold">Kam Todo Investment</h1>

      {/* TODOS */}
      <div className="mt-6 space-y-5">
        {appTodos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
      <div>
        <button
          onClick={addTodoBtnClicked}
          className="mt-6 text-2xl bg-green-500 w-full text-white py-4 px-4 rounded-lg"
        >
          + Add Todo
        </button>
      </div>
    </div>
  );
}

export default App;
