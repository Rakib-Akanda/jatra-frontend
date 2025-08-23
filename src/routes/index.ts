import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";


// TODO:  @ die import korte hobe
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);
