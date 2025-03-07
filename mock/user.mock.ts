import { defineMock } from "vite-plugin-mock-dev-server";
import Mock from "mockjs";

export default defineMock([
  {
    url: "/fik/userInfo",
    method: "GET",
    status: 200,
    delay: 2000, //延迟时间
    body: {
      code: "090999",
    },
  },
  {
    url: "/fik/user/info",
    delay: 1000,
    body: {
      code: 0,
      message: "OK",
      result: Mock.mock({
        "list|10": [
          {
            "id|+1": 1,
          },
        ],
      }),
    },
  },
]);
