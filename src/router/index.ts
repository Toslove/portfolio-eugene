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

  //  Permet de scroller vers /#section même en venant de /blog
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        // attendre que HomePage + sections soient rendues
        setTimeout(() => {
          resolve({ el: to.hash, behavior: "smooth" });
        }, 80);
      });
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;