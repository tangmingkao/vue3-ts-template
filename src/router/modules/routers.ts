import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AppMain",
    component: () => import("@/components/layout/index.vue"),
    redirect: {
      name: "HomeView",
    },
    children: [
      {
        path: "",
        name: "HomeView",
        component: () => import("@/views/home/index.vue"),
      },
      {
        path: "user",
        name: "UserView",
        component: () => import("@/views/user/index.vue"),
        meta: {
          bottomForbidden: true,
        }
      },
      {
        path: "assets",
        name: "AssetsView",
        component: () => import("@/views/assets/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

export default routes;
