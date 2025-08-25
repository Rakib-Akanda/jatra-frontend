export interface ISendOtp {
  email: string;
}

export interface IVerifyOtp {
  email: string;
  otp: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginRes {
  success?: boolean;
  statusCode?: number;
  message?: string;
  dat?: Data;
}

export interface Data {
  accessToken?: string;
  refreshToken?: string;
  user?: User;
}

export interface User {
  _id?: string;
  name?: string;
  email?: string;
  role?: string;
  auths?: Auth[];
  password?: string;

  gender?: string;
  dateOfBirth?: string;
  phone?: string;
  image?: string;
  address?: string;

  isDeleted?: boolean;
  isVerified?: boolean;
  isActive?: boolean;

  onlineStatus?: "ONLINE" | "OFFLINE";

  createdAt?: string;
}

export interface Auth {
  provider?: string;
  providerId?: string;
}
