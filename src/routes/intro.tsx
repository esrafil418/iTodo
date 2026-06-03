import { CaretLeftIcon } from "@phosphor-icons/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Btn } from "../components/Btn";

export const Route = createFileRoute("/intro")({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();

	const handleGoToHomePageBtn = () => {
		localStorage.setItem("started", JSON.stringify(true));
		navigate({ to: "/home" });
	};
	return (
		<div className="flex flex-col p-4 gap-8 justify-center items-center h-dvh">
			<img src="\images\the-trees.svg" alt="Page-logo" className="h-75" />

			<div className="flex flex-col gap-2 justify-center items-center">
				<img src="\images\small-logo-2.svg" alt="small-logo" />
				<p>اهدافت رو برنامه ریزی کن</p>
			</div>
			<Btn
				className="w-full"
				color="brand"
				style="filled"
				title="شروع"
				onClick={handleGoToHomePageBtn}
				IconEnd={CaretLeftIcon}
			/>
		</div>
	);
}
