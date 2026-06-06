/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type ITasksContext = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  toggleTaskCompleted: (id: Task["id"]) => void;
  creatTask: (title: Task["title"]) => void;
  editTask: (id: Task["id"], title: Task["title"]) => void;
  deleteTask: (id: Task["id"]) => void;
};

export const TasksContext = createContext<ITasksContext>({
  tasks: [],
  setTasks: () => {},
  toggleTaskCompleted: () => {},
  creatTask: () => {},
  editTask: () => {},
  deleteTask: () => {},
});

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const toggleTaskCompleted = (taskId: Task["id"]) => {
    const clonedTasks = [...tasks];
    const changedTasks = clonedTasks.map((ct) =>
      ct.id === taskId ? { ...ct, isCompleted: !ct.isCompleted } : ct,
    );
    setTasks(changedTasks);
  };

  const creatTask = (taskTitle: Task["title"]) => {
    const newTask: Task = {
      title: taskTitle,
      id: uuidv4(),
      isCompleted: false,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const editTask = (id: Task["id"], title: Task["title"]) => {
    const editedTasks = [...tasks].map((task) => {
      if (task.id !== id) return task;

      return {
        ...task,
        title,
      };
    });
    setTasks(editedTasks);
  };

  const deleteTask = (id: Task["id"]) => {
    const editedTasks = tasks.filter((task) => task.id !== id);
    setTasks(editedTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        creatTask,
        toggleTaskCompleted,
        editTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
