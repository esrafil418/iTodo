import { useNavigate } from "@tanstack/react-router";
import { Btn } from "../components/Btn";
import { CaretLeftIcon } from "@phosphor-icons/react";

export function NotFound() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate({ to: "/home" });
  };
  return (
    <div className="flex flex-col p-4 gap-8 justify-center items-center h-dvh">
      <img src="\images\404.svg" alt="404 img" className="h-100" />
      <div className="flex flex-col gap-1 text-center">
        <p className="font-black text-3xl text-stone-900">
          ارور 404 - پیدا نشد
        </p>
        <p>
          صفحه ای که دنبالش هستی، <br />
          یا وجود نداره، یا اینکه گم شده
        </p>
      </div>
      <Btn
        title="برگردیم خونه"
        style="filled"
        color="brand"
        className="w-full"
        IconEnd={CaretLeftIcon}
        onClick={goToHomePage}
      />
    </div>
  );
}
