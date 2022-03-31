import { createApp } from "vue";
import App from "./App.vue";
import Board2 from "./views/LevelApp.vue";
import router from "./router";

createApp(App, Board2)
  .use(router)
  .mount("#app");
