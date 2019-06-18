<template>
  <div class="e-tabs">
    <div class="tab" v-for="(item,index) in tabList" :key="index" @click="clickHandle(index)" :class="{'active': activeTab == index}">{{ item }}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      'tabList':Array,
      'currentIndex': Number
    },
    data() {
      return {
        activeTab: 0
      }
    },
    watch: {
      currentIndex(newValue,oldValue) {
        this.activeTab = newValue
      }
    },
    methods: {
      clickHandle(index) {
        this.$emit('changeIndexHandle',index)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  // TAB 栏
  .e-tabs {
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    color: #999999;
    line-height: 68px;
    overflow: hidden;
    position: relative;
    padding: 0 20px;
    border-bottom: 1px solid #DDDDDD;
    .tab {
      min-width: 64px;
      height: 68px;
      margin-right: 36px;
      float: left;
      border-bottom: 2px solid #fff;
      cursor: pointer;
    }
    .tab.active {
      color: rgba(51, 51, 51, 1);
      border-color: #fa6400;
    }
  }
</style>
