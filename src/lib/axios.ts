import { config } from "@/config";
import axios, { type AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  // withCredentials: false,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    // console.log("Axios", config);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let pendingQueue: {
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
}[] = [];

const processQueue = (error: unknown) => {
  pendingQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(null);
    }
  });
  pendingQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // console.log("Request Failed", error.response.data.message);

    const originalRequest = error.config as AxiosRequestConfig & {
      _retry: boolean;
    };
    // console.log(originalRequest);

    if (
      error.response.status === 401 &&
      error.response.data.message === "Invalid or Expired Token" &&
      !originalRequest._retry
    ) {
      // console.log("Your Token is expired");

      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject });
        })
          .then(() => axiosInstance(originalRequest))
          .catch((error) => Promise.reject(error));
      }

      isRefreshing = true;
      try {
        await axiosInstance.post("/auth/refresh-token");
        // console.log("New Token Arrived", res);

        processQueue(null);

        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(error);
        processQueue(error);
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }
    //* For Everything
    return Promise.reject(error);
  }
);
