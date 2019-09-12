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
// 基于elementUI的模态框样式重置
/deep/.el-dialog__header {
  display: none;
}
/deep/.el-dialog__body {
  padding: 20px 20px;
  position: relative;
}
// 模态框样式
.e-dialog-body {
  padding: 0 20px;
  .e-dialog-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 23px;
    line-height: 20px;
    color: rgba(51, 51, 51, 1);
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
    margin: 32px 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    // 设置button默认间距
    .btn-w140:first-child {
      margin-right: 30px;
    }
    .btn-w88:first-child {
      margin-right: 24px;
    }
    .btn-w60:first-child {
      margin-right: 10px;
    }
  }
}
.e-comfirm-body {
  padding: 0;
  .e-dialog-footer {
    margin-top: 22px;
  }
}

// 基于elementUI的按钮样式
.el-button {
  background-color: #f3f3f3;
}
.e-btn {
  color: #ff6a00;
  padding: 8px 17px;
  border-radius: 2px;
  margin-left: 11px !important;
  border: 1px solid rgba(255, 106, 0, 1);
}
.e-btn-medium {
  color: rgba(51, 51, 51, 1);
  padding: 8px 56px;
  border-radius: 2px;
  background: rgba(243, 243, 243, 1);
  border: 1px solid rgba(221, 221, 221, 1);
}
.e-btn-theme {
  background-color: #ff6a00;
  border: 1px solid rgba(255, 106, 0, 1);
  color: #fff;
}
// 按钮宽度分类
.btn-w60 {
  width: 60px !important;
  padding: 8px 16px;
}
.btn-w88 {
  width: 88px !important;
}
.btn-w140 {
  width: 140px !important;
}
</style>
