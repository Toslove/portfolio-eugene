import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// Forcer définitivement le mode sombre
document.documentElement.setAttribute("data-theme", "dark");
localStorage.removeItem("theme");

createApp(App).use(router).mount("#app");