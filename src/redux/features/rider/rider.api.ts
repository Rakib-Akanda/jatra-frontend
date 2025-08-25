import { baseApi } from "@/redux/baseApi";
import type { RideRequest, RideResponse } from "@/types/rider.type";

export const riderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    rideRequest: builder.mutation<RideResponse, RideRequest>({
      query: (rideReqData) => ({
        url: "/rides/request",
        method: "POST",
        data: rideReqData,
      }),
    }),
    updateRideStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/rides/${id}/status`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["RIDE"],
    }),
    getRiderRides: builder.query({
      query: (params) => ({
        url: "/rides/me",
        method: "GET",
        params,
      }),
      providesTags: ["RIDE"],
    }),
    getAllRiderRides: builder.query({
      query: (params) => ({
        url: "/rides",
        method: "GET",
        params,
      }),
      providesTags: ["RIDE"],
    }),
  }),
});

export const {
  useRideRequestMutation,
  useUpdateRideStatusMutation,
  useGetRiderRidesQuery,
  useGetAllRiderRidesQuery,
} = riderApi;
