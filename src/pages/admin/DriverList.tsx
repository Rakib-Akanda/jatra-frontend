/* eslint-disable @typescript-eslint/no-explicit-any */
import PaginationComponent from "@/components/pagination";
import { Button } from "@/components/ui/button";

import {
  useDriverApproveMutation,
  useDriverInfoQuery,
} from "@/redux/features/driver/driver.api";
import { useState } from "react";

// import { format } from "date-fns";
import { toast } from "sonner";
const DriverList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const { data } = useDriverInfoQuery({ page: currentPage, limit });

  const [driverApprove] = useDriverApproveMutation(undefined);
  //   //   const [searchParams] = useSearchParams();

  //   //   const division = searchParams.get("division") || undefined;
  //   //   const tourType = searchParams.get("tourType") || undefined;
  //   console.log(data);

  const handleApprove = async (id: string) => {
    const approveData = {
      id,
      driverStatus: "APPROVED",
    };
    try {
      const res = await driverApprove(approveData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const handleSuspend = async (id: string) => {
    const approveData = {
      id,
      driverStatus: "SUSPENDED",
    };
    try {
      const res = await driverApprove(approveData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const handlePending = async (id: string) => {
    const approveData = {
      id,
      driverStatus: "PENDING",
    };
    try {
      const res = await driverApprove(approveData).unwrap();
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
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
                  Name: {items.name}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div>
                  <span className="font-semibold">Status: </span>
                  {items.driverStatus}
                </div>
                <div>
                  <span className="font-semibold">Email: </span>
                  {items.email}
                </div>
                <div>
                  <span className="font-semibold">NID: </span>
                  {items.NIDNumber}
                </div>
                <div>
                  <span className="font-semibold">License Number: </span>
                  {items.licenseNumber}
                </div>
                <div>
                  <span className="font-semibold">Vehicle Information</span>
                  <div className="pl-2">
                    <p>
                      <span className="font-medium"> Type: </span>
                      {items.vehicleInfo.vehicleType}
                    </p>
                    <p>
                      <span className="font-medium">Model: </span>
                      {items.vehicleInfo.vehicleModel}
                    </p>
                    <p>
                      <span className="font-medium">Number Plate: </span>
                      {items.vehicleInfo.vehicleNumberPlate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-evenly  pr-3">
              <Button
                onClick={() => handleApprove(items._id)}
                className="text-sm  text-white"
              >
                Approved
              </Button>
              <Button
                onClick={() => handleSuspend(items._id)}
                className="text-sm  text-white"
              >
                Suspended
              </Button>
              <Button
                onClick={() => handlePending(items._id)}
                className="text-sm  text-white"
              >
                Pending
              </Button>
            </div>
          </div>
        ))}
        <div>
          <PaginationComponent
            totalPage={totalPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DriverList;
