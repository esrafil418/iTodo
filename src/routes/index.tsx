import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	const value = localStorage.getItem("started");
	const started: boolean = value ? JSON.parse(value) : false;
	const destination = started ? "/home" : "/intro";

	return <Navigate to={destination} />;
}
