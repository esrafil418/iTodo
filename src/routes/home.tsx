import {
  CaretLeftIcon,
  CheckFatIcon,
  LightningIcon,
} from "@phosphor-icons/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BottomBar } from "../components/BottomBar";
import { Btn } from "../components/Btn";
import { TopBar } from "../components/TobBar";
import { use, useState } from "react";
import { StarredContext } from "../shared/star.context";
import { TasksContext, type Task } from "../shared/tasks.context";
import { generateCelebrationRandomMessage, generateInspiringRandomMessage } from "../shared/randomMessages";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-dvh">
      <TopBar title="آی تودو!" />
      <Main />
      <BottomBar />
    </div>
  );
}

function Main() {
  const { tasks, toggleTaskCompleted } = use(TasksContext);
  const { starredTaskId, setStarredTaskId } = use(StarredContext);
  const [isCelebration, setIsCelebration] = useState(false);
  const navigate = useNavigate();
  const starredTask: Task | undefined = tasks.filter(
    (t) => t.id === starredTaskId,
  )?.[0];

  const handleGoToTasksPageBtn = () => navigate({ to: "/tasks" });

  const handleDidItBtnClick = () => {
    if (!starredTaskId) return;
    setStarredTaskId("");
    toggleTaskCompleted(starredTaskId);
    setIsCelebration(true);
  };

  if (isCelebration)
    return (
      <CelebrationContent onContinueBtnClick={() => setIsCelebration(false)} />
    );
  return starredTaskId ? (
    <main className="flex flex-col p-4 gap-8 justify-center items-center flex-1 text-center">
      <p className="font-bold text-stone-900 text-center">
        {generateInspiringRandomMessage()}
      </p>
      <p className="font-black text-3xl text-stone-900">{starredTask.title}</p>
      <Btn
        className="w-full"
        color="brand"
        style="filled"
        title="انجامش دادم"
        IconTextStart={CheckFatIcon}
        onClick={handleDidItBtnClick}
      />
    </main>
  ) : (
    <main className="flex flex-col p-4 gap-8 justify-center items-center flex-1">
      <p className="font-bold text-stone-900 text-center">
        تارگت بعدی چیه؟
        <br /> با توجه به اولویت هات انتخاب کن
      </p>

      <Btn
        className="w-full"
        color="brand"
        title="مشاهده لیست کارها"
        IconEnd={CaretLeftIcon}
        onClick={handleGoToTasksPageBtn}
      />
    </main>
  );
}

type CelebrationContentProps = {
  onContinueBtnClick: () => void;
};

function CelebrationContent({ onContinueBtnClick }: CelebrationContentProps) {
  return (
    <main className="flex flex-col p-4 gap-8 justify-center items-center flex-1">
      <img src="\images\celebration.svg" alt="Page-logo" className="h-75" />
      <p className="font-black text-stone-900 text-center text-3xl">
        {generateCelebrationRandomMessage()}
      </p>

      <Btn
        onClick={onContinueBtnClick}
        className="w-full"
        color="brand"
        title="ادامه بدیم"
        IconTextStart={LightningIcon}
      />
    </main>
  );
}
