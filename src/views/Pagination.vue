<template>
  <div class="pagination-model">
    <div class="display-box">
      {{ currentPage }}
    </div>
    <div class="clearfix">
      <Pagination
        :page-size="10"
        :total="totalCount"
        :current-page="currentPage"
      />
    </div>
    <CodeBox>
      <template v-slot:codeIntro>
        <div class="description">
          <p>
            <code>page-size</code>属性设置每页显示条目个数。<br />
            <code>total</code>属性设置总条目数。<br />
            <code>current-page</code>属性设置当前页数。
            必须设置<code>handleCurrentChange</code>事件，返回值是当前页。<br />
          </p>
        </div>
      </template>
      <template v-slot:code>
        <div class="highlight">
          <pre>
                <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>
    <span class="hljs-attr">page-size</span>=<span class="hljs-string">"10"</span>
    <span class="hljs-attr">total</span>=<span class="hljs-string">"totalCount"</span>
    <span class="hljs-attr">:current-page</span>=<span class="currentPage">"50"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Pagination</span>&gt;</span></code>
              </pre>
        </div>
      </template>
    </CodeBox>
  </div>
</template>

<script>
// @ is an alias to /src
import Pagination from "@/components/pagination.vue";
import CodeBox from "@/components/CodeBox.vue";

export default {
  name: "home",
  components: {
    Pagination,
    CodeBox
  },
  data() {
    return {
      totalCount: 888,
      currentPage: 1
    };
  },
  methods: {
    // currentPage 改变时会触发
    handleCurrentChange(value) {
      this.currentPage = value;
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../assets/less/common.less";
.display-box {
  margin: 50px auto;
  height: 300px;
  width: 500px;
  font-size: 50px;
  font-weight: 700;
  border-radius: 10px;
  text-align: center;
  line-height: 300px;
  border: 1px solid #dddddd;
  background-color: rgba(221, 221, 221, 0.08);
  box-shadow: 0 0 10px 10px #dddddd;
}
</style>
