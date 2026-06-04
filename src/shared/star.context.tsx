import { createContext, useState } from "react";
import { sampleTasks, type Task } from "./tasks.context";

type IStarredContext = {
  starredTaskId: Task["id"] | null;
  setStarredTaskId: (tasks: Task["id"] | null) => void;
};

export const StarredContext = createContext<IStarredContext>({
  starredTaskId: null,
  setStarredTaskId: () => {},
});

export function StarredProvider({ children }: { children: React.ReactNode }) {
  const [starredTaskId, setStarredTaskId] = useState<Task["id"] | null>(null);

  return (
    <StarredContext.Provider value={{ starredTaskId, setStarredTaskId }}>
      {children}
    </StarredContext.Provider>
  );
}
