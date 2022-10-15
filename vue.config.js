/* eslint-disable */
const { resolve } = require("path");
const { defineConfig } = require("@vue/cli-service");

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const stylelintFormatter = require("stylelint-formatter-pretty");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      new StyleLintPlugin({
        files: [resolve(__dirname, "src/**/*.{vue,scss}")],
        formatter: stylelintFormatter,
      }),
    ],
  },
});
