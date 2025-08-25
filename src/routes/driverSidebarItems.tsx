import MyRides from "@/pages/driver/MyRides";
import Rides from "@/pages/driver/Rides";
import type { ISidebarItem } from "@/types";

export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "Driver Dashboard",
    items: [
      {
        title: "Rides",
        url: "/driver/rides",
        Component: Rides,
      },
      {
        title: "My Rides",
        url: "/driver/my-rides",
        Component: MyRides,
      },
    ],
  },
];
