import { useState } from "react";

export const TaskForm = () => {
  const [inputState, setInputState] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (inputState !== "") {
      setTodos([...todos, inputState]);
      setInputState("");
      console.log(todos);
    }
  };

  return (
    <>
      <form className="grid place-content-center">
        <label className="text-2xl" htmlFor="taskForm">
          Task Form
        </label>
        <div className="flex">
          <input
            onChange={(event) => setInputState(event.target.value)}
            type="text"
            id="taskForm"
            value={inputState}
            placeholder="add a task"
          />
          <button className="w-100 ml-4" onClick={addTodo}>
            Add Task
          </button>
        </div>
        <div className="border border-black">
          <ul>
            {todos.map((todo) => {
              return <li key={todo}>{todo}</li>;
            })}
          </ul>
        </div>
      </form>
    </>
  );
};
