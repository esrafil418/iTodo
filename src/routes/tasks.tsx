import { CheckCircleIcon, CircleIcon, StarIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { BottomBar } from "../components/BottomBar";
import { TopBar } from "../components/TobBar";
import useLocalStorage from "../hooks/useLocalStorage";
import { sampleTasks, type Task } from "./-tasks";

export const Route = createFileRoute("/tasks")({
	component: RouteComponent,
});

function RouteComponent() {
	const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [...sampleTasks]);

	const isEmpty = tasks.length <= 0;

	return (
		<div className="flex flex-col h-dvh">
			<TopBar title="کارها" />
			{isEmpty ? (
				<main className="flex flex-col p-4 gap-8 justify-center items-center flex-1">
					<img src="\images\indicator.svg" alt="indicator" className="h-50" />
					<div className="flex flex-col gap-1 justify-center items-center">
						<p className="text-2xl font-bold text-stone-900">
							فعلا کاری نداریم!
						</p>
						<p>
							میتونی از اون پایین <br />
							کار جدید تعریف کنی!
						</p>
						<img
							src="\images\down-arrow.svg"
							alt="Down Arrow"
							className="h-30 mt-8"
						/>
					</div>
				</main>
			) : (
				<main className="flex flex-col p-4 gap-8 justify-start items-center flex-1 overflow-y-auto hide-scrollbar">
					<div className="flex flex-col gap-2 w-full">
						{tasks.map((t: Task) => (
							<TaskItem
								key={t.id}
								id={t.id}
								title={t.title}
								isCompleted={t.isCompleted}
								onCompletedBtnClick={() => {
									const clonedTasks = [...tasks];
									const changedTasks = clonedTasks.map((ct) =>
										ct.id === t.id
											? { ...ct, isCompleted: !ct.isCompleted }
											: ct,
									);
									setTasks(changedTasks);
								}}
							/>
						))}
					</div>
				</main>
			)}
			<BottomBar />
		</div>
	);
}

type TaskItemProps = {
	id: Task["id"];
	title: Task["title"];
	isCompleted: boolean;
	onCompletedBtnClick?: () => void;
};

function TaskItem({
	id,
	title,
	isCompleted,
	onCompletedBtnClick,
}: TaskItemProps) {
	id;

	const IsCompletedIcon = isCompleted ? CheckCircleIcon : CircleIcon;
	return (
		<div
			key={id}
			className={`flex w-full h-12 ${isCompleted ? "text-stone-600" : "text-stone-900"}`}
		>
			<button
				type="button"
				className="cursor-pointer p-3"
				onClick={onCompletedBtnClick}
			>
				<IsCompletedIcon size={24} />
			</button>
			<button
				type="button"
				className={`cursor-pointer rounded-full hover:bg-amber-100 flex-1 text-start px-3 ${isCompleted ? "line-through" : ""}`}
			>
				{title}
			</button>
			<button type="button" className="cursor-pointer p-3">
				<StarIcon size={24} />
			</button>
		</div>
	);
}
