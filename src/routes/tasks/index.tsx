import { createFileRoute } from "@tanstack/react-router";
import { BottomBar } from "../../components/BottomBar";
import { TopBar } from "../../components/TobBar";
import { TasksList } from "./-tasksList";

export const Route = createFileRoute("/tasks/")({
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

<TasksList />;
