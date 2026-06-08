import { use, useState } from "react";
import { TasksContext, type Task } from "../../shared/tasks.context";
import { StarredContext } from "../../shared/star.context";
import { CheckCircleIcon, CircleIcon, StarIcon } from "@phosphor-icons/react";
import { TaskDetailsSheet } from "./-taskDetailsSheet";

type TaskItemProps = {
  id: Task["id"];
  title: Task["title"];
  isCompleted: boolean;
};

export function TaskItem({ id, title, isCompleted }: TaskItemProps) {
  const { toggleTaskCompleted } = use(TasksContext);
  const { setStarredTaskId, starredTaskId } = use(StarredContext);
  const [isTaskDetailsSheetOpen, setIsTaskDetailsSheetOpen] = useState(false);

  const IsCompletedIcon = isCompleted ? CheckCircleIcon : CircleIcon;
  const isThisTaskStarred = starredTaskId === id;

  const closeTaskDataSheet = () => setIsTaskDetailsSheetOpen(false);
  const openTaskDataSheet = () => setIsTaskDetailsSheetOpen(true);
  const handleCompletedBtnClick = () => toggleTaskCompleted(id);
  const handleStarredBtnClick = () => {
    if (isCompleted) return;
    setStarredTaskId(isCompleted ? "" : isThisTaskStarred ? "" : id);
  };

  return (
    <>
      {isTaskDetailsSheetOpen && (
        <TaskDetailsSheet
          id={id}
          title={title}
          isCompleted={isCompleted}
          onClose={closeTaskDataSheet}
        />
      )}

      <div
        key={id}
        className={`flex w-full h-12 ${isCompleted ? "text-stone-600" : "text-stone-900"}`}
      >
        <button
          type="button"
          className="cursor-pointer p-3"
          onClick={handleCompletedBtnClick}
        >
          <IsCompletedIcon size={24} />
        </button>
        <button
          type="button"
          onClick={openTaskDataSheet}
          className={`cursor-pointer rounded-full hover:bg-amber-100 flex-1 text-start px-3 ${isCompleted ? "line-through" : ""}`}
        >
          {title}
        </button>
        <button
          type="button"
          className={`cursor-pointer p-3 ${isThisTaskStarred ? "text-orange-500" : ""} `}
          onClick={handleStarredBtnClick}
        >
          <StarIcon size={24} weight={isThisTaskStarred ? "fill" : "regular"} />
        </button>
      </div>
    </>
  );
}
