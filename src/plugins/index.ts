import { createApp } from "vue";
import antd from "@/plugins/antd";
import axios from "@/plugins/axios";
import "@/plugins/matomo";

export default function loadAllPlugins(
  app: ReturnType<typeof createApp>
): void {
  axios(app);
  antd(app);
}
