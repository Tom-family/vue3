import { defineMock } from "vite-plugin-mock-dev-server";

export default defineMock({
  url: "/fik/userInfo",
  method: "GET",
  status:200,
  body:{
    code:'090999'
  }
});
