import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  //handlers
  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    
    setTasks(nextTask);  
  };

  const handleDeleteTask = (taskId)=> {
    setTasks(tasks.filter((t)=> t.id !== taskId));
  }

  return (
    <>
      <h2>Todo App</h2>
      <AddTask onAdd={handleAddTask} />
      <TaskList 
      tasks={tasks} 
      onChangeTask={handleChangeTask} 
      onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
