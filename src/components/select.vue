<template>
  <!-- 基于elementUI的select的二次封装 -->
  <!-- 动态加载数据 -->
  <div class="e-selector">
    <el-cascader :props="dynamicProps"></el-cascader>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let ids = 0;
export default {
  name: "Select",
  props: {
    // selectorData: Array
  },
  data() {
    let self = this;
    return {
      // 动态加载数据
      dynamicProps: {
        lazy: true,
        lazyLoad(node, resolve) {
          console.log(node);
          let { value } = node;
          value = value ? value : 0;
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          console.log(self.getProjectDepartment(value));
          self.getProjectDepartment(value).then(res => {
            console.log(res);
            resolve(res);
          });
        }
      }
    };
  },
  created() {
    // this.setProps();
  },
  computed: {},
  watch: {
    // eslint-disable-next-line no-unused-var
  },
  methods: {
    async getProjectDepartment(id) {
      let res = await this.$axios.get(
        "http://xmjyapi.ehaofang.net/api/projectDepartment/v1",
        {
          params: {
            parentId: id || 0
          },
          headers: {
            token: localStorage.getItem("token")
          }
        }
      );
      if (res.data.code === 200) {
        // let resultData = [];
        res.data.data.forEach(element => {
          // resultData.push({
          //   label: element.name,
          //   value: element.id,
          //   leaf: !element.hasSubset
          // });
          element.label = element.name;
          element.value = element.id;
          element.leaf = !element.hasSubset;
        });
        // return resultData;
        return res.data.data;
      }
    },
    setProps() {
      let self = this;
      this.dynamicProps = {
        lazy: true,
        lazyLoad(node, resolve) {
          console.log(node);
          let { value } = node;
          value = value ? value : 0;
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          self.getProjectDepartment(value).then(res => {
            console.log(res);
            resolve(res);
          });
        }
      };
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
