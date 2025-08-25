/* eslint-disable @typescript-eslint/no-explicit-any */
import PaginationComponent from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import {
  useGetAllRiderRidesQuery,
  useUpdateRideStatusMutation,
} from "@/redux/features/rider/rider.api";

import { format } from "date-fns";
import { useState } from "react";
const MyRides = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const { data: userData } = useUserInfoQuery(null);
  //   console.log(userData?.data?.data?._id);
  //   console.log(userData);
  const { data } = useGetAllRiderRidesQuery({
    page: currentPage,
    limit,
    driverId: userData?.data?.data?._id,
  });
  const [updateRideStatus] = useUpdateRideStatusMutation(undefined);
  console.log(data);

  const handleCancel = async (id: string) => {
    const cancelData = {
      id,
      status: "CANCELLED",
    };
    const res = await updateRideStatus(cancelData).unwrap();
    console.log(res);
  };
  const totalPage = data?.data?.meta?.totalPage || 1;
  return (
    <div className="container mx-auto px-5 py-8 grid grid-cols-12 gap-5">
      {/* <TourFilters /> */}
      <div className="col-span-9 w-full">
        {data?.data?.data?.map((items: any, index: number) => (
          <div
            key={index}
            className="border border-muted rounded-lg shadow-md overflow-hidden mb-6 flex"
          >
            <div className="p-6 flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-primary">
                  Status: {items.status}
                </span>
                <Button
                  disabled={
                    items.status !== "REQUESTED" || items.status === "CANCELLED"
                  }
                  onClick={() => handleCancel(items._id)}
                  className="text-sm  text-white"
                >
                  Cancel
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div>
                  <span className="font-semibold">Pickup</span>
                  <div className="pl-2">
                    <p>
                      <span className="font-medium">Latitude: </span>
                      {items.pickup.lat}
                    </p>
                    <p>
                      <span className="font-medium">Longitude: </span>
                      {items.pickup.lon}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Destination</span>
                  <div className="pl-2">
                    <p>
                      <span className="font-medium">Latitude: </span>
                      {items.destination.lat}
                    </p>
                    <p>
                      <span className="font-medium">Longitude: </span>
                      {items.destination.lon}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="font-semibold">Distance: </span>{" "}
                  {items.distance}
                </div>
                <div>
                  <span className="font-semibold">Vehicle Type: </span>{" "}
                  {items.vehicleType}
                </div>
                {items?.fare?.actualFare && (
                  <div>
                    <span className="font-semibold">Fare</span>
                    <div className="pl-2">
                      <p>
                        <span className="font-medium">Base Fare: </span>
                        {items.fare.baseFare}৳
                      </p>
                      <p>
                        <span className="font-medium">Distance Fare: </span>
                        {items.fare.distanceFare}৳
                      </p>
                      <p>
                        <span className="font-medium">Time Fare: </span>
                        {items.fare.timeFare}৳
                      </p>
                      <p>
                        <span className="font-medium">Discount: </span>
                        {items.fare.discount}৳
                      </p>
                      <p>
                        <span className="font-medium">Total: </span>
                        {items.fare.actualFare}৳
                      </p>
                    </div>
                  </div>
                )}
                <div>
                  <span className="font-semibold">Time</span>
                  <div className="pl-2">
                    <p>
                      <span className="font-medium">Start Time: </span>
                      {format(
                        new Date(
                          items?.startTime ? items?.startTime : new Date()
                        ),
                        "PPpp"
                      )}
                    </p>
                    <p>
                      <span className="font-medium">End Time: </span>
                      {format(
                        new Date(items?.endTime ? items?.endTime : new Date()),
                        "PPpp"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <PaginationComponent
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MyRides;
