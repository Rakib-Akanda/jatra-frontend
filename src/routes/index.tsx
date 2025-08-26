import { createBrowserRouter, Navigate } from "react-router";
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Verify from "@/pages/Verify";
import Unauthorized from "@/pages/Unauthorized";
import withAuth from "@/utils/withAuth";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import generateRoutes from "@/utils/generateRoutes";
import { riderSidebarItems } from "./riderSidebarItems";
import { driverSidebarItems } from "./driverSidebarItems";
import { adminSidebarItems } from "./adminSidebarItems";

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
        path: "/about",
        Component: About,
      },
    ],
  },
  // admin route
  {
    path: "/admin",
    Component: withAuth(
      DashboardLayout,
      (role.admin || role.superAdmin) as TRole
    ),
    children: [
      {
        index: true,
        element: <Navigate to={"/admin/driverList"} />,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  // driver route
  {
    path: "/driver",
    Component: withAuth(DashboardLayout, role.driver as TRole),
    children: [
      {
        index: true,
        element: <Navigate to={"/driver"} />,
      },
      ...generateRoutes(driverSidebarItems),
    ],
  },
  // rider route
  {
    path: "/rider",
    Component: withAuth(DashboardLayout, role.rider as TRole),
    children: [
      {
        index: true,
        element: <Navigate to={"/rider/ride"} />,
      },
      ...generateRoutes(riderSidebarItems),
    ],
  },

  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/verify",
    Component: Verify,
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
]);
