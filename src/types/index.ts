import type { ComponentType } from "react";

export interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export type TRole = "SUPER_ADMIN" | "ADMIN" | "DRIVER" | "RIDER";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    Component: ComponentType;
  }[];
}
