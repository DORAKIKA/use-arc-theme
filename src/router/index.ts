import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home.vue";
import Website from "../pages/website.vue";
import Palette from "../pages/palette.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/website/:url",
    component: Website,
  },
  {
    path: "/palette",
    component: Palette,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
