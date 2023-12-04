import { Router, createRouter, createWebHistory } from "vue-router";
import routes from "./modules/routers";

const router: Router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
  routes: routes,
});

// 路由前置导航守卫
router.beforeEach((to, _from, next) => {
  // 404处理
  if (!to.name) {
    return router.replace({
      name: "NotFound",
    });
  }
  next();
});

export default router;
