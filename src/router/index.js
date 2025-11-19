// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import LegalView from "@/views/LegalView.vue";

// Creators index (cards page)
import CreatorsIndexView from "@/views/CreatorsIndexView.vue";

// Individual creator views
import CreatorKaraxivyrView from "@/views/creators/CreatorKaraxivyrView.vue";
// NOTE: creatorAbelix / creatorVaelora routes are not wired yet.

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/creators",
    name: "creatorsIndex",
    component: CreatorsIndexView,
  },
  {
    path: "/creators/karaxivyr",
    name: "creatorKaraxivyr",
    component: CreatorKaraxivyrView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/legal",
    name: "legal",
    component: LegalView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
