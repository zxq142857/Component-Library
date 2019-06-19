<template>
  <div id="Dialog">
    <!-- 弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      :width = "width"
      :show-close = "false"
      @close = "close">
      <div class="e-dialog-body">
        <div class="e-dialog-title">{{ title }}<span @click="close" style="cursor:pointer;">×</span></div>
        <slot></slot>  
        <slot name="footer">
          <div class="e-dialog-footer">
            <el-button class="btn-w88"  @click="close">取消</el-button>
            <el-button class="e-btn-theme btn-w88" @click="close">确认</el-button>
          </div>
        </slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    'width': {
      default: '581px',
      type: String
    },
    'dialogVisible': {
      required: true,
      type:Boolean
    },
    'title': {
      default: '',
      type: String
    }
  },
  watch: {

  },
  data() {
    return {

    }
  },
  methods: {
    close() {
      this.$emit('close','')
    }
  }
}
</script>

<style lang="less" scoped>
  @import "./../assets/less/common.less";

  // 模态框样式
  .e-dialog-body {
    .e-dialog-title {
      font-size:20px;
      font-weight:bold;
      margin-top: 7px;
      margin-bottom: 23px;
      line-height: 20px;
      color:rgba(51,51,51,1);
      span {
        position: absolute;
        top: 18px;
        right: 22px;
        font-size: 24px;
        font-weight: 400;
        line-height: 1;
      }
    }
    .e-dialog-footer {
      margin: 32px 0 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn-w88:first-child {
        margin-right: 34px;
      }
    }
  }
</style>
