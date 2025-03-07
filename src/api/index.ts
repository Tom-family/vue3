import request from "@/utils/request";

export function login() {
  return request({
    url: "/api/login?account=13812345678&pwd=123456",
    method: "post",
  });
}

export function getUserInfo() {
  return request({
    url: "/fik/userInfo",
    method: "get",
  });
}

export function fikuserInfo(data) {
  return request({
    url: "/fik/user/info",
    method: "post",
    data:data
  });
}
