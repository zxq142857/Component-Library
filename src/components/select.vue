<template>
  <!-- 基于elementUI的select的二次封装 -->
  <!-- 动态加载数据 -->
  <div class="e-selector">
    <!-- 二级联动 -->
    <el-cascader
      :props="dynamicProps1"
      v-if="functionNumber == 1"
      @change="handleChange"
      v-model="value"
    ></el-cascader>
    <!-- 三级联动 -->
    <el-cascader
      :props="dynamicProps2"
      v-if="functionNumber == 2"
      @change="handleChange"
      v-model="value"
    ></el-cascader>
    <!-- 多级联动 -->
    <el-cascader
      :props="dynamicProps"
      v-if="functionNumber == 4"
      @change="handleChange"
      v-model="value"
    ></el-cascader>
    <el-cascader
      :props="dynamicProps3"
      v-if="functionNumber == 5"
      @change="handleChange"
      v-model="value"
    ></el-cascader>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
export default {
  name: "Select",
  props: {
    functionNumber: Number
  },
  data() {
    let self = this;
    let ids = 0;
    return {
      // 动态加载数据
      value: "",
      // 二级
      dynamicProps1: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            // eslint-disable-next-line no-unused-vars
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++ids,
              label: `选项${ids}`,
              leaf: level >= 1
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        }
      },
      // 三级
      dynamicProps2: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            // eslint-disable-next-line no-unused-vars
            const nodes = Array.from({ length: level + 1 }).map(item => ({
              value: ++ids,
              label: `选项${ids}`,
              leaf: level >= 2
            }));
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        }
      },
      // 多选
      dynamicProps3: {
        lazy: true,
        multiple: true,
        lazyLoad(node, resolve) {
          let { value } = node;
          value = value ? value : 0;
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          self.getProjectDepartment(value.id).then(res => {
            resolve(res);
          });
        }
      },
      // 多级
      dynamicProps: {
        lazy: true,
        checkStrictly: true,
        lazyLoad(node, resolve) {
          let { value } = node;
          value = value ? value : 0;
          // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          self.getProjectDepartment(value.id).then(res => {
            resolve(res);
          });
        }
      }
    };
  },
  created() {},
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
          element.value = {
            id: element.id,
            type: element.type
          };
          element.leaf = !element.hasSubset;
        });
        // return resultData;
        return res.data.data;
      }
    },
    handleChange(value) {
      console.log(this.value);
      console.log(value);
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../assets/css/element.css";
.e-selector {
  width: 320px;
  font-size: 14px;
  position: relative;
}
// 下拉框的样式
.el-radio__input.is-checked .el-radio__inner {
  border-color: #ff6a00 !important;
  background: #ff6a00 !important;
}
.el-cascader-node.is-selectable.in-active-path {
  color: #ff6a00 !important;
}
.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  color: #ff6a00 !important;
}
</style>
