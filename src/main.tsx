import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const container = document.getElementById("root");

if (container == null) {
	throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(container);
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
