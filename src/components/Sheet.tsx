import type { ReactNode } from "react";

type BottomSheetProps = {
  onClose: () => void;
  topBar: ReactNode;
  children: ReactNode;
};

export function BottomSheet({ onClose, topBar, children }: BottomSheetProps) {
  return (
    <div className="flex flex-col inset-0 w-full h-dvh fixed bg-black/50">
      <button
        type="button"
        className="bg-blue-800/10 flex-1 w-full cursor-pointer"
        onClick={onClose}
      />
      <div className="bg-stone-50 rounded-t-2xl overflow-hidden">
        {topBar}
        <div className="flex flex-col p-4 gap-8">{children}</div>
      </div>
    </div>
  );
}
