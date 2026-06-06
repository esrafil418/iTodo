import { CircleNotchIcon } from "@phosphor-icons/react";

export function Pending() {
  return (
    <div className="flex flex-col p-4 gap-8 justify-center items-center h-dvh">
      <CircleNotchIcon
        size={96}
        weight="regular"
        className="text-orange-500 animate-spin"
      />
    </div>
  );
}
