import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./plugins/matomo";
import installAxios from "./plugins/axios";
import installAntd from "./plugins/antd";

const app = createApp(App);
installAntd(app);
installAxios(app);

app.use(store).use(router).mount("#app");
