import { createApp } from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/m/matomo";

import { Layout, Menu, Radio } from "ant-design-vue";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, Axios)
  .use(Layout)
  .use(Menu)
  .use(Radio)
  .mount("#app");
