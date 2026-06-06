import {
  CheckCircleIcon,
  CircleIcon,
  PencilSimpleIcon,
  StarIcon,
  TrashIcon,
} from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { BottomBar } from "../components/BottomBar";
import { TopBar } from "../components/TobBar";
import useLocalStorage from "../hooks/useLocalStorage";
import { sampleTasks, TasksContext, type Task } from "../shared/tasks.context";
import { use, useState } from "react";
import { StarredContext } from "../shared/star.context";
import { BottomSheet } from "../components/Sheet";
import { Btn } from "../components/Btn";
import { Switch } from "../components/Switch";
export const Route = createFileRoute("/tasks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-dvh">
      <TopBar title="کارها" />

      <TasksList />

      <BottomBar />
    </div>
  );
}

function TasksList() {
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

type TaskItemProps = {
  id: Task["id"];
  title: Task["title"];
  isCompleted: boolean;
};

function TaskItem({ id, title, isCompleted }: TaskItemProps) {
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

type TaskDetailsSheetProps = {
  id: Task["id"];
  title: Task["title"];
  isCompleted: Task["isCompleted"];
  onClose: () => void;
};

function TaskDetailsSheet({
  id,
  title,
  isCompleted,
  onClose,
}: TaskDetailsSheetProps) {
  const { toggleTaskCompleted } = use(TasksContext);

  const handleToggleClick = () => toggleTaskCompleted(id);
  return (
    <BottomSheet
      onClose={onClose}
      topBar={<TopBar title="مشخصات" onCloseBtnClick={onClose} />}
    >
      <p className="text-stone-900 font-bold text-2xl text-center">{title}</p>
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={handleToggleClick}
          className="p-2 ps-4 flex items-center justify-between font-bold border-2 border-dashed border-stone-300 rounded-full cursor-pointer "
        >
          <span>وضعیت</span>
          <Switch readOnly checked={isCompleted} />
        </button>
        <Btn disabled title="ویرایش" IconEnd={PencilSimpleIcon} />
        <Btn disabled title="حذف" color="danger" IconEnd={TrashIcon} />
      </div>
    </BottomSheet>
  );
}
