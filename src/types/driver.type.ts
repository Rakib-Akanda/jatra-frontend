interface IVehicleInfo {
  vehicleType: string;
  vehicleModel: string;
  vehicleNumberPlate: string;
}
export interface Driver {
  userId: string;
  NIDNumber: number;
  licenseNumber: number;
  vehicleInfo: IVehicleInfo;
}

export interface IDriverStatus {
  APPROVED: "APPROVED";
  SUSPENDED: "SUSPENDED";
  PENDING: "PENDING";
}
