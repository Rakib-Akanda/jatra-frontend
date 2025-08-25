import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import getSidebarItems from "@/utils/getSidebarItems";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData, isLoading } = useUserInfoQuery(undefined);
  const data = {
    navMain: getSidebarItems(userData?.data?.data?.role),
  };
  if (isLoading) {
    return <div className="min-h-screen bg-background">Loading...</div>;
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link to={"/"} className="text-primary hover:text-primary/90">
          <div className="flex items-center gap-3">
            <Logo />
            <h2 className="font-black text-xl">
              Jatr<span className="text-black">A</span>
            </h2>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
