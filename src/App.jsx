import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexts/TasksContext";

function App() {
  // const getNextId = (data) => {
  //   if (data.length === 0) return 0;
  //   const maxId = data.reduce((prev, current) =>
  //     prev && prev.id > current.id ? prev.id : current.id
  //   );
  //   return maxId + 1;
  // };

  //handlers
  // const handleAddTask = (text) => {
  //   ;
  // };

  // const handleChangeTask = (task) => {
  //   dispatch({
  //     type: "changed",
  //     task,
  //   });
  // };

  // const handleDeleteTask = (taskId) => {
  //   dispatch({
  //     type: "deleted",
  //     id: taskId,
  //   });
  // };

  return (
    <TaskProvider>
      <h2>Todo App</h2>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
