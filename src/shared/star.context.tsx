/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import type { Task } from "./tasks.context";
import useLocalStorage from "../hooks/useLocalStorage";

type IStarredContext = {
  starredTaskId: Task["id"] | "";
  setStarredTaskId: (tasks: Task["id"] | "") => void;
};

export const StarredContext = createContext<IStarredContext>({
  starredTaskId: "",
  setStarredTaskId: () => {},
});

export function StarredProvider({ children }: { children: React.ReactNode }) {
  const [starredTaskId, setStarredTaskId] = useLocalStorage<Task["id"]>(
    "starred-task-id",
    "",
  );

  return (
    <StarredContext.Provider value={{ starredTaskId, setStarredTaskId }}>
      {children}
    </StarredContext.Provider>
  );
}
