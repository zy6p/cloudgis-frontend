import { createApp } from "vue";
import Axios from "axios";
import VueAxios from "vue-axios";

export default (app: ReturnType<typeof createApp>): void => {
  app.use(VueAxios, Axios);
};
