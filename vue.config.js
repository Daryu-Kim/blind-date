const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/Dami',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_variabled";
        `
      }
    }
  }
});
