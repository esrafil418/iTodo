import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { NotFound } from "./routes/-NotFound";
import { routeTree } from "./routeTree.gen";
import { TasksProvider } from "./shared/tasks.context";
import { StarredProvider } from "./shared/star.context";

const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound });

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
    <TasksProvider>
      <StarredProvider>
        <RouterProvider router={router} />
      </StarredProvider>
    </TasksProvider>
  </StrictMode>,
);
