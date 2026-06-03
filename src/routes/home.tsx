import {
  CaretLeftIcon,
  CheckSquareIcon,
  HouseIcon,
  PlusIcon,
} from "@phosphor-icons/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col h-dvh">
      <header className="flex gap-2 px-4 py-2 min-h-16 items-center justify-center bg-stone-100">
        <p className="font-bold text-stone-900">آی تودو!</p>
      </header>
      <main className="flex flex-col p-4 gap-8 justify-center items-center flex-1">
        <p className="font-bold text-stone-900 text-center">
          تارگت بعدی چیه؟
          <br /> با توجه به اولویت هات انتخاب کن
        </p>

        <button
          type="button"
          className="text-orange-600 bg-orange-100 flex py-2 px-4 items-center justify-between rounded-full w-full m-h-12 font-bold cursor-pointer"
        >
          <span>شروع</span>
          <CaretLeftIcon weight="regular" size={20} />
        </button>
      </main>

      <nav className="flex items-center justify-between h-16 bg-stone-100">
        <Link
          to="/"
          className="h-full flex-1 flex flex-col gap-1 items-center justify-center text-stone-900 font-bold text-xs"
        >
          <HouseIcon size={24} weight="fill" />
          <span>خانه</span>
        </Link>

        <div className="h-full flex-1 flex items-center justify-center p-2">
          <button
            type="button"
            className="size-12
          p-3 flex items-center justify-center rounded-full bg-orange-500 text-stone-100 cursor-pointer"
          >
            <PlusIcon size={24} weight="regular" />
          </button>
        </div>

        <Link
          to="/"
          className="h-full flex-1 flex flex-col gap-1 items-center justify-center text-xs"
        >
          <CheckSquareIcon size={24} weight="regular" />
          <span>کارها</span>
        </Link>
      </nav>
    </div>
  );
}
