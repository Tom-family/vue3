import request from "@/utils/request";

export function login() {
  return request({
    url: "/api/login?account=13812345678&pwd=123456",
    method: "post",
  });
}
