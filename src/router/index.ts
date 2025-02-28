import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "登录",
      },
    },
    {
      path: "/",
      redirect:'/home'
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        title: "首页",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      meta: {
        title: "我的",
      },
    },
  ],
});

export default router;
