import Vue from "vue";
import VueRouter from "vue-router";
import Layouts from "@/views/Layouts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layouts.Default,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
