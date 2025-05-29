import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "../data/tasks";
import taskReducer from "../reducers/taskReducer";

const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function UseTasks() {
  return useContext(TaskContext);
}
export function UseTaskDispatch() {
  return useContext(TaskDispatchContext);
}
