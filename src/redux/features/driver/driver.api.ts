import { baseApi } from "@/redux/baseApi";
import type { Driver } from "@/types/driver.type";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    driverApply: builder.mutation<Driver, unknown>({
      query: (driverData) => ({
        url: "/drivers/apply",
        method: "POST",
        data: driverData,
      }),
    }),
    driverApprove: builder.mutation({
      query: ({ id, driverStatus }) => ({
        url: `/drivers/approve/${id}`,
        method: "POST",
        data: { driverStatus },
      }),
      invalidatesTags: ["DRIVER"],
    }),

    driverInfo: builder.query({
      query: (params) => ({
        url: "/drivers",
        method: "GET",
        params,
      }),
      providesTags: ["DRIVER"],
    }),
  }),
});

export const {
  useDriverApplyMutation,
  useDriverInfoQuery,
  useDriverApproveMutation,
} = driverApi;
