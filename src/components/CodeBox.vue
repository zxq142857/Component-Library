<template>
  <div id="code-box">
    <div
      class="control-box"
      @mouseover="showCode = true"
      @mouseout="showCode = false"
      @click="showInfo"
      v-show="!isShowInfo"
    >
      <i class="el-icon-caret-bottom" :class="{ hoving: showCode }"></i>
      <span v-show="showCode">显示代码</span>
    </div>
    <div class="meta" :style="{ height: infoHeight }" v-show="isShowInfo">
      <slot name="codeIntro"></slot>
      <slot name="code"></slot>
      <div
        class="control-box"
        @mouseover="hideBox = true"
        @mouseout="hideBox = false"
        @click="hideInfo"
      >
        <i class="el-icon-caret-top" :class="{ hoving: hideBox }"></i>
        <span v-show="hideBox">隐藏代码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeBox",
  data() {
    return {
      showCode: false,
      isShowInfo: false,
      infoHeight: "0px",
      hideBox: false
    };
  },
  methods: {
    showInfo() {
      this.isShowInfo = true;
      this.infoHeight = "max-content";
    },
    hideInfo() {
      this.isShowInfo = false;
    }
  }
};
</script>

<style lang="less" scoped>
.control-box {
  border-top: 1px solid #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  margin-top: -1px;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
  i {
    font-size: 16px;
    line-height: 44px;
    transition: 0.3s;
  }
  i.hoving {
    transform: translateX(-40px);
  }
  span {
    position: absolute;
    transform: translateX(-30px);
    font-size: 14px;
    line-height: 44px;
    transition: 0.3s;
    display: inline-block;
  }
}
.control-box:hover {
  color: #409eff;
  background-color: #f9fafc;
}

.meta {
  background-color: #fafafa;
  border-top: 1px solid #eaeefb;
  overflow: hidden;
  transition: height 0.2s;
}
</style>
