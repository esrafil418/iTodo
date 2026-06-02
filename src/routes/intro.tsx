import { CaretLeftIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/intro")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col p-4 gap-8 justify-center items-center h-dvh">
      <img src="\images\large-logo.svg" alt="Page-logo" className="h-75" />

      <div className="flex flex-col gap-2 justify-center items-center">
        <img src="\images\small-logo-2.svg" alt="small-logo" />
        <p>اهدافت رو برنامه ریزی کن</p>
      </div>
      <button
        type="button"
        className="text-stone-100 bg-orange-500 flex py-2 px-4 items-center justify-between rounded-full w-full m-h-12 font-bold cursor-pointer"
      >
        <span>شروع</span>
        <CaretLeftIcon weight="fill" size={20} />
      </button>
    </div>
  );
}
