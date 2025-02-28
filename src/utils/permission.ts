import router from "../router";
import { useCounterStore } from "@/stores/user";

const whiteList = ["/login"];

router.beforeEach(async (to: any, from, next) => {
  const counterStore = useCounterStore();
  const { token } = counterStore;
  document.title = to.meta.title ? to.meta.title : "你好啊";
  if (token) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({ path: "/login" });
    }
  }
});

router.afterEach(() => {});
