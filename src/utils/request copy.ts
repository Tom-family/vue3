import axios, { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const service: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: 5000,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const token = getToken();
    // if (token) {
    //   config.headers.authorization = `${token}`;
    // }

    //if (config.data instanceof FormData) {
    //   config.headers["Content-Type"] = "multipart/form-data";
    // } else if (typeof config.data === "object") {
    //   config.headers["Content-Type"] = "application/json";
    // } else {
    //   config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    // }
    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    //  如果是二进制文件  或者excel  或者其他类型  因为没有res.data   所以直接返回数据   然后浏览下载
    // if(response.headers['content-type']&&response.headers['content-type'].indexOf('excel')>=0){
    //   return(response.data);
    // }else if (response.data.code === 0||response.config['responseType']==="blob") {
    //   return(response.data);
    // }
    if (response.status === 200) {
      return response;
    } else {
      Promise.reject();
    }
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
  }
);

export default service;
