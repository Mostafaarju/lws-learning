import { useState } from "react";
import { UseTaskDispatch, UseTasks } from "../contexts/TasksContext";
import { getNextId } from "../utils/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = UseTaskDispatch();
  const tasks = UseTasks();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add Task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            text,
            id: getNextId(tasks),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
