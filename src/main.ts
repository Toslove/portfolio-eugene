import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// force encore le sombre une fois Vue lancé
document.documentElement.setAttribute("data-theme", "dark");

createApp(App).use(router).mount("#app");