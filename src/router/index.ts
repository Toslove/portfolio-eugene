import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/blog", name: "blog", component: BlogPage },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: "smooth",
          });
        }, 100);
      });
    }

    return { top: 0, behavior: "smooth" };
  },
});

export default router;