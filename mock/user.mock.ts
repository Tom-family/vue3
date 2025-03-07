import { defineMock } from "vite-plugin-mock-dev-server";

export default defineMock({
  url: "/fik/userInfo",
  method: "GET",
  status:200,
  delay:2000,  //延迟时间
  body:{
    code:'090999'
  }
});
