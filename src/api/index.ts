import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/api/user/login",
    method: "post",
    data
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

// 登录
export function userList(data) {
  return request({
    url: "/api/dataDayFootage/page",
    method: "post",
    data:data
  });
}

