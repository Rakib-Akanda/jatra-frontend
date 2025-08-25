import { ApplyDriver } from "@/pages/rider/ApplyDriver";
import MyRides from "@/pages/rider/MyRides";
import Ride from "@/pages/rider/Ride";
import type { ISidebarItem } from "@/types";

export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Rider Dashboard",
    items: [
      {
        title: "Ride Request",
        url: "/rider/ride",
        Component: Ride,
      },
      {
        title: "My Rides",
        url: "/rider/me",
        Component: MyRides,
      },
      {
        title: "Apply for Driver",
        url: "/rider/apply-driver",
        Component: ApplyDriver,
      },
    ],
  },
];
