import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import type { TRole } from "@/types";

const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.rider:
      return [...riderSidebarItems];
    case role.driver:
      return [...driverSidebarItems];
    case role.admin || role.superAdmin:
      return [...adminSidebarItems];
    default:
      return [];
  }
};

export default getSidebarItems;
