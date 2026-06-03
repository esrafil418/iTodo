import type { Icon } from "@phosphor-icons/react";

type BtnProps = {
	title: string;
	IconStart?: Icon;
	IconEnd?: Icon;
	IconTextStart?: Icon;
	IconTextEnd?: Icon;
	disabled?: boolean;
	color?: "brand" | "danger" | "neutral";
	style?: "light" | "filled";
	className?: string;
	onClick: () => void;
};

export function Btn({
	title,
	IconStart,
	IconTextStart,
	IconEnd,
	IconTextEnd,
	disabled = false,
	color = "neutral",
	style = "light",
	className = "",
	onClick,
}: BtnProps) {
	const styles = getBtnStyles(color, style, className);
	const iconWeight = style === "filled" ? "fill" : "regular";
	return (
		<button
			type="button"
			className={styles}
			disabled={disabled}
			onClick={onClick}
		>
			{IconStart && <IconStart size={20} weight={iconWeight} />}
			<span className="flex gap-1">
				{IconTextStart && <IconTextStart size={20} weight={iconWeight} />}
			</span>
			<span className="flex gap-1">
				{title}
				{IconTextEnd && <IconTextEnd size={20} weight={iconWeight} />}
			</span>
			{IconEnd && <IconEnd size={20} weight={iconWeight} />}
		</button>
	);
}

function getBtnStyles(
	color: "brand" | "danger" | "neutral",
	style: "light" | "filled",
	className: string,
) {
	let finalClassName = "";
	const baseStyle =
		"flex py-2 px-4 items-center justify-between rounded-full w-full m-h-12 font-bold cursor-pointer ";
	const disabledStyles = "disabled:bg-stone-300 disabled:text-stone-500";
	finalClassName += baseStyle;
	finalClassName += disabledStyles;

	switch (color) {
		case "brand":
			if (style === "filled")
				finalClassName += " bg-orange-500 text-stone-100 ";
			if (style === "light")
				finalClassName += " bg-orange-100 text-orange-600 ";
			break;
		case "danger":
			if (style === "filled") finalClassName += " bg-red-500 text-stone-100 ";
			if (style === "light") finalClassName += " bg-red-100 text-red-600 ";
			break;
		case "neutral":
			if (style === "filled") finalClassName += " bg-stone-500 text-stone-100 ";
			if (style === "light") finalClassName += " bg-stone-100 text-stone-600 ";
	}
	finalClassName += ` ${className}`;
	return finalClassName;
}
