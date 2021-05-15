<template>
  <div id="cesiumContainer" style="height: 900px"></div>
</template>

<script lang="ts">
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  data() {
    return {};
  },
  mounted() {
    (window as any).CESIUM_BASE_URL = "./js/cesium";
    const viewer = new Cesium.Viewer("cesiumContainer");
    viewer.scene.debugShowFramesPerSecond = true;
    viewer.scene.globe.depthTestAgainstTerrain = true;
  },
});
</script>

<style></style>
