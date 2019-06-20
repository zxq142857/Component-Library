<template>
  <div class="select-model clearfix">
    <el-menu
      default-active="1"
      class="el-menu-vertical"
      @select="handleSelect">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">二级联动</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">三级联动</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-cpu"></i>
        <span slot="title">多级联动</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">单选</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-ice-drink"></i>
        <span slot="title">多选</span>
      </el-menu-item>
    </el-menu>
    <div class="display-box">
        <LinkageSelector ref="linkageselector" @showNext="getProjectDepartment" :selectorData = "departmentOptions"></LinkageSelector>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LinkageSelector from "@/components/linkageSelector.vue";
import CodeBox from "@/components/CodeBox.vue";

export default {
  name: "Select",
  components: {
    LinkageSelector,CodeBox
  },
  data() {
    return {
        // 项目部列表数据
        departmentOptions: [],
    }
  },
  created() {
    this.getProjectDepartment()
    this.$nextTick(()=>{
        this.$refs.linkageselector.addListener()
    })
  },
  methods:{
    // 获取项目部列表
    getProjectDepartment(id) {
      this.$axios.get('http://xmjyapi.ehaofang.net/api/projectDepartment/v1',{
        params: {
          parentId: id || 0
        },
        headers: {
            'token': localStorage.getItem('token')
        }
      }).then((res)=>{
        if(res.data.code === 200) {
          this.departmentOptions = res.data.data
        }
      })
    },
  }    
};
</script>

<style lang="less" scoped>
    @import "./../assets/less/common.less";
    .select-model {
        border-bottom: 50px solid #e6e6e6;
    }
    .el-menu-vertical {
        width: 250px;
        float: left;
        border-right: solid 1px #e6e6e6; 
    }
    .display-box {
        margin: 20px auto;
        height: 200px;
        width: 400px;
        border-radius: 10px;
        border: 1px solid #dddddd;
        background-color: rgba(221, 221, 221, 0.08);
        box-shadow: 0 0 10px 10px #dddddd;
        .e-selector {
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>

