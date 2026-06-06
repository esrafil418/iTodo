import { CaretLeftIcon, TrashIcon } from "@phosphor-icons/react";
import { use } from "react";
import { Btn } from "../../components/Btn";
import { BottomSheet } from "../../components/Sheet";
import { TopBar } from "../../components/TobBar";
import { TasksContext, type Task } from "../../shared/tasks.context";

type DeleteTaskSheetProps = {
  taskId: Task["id"];
  onClose: () => void;
};

export function DeleteTaskSheet({ onClose, taskId }: DeleteTaskSheetProps) {
  const { deleteTask } = use(TasksContext);
  const handleDeleteTaskBtnClick = () => {
    deleteTask(taskId);
    onClose();
  };
  return (
    <BottomSheet
      className="z-10"
      onClose={onClose}
      topBar={<TopBar title="حذف کار" onCloseBtnClick={onClose} />}
    >
      <p className="font-bold text-stone-900 text-2xl">
        مطمئنی میخوای پاکش کنی؟
      </p>

      <div className="flex flex-col gap-2">
        <Btn
          title="نه، نگه میدارمش"
          color="brand"
          style="filled"
          IconEnd={CaretLeftIcon}
          onClick={onClose}
        />

        <Btn
          title="حذف کن"
          color="danger"
          style="light"
          IconEnd={TrashIcon}
          onClick={handleDeleteTaskBtnClick}
        />
      </div>
    </BottomSheet>
  );
}
