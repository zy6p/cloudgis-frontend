import Axios from "axios";
import VueAxios from "vue-axios";

export default (app: any) => {
  app.use(VueAxios, Axios);
};
