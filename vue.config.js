module.exports = {
  // webpack 配置，键值对象时会合并配置，为方法时会改写配置
  // https://cli.vuejs.org/guide/webpack.html#simple-configuration
  configureWebpack: {
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      axios: "axios",
      swiper: "Swiper",
      jquery: "$",
      "vue-router": "VueRouter",
      "element-ui": "ELEMENT"
    }
  }
};
