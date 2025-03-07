import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/login/Login.vue";
import Layout from "@/views/Layout/index.vue";

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
      redirect: "/home",
      component: Layout,
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/Home.vue"),
          meta: {
            title: "首页",
            keep: true,
            header: true,
            tabbar: true,
            code: 1,
          },
        },
        {
          path: "/my",
          name: "my",
          component: () => import("@/views/my/My.vue"),
          meta: {
            title: "我的",
            keep: false,
            header: true,
            tabbar: true,
            code: 2,
          },
        },
      ],
    },
  ],
});

export default router;
