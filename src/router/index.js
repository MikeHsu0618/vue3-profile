import { createRouter, createWebHistory } from "vue-router";
import Profile from '../views/profile.vue';
const routes = [
  {
    path: "/",
    name: "profile",
    component: Profile,
  },
];

export default createRouter({
  history: createWebHistory('/vue3-profile/'),
  routes,
});