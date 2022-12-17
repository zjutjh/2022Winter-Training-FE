import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import { createRouter, createWebHistory } from "vue-router";
import JS from "../components/JS.vue";
import CP from "../components/CP.vue";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    // localhost:5173/login
    // localhost:5173/login/js
    children: [
      {
        path: "js",
        component: JS
      },
      {
        path: "cp",
        component: CP
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;