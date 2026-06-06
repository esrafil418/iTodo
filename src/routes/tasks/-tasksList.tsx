import { use } from "react";
import { TasksContext, type Task } from "../../shared/tasks.context";
import { TaskItem } from "./-taskItem";

export function TasksList() {
  const { tasks } = use(TasksContext);
  const isEmpty = tasks.length <= 0;

  {
    return isEmpty ? (
      <main className="flex flex-col p-4 gap-8 justify-center items-center flex-1">
        <img src="\images\indicator.svg" alt="indicator" className="h-50" />
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-2xl font-bold text-stone-900">فعلا کاری نداریم!</p>
          <p>
            میتونی از اون پایین <br />
            کار جدید تعریف کنی!
          </p>
          <img
            src="\images\down-arrow.svg"
            alt="Down Arrow"
            className="h-30 mt-8"
          />
        </div>
      </main>
    ) : (
      <main className="flex flex-col p-4 gap-8 justify-start items-center flex-1 overflow-y-auto hide-scrollbar">
        <div className="flex flex-col gap-2 w-full">
          {tasks.map((t: Task) => (
            <TaskItem
              key={t.id}
              id={t.id}
              title={t.title}
              isCompleted={t.isCompleted}
            />
          ))}
        </div>
      </main>
    );
  }
}
