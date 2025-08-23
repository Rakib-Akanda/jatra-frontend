import { createBrowserRouter } from "react-router";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";

// TODO:  @ die import korte hobe
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);
