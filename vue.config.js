// vue.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require("copy-webpack-plugin");
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: "/",
  configureWebpack: (config) => {
    const cwp = new CopyWebpackPlugin({
      patterns: [
        {
          from: "./node_modules/cesium/Build/Cesium", // 调试时，将Cesium换成CesiumUnminified
          to: "js/cesium",
          toType: "dir",
        },
      ],
    });
    config.plugins.push(cwp);
  },
};
