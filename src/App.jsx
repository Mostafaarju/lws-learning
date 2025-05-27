import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  //handlers
 


  return (
    <>
      <h2>Todo App</h2>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
