import { CheckSquareIcon, HouseIcon, PlusIcon } from "@phosphor-icons/react";
import { Link, useLocation } from "@tanstack/react-router";

export function BottomBar() {
	const location = useLocation();
	return (
		<nav className="flex items-center justify-between h-16 bg-stone-100">
			<Link
				to="/home"
				activeProps={{ className: "text-stone-900 font-bold" }}
				className="h-full flex-1 flex flex-col gap-1 items-center justify-center text-xs"
			>
				<HouseIcon
					size={24}
					weight={location.pathname === "/home" ? "fill" : "regular"}
				/>
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
				activeProps={{ className: "text-stone-900 font-bold" }}
				className="h-full flex-1 flex flex-col gap-1 items-center justify-center text-xs"
			>
				<CheckSquareIcon
					size={24}
					weight={location.pathname === "/" ? "fill" : "regular"}
				/>
				<span>کارها</span>
			</Link>
		</nav>
	);
}
