import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({className, ...props }: InputProps) {
  return (
    <input
      className={`
        rounded-full text-stone-900 border-2 border-stone-300 bg-stone-100 focus:bg-stone-200 placeholder:text-stone-400 py-2 px-4 min-h-14 focus:outline-none focus:border-orange-500

        ${className}
        `}
      {...props}
    />
  );
}
