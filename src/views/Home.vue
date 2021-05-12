<template>
  <div id="cesiumContainer" style="height: 100%"></div>
</template>

<script lang="ts">
import Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.viewer = new Cesium.Viewer("cesiumContainer");
    this.viewer.scene.debugShowFramesPerSecond = true;
    this.viewer.scene.globe.depthTestAgainstTerrain = true;
  },
});
</script>

<style></style>
