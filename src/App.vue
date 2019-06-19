<template>
  <div id="app">
    <!-- Navigate -->
    <div class="nav-router">
      <router-link to="/">Pagination</router-link>
      <router-link to="/dialog">Dialog</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs"

export default {
  name: 'app',
  components: {
    'tab': Tabs
  },
  data() {
    return {
      // Tab栏相关
      currentTab: 0,
      tabList: ['基本信息','维护历程','跟进记录','修改日志'],
    }
  },
  methods: {
    changeIndexHandle(val) {
      this.currentTab = val;
    }
  }
}
</script>

<style lang="less" scoped>
@import "./assets/less/reset.less";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothin: grayscale;
  color: #2c3e50;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #dddddd;
}

.nav-router {
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  color: #999999;
  line-height: 68px;
  overflow: hidden;
  position: relative;
  padding: 0 20px;
  border-bottom: 1px solid #DDDDDD;
  a {
    min-width: 64px;
    height: 68px;
    margin-right: 36px;
    float: left;
    border-bottom: 2px solid #fff;
    cursor: pointer;
  }
  a.router-link-exact-active {
    color: rgba(51, 51, 51, 1);
    border-color: #fa6400;
  }
}
</style>
