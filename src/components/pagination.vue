<template>
  <el-pagination
    class="e-pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="CurrentPages"
    :page-size="PageSize"
    layout="total, prev, pager, next"
    :total="total"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageSize: Number,
    total: Number,
    currentPage: Number
  },
  data() {
    return {
      PageSize: this.pageSize,
      CurrentPages: 1
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    currentPage(newValue, oldValue) {
      this.CurrentPages = newValue;
    }
  },
  methods: {
    handleSizeChange(value) {
      if (!this.$parent.handleSizeChange) return;
      this.$parent.handleSizeChange(value);
    },
    handleCurrentChange(value) {
      this.$parent.handleCurrentChange(value);
    }
  }
};
</script>

<style lang="less" scoped>
.e-pagination {
  padding: 19px;
  float: right;
  /deep/.el-pagination__total {
    color: rgba(153, 153, 153, 1);
  }
  /deep/button .el-icon {
    color: #dddddd;
  }
  /deep/.el-pager .active {
    color: #ff6a00 !important;
  }
  /deep/.el-pager li {
    font-weight: normal;
  }
  /deep/.el-pager li.btn-quicknext {
    color: #999999 !important;
  }
  /deep/.el-pager li.btn-quickprev {
    color: #999999 !important;
  }
  /deep/.el-pager li:hover {
    color: #ff6a00;
  }
  /deep/.el-pager .number,
  .el-pager .el-icon-more {
    color: #999999;
  }
}
</style>
