export function TopBar({ title }: { title: string }) {
	return (
		<header className="flex gap-2 px-4 py-2 min-h-16 items-center justify-center bg-stone-100">
			<p className="font-bold text-stone-900">{title}</p>
		</header>
	);
}
