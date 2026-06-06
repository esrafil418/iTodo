import { PencilSimpleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { use, useState } from "react";
import { Btn } from "../../components/Btn";
import { Input } from "../../components/Input";
import { BottomSheet } from "../../components/Sheet";
import { TopBar } from "../../components/TobBar";
import { TasksContext, type Task } from "../../shared/tasks.context";

type EditTaskSheetProps = {
  taskId: Task["id"];
  title: Task["title"];
  onClose: () => void;
};

export function EditTaskSheet({ onClose, taskId, title }: EditTaskSheetProps) {
  const { editTask } = use(TasksContext);
  const [newTaskTitle, setNewTaskTitle] = useState(title);
  const haandleEditTaskBtnClick = () => {
    editTask(taskId, newTaskTitle);
    setNewTaskTitle("");
    onClose();
  };
  return (
    <BottomSheet
      className="z-10"
      onClose={onClose}
      topBar={<TopBar title="ویرایش کار " onCloseBtnClick={onClose} />}
    >
      <label className="flex flex-col gap-2">
        <span>اسم کار:</span>
        <Input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </label>
      <Btn
        title="ویرایش کار"
        color="brand"
        style="filled"
        IconEnd={PencilSimpleIcon}
        onClick={haandleEditTaskBtnClick}
      />
    </BottomSheet>
  );
}
