import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../views/profile.vue';
const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});