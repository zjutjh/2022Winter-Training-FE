import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;