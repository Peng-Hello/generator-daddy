import {
  createRouter,
  createWebHashHistory,
  onBeforeRouteLeave,
} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./../views/Index.vue"),
    name: "Login",
    meta: {
      position: "Login",
    },
  },

  // 404 页
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("./../share/404.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {});

export { router };
