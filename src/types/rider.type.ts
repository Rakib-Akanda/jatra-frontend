interface Location {
  lat: number;
  lon: number;
}

export interface RideRequest {
  riderId: string;
  vehicleType: string;
  pickup: Location;
  destination: Location;
}

interface Fare {
  baseFare: number;
  distanceFare: number;
  timeFare: number;
  discount: number;
  actualFare: number;
}

export interface RideResponse {
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: RideRequest;
  distance?: number;
  estimatedDuration?: number;
  status?: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  fare?: Fare;
}
