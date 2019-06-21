<template>
  <div id="Dialog">
    <!-- 弹窗 -->
    <el-dialog
      :visible.sync="visible"
      :width="width"
      :show-close="false"
      @close="dialogCloseHandle"
    >
      <div class="e-dialog-body" :class="{ 'e-comfirm-body': !isCommon }">
        <slot name="title">
          <!-- 普通对话框title -->
          <div class="e-dialog-title" v-if="isCommon">
            {{ title
            }}<span @click="dialogCloseHandle" style="cursor:pointer;">×</span>
          </div>
        </slot>

        <slot></slot>

        <slot name="footer">
          <!-- 默认的普通对话框footer -->
          <div class="e-dialog-footer" v-if="isCommon">
            <el-button class="btn-w88" @click="dialogCloseHandle"
              >取消</el-button
            >
            <el-button class="e-btn-theme btn-w88" @click="dialogComfirmHandle"
              >确认</el-button
            >
          </div>

          <!-- 默认的确认框footer -->
          <div class="e-dialog-footer" v-if="isComfirm">
            <el-button class="btn-w60" @click="dialogCloseHandle"
              >取消</el-button
            >
            <el-button class="e-btn-theme btn-w60" @click="dialogComfirmHandle"
              >确认</el-button
            >
          </div>
        </slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    width: {
      default: "581px",
      type: String
    },
    dialogVisible: {
      required: true,
      type: Boolean
    },
    title: {
      default: "",
      type: String
    },
    mode: {
      default: "common",
      validator: value => {
        // 这个值必须匹配下列字符串中的一个  common:普通对话框  comfirm：确认框  tips：提示框
        return ["common", "comfirm", "tips"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    // 计算当前mode的类型
    isCommon() {
      return this.mode === "common" ? true : false;
    },
    isComfirm() {
      return this.mode === "comfirm" ? true : false;
    },
    isTips() {
      return this.mode === "tips" ? true : false;
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    dialogVisible(newValue, oldValue) {
      this.visible = newValue;
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    // 关闭模态框
    dialogCloseHandle() {
      this.visible = false;

      this.$emit("close", "");
    },
    dialogComfirmHandle() {
      this.visible = false;

      this.$emit("comfirmHandle", "");
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../assets/less/common.less";
</style>
