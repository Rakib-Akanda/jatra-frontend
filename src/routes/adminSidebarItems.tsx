import DriverList from "@/pages/admin/DriverList";
import RideList from "@/pages/admin/RideList";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Drivers",
        url: "/admin/driverList",
        Component: DriverList,
      },
      {
        title: "Rides",
        url: "/admin/rides",
        Component: RideList,
      },
    ],
  },
];
