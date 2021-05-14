// vue.config.js

// eslint-disable-next-line @typescript-eslint/no-var-requires
const CopyWebpackPlugin = require("copy-webpack-plugin");
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: "/cloudgis/",
  configureWebpack: (config) => {
    const cwp = new CopyWebpackPlugin({
      patterns: [
        {
          from: "./node_modules/cesium/Build/Cesium", // 调试时，将Cesium换成CesiumUnminified
          to: "js/Cesium",
          toType: "dir",
        },
      ],
    });
    config.plugins.push(cwp);

    // config.externals = config.externals || {};
    // config.externals.cesium = 'Cesium';
  },
};
