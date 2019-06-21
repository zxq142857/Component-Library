<template>
  <div class="e-selector">
    <div class="e-input">
      <input
        type="text"
        id="Options"
        placeholder="请选择"
        class="e-selector-value"
        :value="selectorValue.join(' / ')"
        @focus="openOptions"
        autocomplete="off"
      />
      <i
        class="e-selector-icon el-input__icon"
        :class="showOptions ? 'el-icon-arrow-up' : ' el-icon-arrow-down'"
      ></i>
    </div>
    <div class="e-options-box" v-show="showOptions" id="e-selector-box">
      <ul class="e-options">
        <li
          v-for="(item, index) in firstOptions"
          :key="index"
          @click="showNextOptions(item, 1)"
          id="Options"
        >
          <span id="Options">{{ item.name }}</span>
          <i
            class="el-icon-arrow-right el-cascader-node__postfix"
            id="Options"
          ></i>
        </li>
      </ul>
      <ul
        class="e-options"
        v-for="(children, index) in nextOptions"
        :key="index"
      >
        <li
          v-for="(item, keyid) in children"
          :key="keyid"
          @click="showNextOptions(item, index + 2)"
          id="Options"
        >
          <span id="Options">{{ item.name }}</span>
          <i
            class="el-icon-arrow-right el-cascader-node__postfix"
            v-if="item.hasSubset"
            id="Options"
          ></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkageSelector",
  props: {
    selectorData: Array
  },
  data() {
    return {
      selectorValue: [],
      currentIdValue: null,
      showOptions: false,
      currentTier: 0,
      nextTier: 1,
      // 展开的次级选项数据
      firstOptions: null,
      nextOptions: []
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    selectorData(newValue, oldValue) {
      if (this.nextTier === 1) {
        this.currentTier += 1;
        this.firstOptions = newValue;
      } else {
        this.nextOptions.push(newValue);
      }
    }
  },
  methods: {
    openOptions() {
      this.showOptions = true;
    },
    // 初始化
    initialize() {
      this.selectorValue = [];
      this.currentIdValue = "";
      this.showOptions = false;
      this.currentTier = 0;
      this.nextTier = 1;
      this.firstOptions = null;
      this.nextOptions = [];
    },
    // 监听事件
    listenerHandle(e) {
      if (e.target.id !== "Options") {
        this.showOptions = false;
      }
    },
    // 添加监听事件
    addListener() {
      let body = document.querySelector("body");
      body.addEventListener("click", this.listenerHandle);
    },
    // 移除监听事件
    removeListener() {
      let body = document.querySelector("body");
      body.removeEventListener("click", this.listenerHandle);
    },
    showNextOptions(item, index) {
      // 记录当前点击项ID
      this.currentIdValue = item.id;

      // 记录层级
      this.nextTier = index + 1;
      this.currentTier = index;

      // 点击项为没有子项时
      if (!item.hasSubset) {
        this.showOptions = false;
        if (
          this.nextTier == this.currentTier + 1 ||
          this.nextTier == this.currentTier ||
          this.nextTier < this.currentTier
        ) {
          this.selectorValue.splice(
            this.nextTier - 2,
            this.selectorValue.length
          );
          // 点击为最后一项，删除最后一列
          this.nextOptions.splice(this.nextTier - 3, this.nextOptions.length);
          this.currentTier = index;
        }
        return this.selectorValue.push(item.name);
      }
      // 修改Input框的值,点击已经展示的节点则删除对应的长度
      this.selectorValue.splice(this.nextTier - 2, this.selectorValue.length);
      this.nextOptions.splice(this.nextTier - 2, this.nextOptions.length);
      this.selectorValue.push(item.name);

      this.$emit("showNext", item.id);
    }
  }
};
</script>

<style lang="less" scoped>
// 样式格式化
input::-webkit-input-placeholder {
  font-size: 14px;
  color: #cccccc;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 14px;
  color: #cccccc;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 14px;
  color: #cccccc;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-size: 14px;
  color: #cccccc;
}

.e-selector {
  width: 320px;
  font-size: 14px;
  position: relative;
  .e-selector-value {
    height: 32px;
    line-height: 32px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    padding-right: 30px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    text-indent: 12px;
  }
  .e-selector-icon {
    width: 24px;
    height: 32px;
    color: #c0c4cc;
    line-height: 32px;
    position: absolute;
    right: 5px;
    top: 0;
  }
}
.e-options-box {
  position: absolute;
  top: 42px;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 14px;
  .e-options {
    min-width: 180px;
    max-height: 500px;
    overflow: scroll;
    box-sizing: border-box;
    color: #606266;
    border-right: 1px solid #e4e7ed;
    position: relative;
    margin: 0;
    padding: 6px 0;
    list-style: none;
    box-sizing: border-box;
    li {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 30px 0 20px;
      height: 34px;
      line-height: 34px;
      outline: none;
      span {
        flex: 1;
        padding: 0 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      i {
        position: absolute;
        right: 10px;
      }
    }
  }
}
.e-options-box:before,
.e-options-box:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  top: -6px;
  left: 30px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #dddddd;
}
.e-options-box:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  top: -4px;
  left: 31px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #fff;
}
</style>
