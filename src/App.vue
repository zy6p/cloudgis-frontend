<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo">
        <img src="https://static.hotdry.top/logo3.png" alt="hotdry" />
      </div>
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>数据组织</span>
            </span>
          </template>
          <a-menu-item key="sub1-1">导入数据</a-menu-item>
          <a-menu-item key="sub1-2">导出数据</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>图层管理</span>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <user-outlined />
              <span>地理处理</span>
            </span>
          </template>
          <a-menu-item key="sub2-1">矢量算法</a-menu-item>
          <a-menu-item key="sub2-2">栅格算法</a-menu-item>
          <a-menu-item key="sub2-3">网络算法</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <team-outlined />
              <span>测绘作业</span>
            </span>
          </template>
          <a-menu-item key="sub3-1">全站仪作业</a-menu-item>
          <a-menu-item key="sub3-2">RTK 作业</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Hotdry @ 2021 CopyRight
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    PieChartOutlined,
    UserOutlined,
    TeamOutlined,
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(["1"]),
    };
  },
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
