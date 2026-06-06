import { PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { use, useState } from "react";
import { Btn } from "../../components/Btn";
import { BottomSheet } from "../../components/Sheet";
import { Switch } from "../../components/Switch";
import { TopBar } from "../../components/TobBar";
import { type Task, TasksContext } from "../../shared/tasks.context";
import { EditTaskSheet } from "./-editTaskSheet";
import { DeleteTaskSheet } from "./-deleteTaskSheet";

type TaskDetailsSheetProps = {
  id: Task["id"];
  title: Task["title"];
  isCompleted: Task["isCompleted"];
  onClose: () => void;
};

export function TaskDetailsSheet({
  id,
  title,
  isCompleted,
  onClose,
}: TaskDetailsSheetProps) {
  const { toggleTaskCompleted } = use(TasksContext);
  const [isEditMode, setIsEditMod] = useState(false);
  const [isDeleteMode, setIsDeleteEditMod] = useState(false);

  const openEditSheet = () => setIsEditMod(true);
  const closeEditSheet = () => setIsEditMod(false);
  const openDeleteSheet = () => setIsDeleteEditMod(true);
  const closeDeleteSheet = () => setIsDeleteEditMod(false);
  const handleToggleClick = () => toggleTaskCompleted(id);
  return (
    <>
      {isEditMode && (
        <EditTaskSheet onClose={closeEditSheet} taskId={id} title={title} />
      )}
      {isDeleteMode && (
        <DeleteTaskSheet onClose={closeDeleteSheet} taskId={id} />
      )}

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
          <Btn
            title="ویرایش"
            IconEnd={PencilSimpleIcon}
            onClick={openEditSheet}
          />
          <Btn
            title="حذف"
            color="danger"
            IconEnd={TrashIcon}
            onClick={openDeleteSheet}
          />
        </div>
      </BottomSheet>
    </>
  );
}
