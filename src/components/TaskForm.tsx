import { useState } from "react";

export const TaskForm = () => {
  const [newEntry, setNewEntry] = useState("");
  return (
    <>
      <form className="grid place-content-center">
        <label className="text-2xl" htmlFor="taskForm">
          Task Form
        </label>
        <div className="flex">
          <input
            type="text"
            id="taskForm"
            value={newEntry}
            placeholder="add a task"
          />
          <button className="w-100 ml-4">Add Task</button>
        </div>
      </form>
    </>
  );
};
