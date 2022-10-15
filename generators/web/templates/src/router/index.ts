import { createRouter, createWebHashHistory } from "vue-router";

// 路由表
const routes = [
  {
    path: "/",
    component: () => import("../views/Index.vue"),
    name: "Index",
    meta: {
      position: "首页",
    },
  },
  // 404 页
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../share/error_page/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由守卫
// router.beforeEach((to, from) => {

// });

export { router };