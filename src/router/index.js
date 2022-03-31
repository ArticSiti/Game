import { createRouter, createWebHistory } from "vue-router";
import LevelNormal from "@/views/LevelApp.vue";
import Home from "@/views/home.vue";
import middle from "@/views/middle.vue";
import complex from "@/views/complex.vue";
const routes = [
  {
    path: "/",
    name: "home",
    componet: Home,
    component: () =>
      import("../views/home.vue"),
  },
  {
    path: "/level",
    name: "level",
    componet: LevelNormal,
    component: () =>
      import("../views/LevelApp.vue"),
  },  
  {
    path: "/middle",
    name: "middle",
    componet: middle,
    component: () =>
      import("../views/middle.vue"),
  },  
  {
    path: "/complex",
    name: "complex",
    componet: complex,
    component: () =>
      import("../views/complex.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
