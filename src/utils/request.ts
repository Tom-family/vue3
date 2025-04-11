import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useCounterStore } from "@/store/user";

const service: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: 5000,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const counterStore = useCounterStore();
    const token = counterStore.token;
    if (token) {
      config.headers["authorization"] = token;
    }

    config.headers["Content-Type"] = "application/json";
    // headerType 根据接口改动
    if (config.headers["headerType"] == 1) {
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      delete config.headers["headerType"];
    } else if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject();
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      if (response.data.code == 10000) {
        return response.data;
      } else {
        showToast(response.data.message);
        Promise.reject(response.data.message);
      }
    } else {
      Promise.reject(response);
    }
  },
  (error: AxiosError) => {
    showToast(error.message);
    return Promise.reject();
  }
);

export default service;
