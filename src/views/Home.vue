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
    let widget = new Cesium.Viewer("cesiumContainer");
  },
});
</script>

<style></style>
