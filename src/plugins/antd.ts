import { createApp } from "vue";
import { Layout, Menu, Radio } from "ant-design-vue";

export default (app: ReturnType<typeof createApp>): void => {
  app.use(Layout);
  app.use(Menu);
  app.use(Radio);
};
