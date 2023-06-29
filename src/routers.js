import SignIn from "./components/SignIn.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routers = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routers
});

export default router;
