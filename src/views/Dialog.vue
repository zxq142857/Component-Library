<template>
  <div class="dialog-model">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" @click="openDialog(1)">
          Dialog Model 1 -- 普通对话框
        </div>
        <div class="swiper-slide" @click="openDialog(2)">
          Dialog Model 2 -- 确认弹窗
        </div>
        <div class="swiper-slide" @click="openDialog(3)">
          Dialog Model 3 -- 提示弹窗
        </div>
      </div>
      <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>

    <!-- 普通对话框 -->
    <Dialog
      mode="common"
      title="普通对话框"
      width="588px"
      :dialog-visible="modulVisible1"
      @close="handleCloseDialog"
    >
      <!-- <template v-slot:footer>
          <div class="e-dialog-footer">
              <el-button class="btn-w140"  @click="handleCloseDialog">取消</el-button>
              <el-button class="e-btn-theme btn-w140" @click="handleCloseDialog">提交</el-button>
          </div>
      </template> -->
    </Dialog>

    <!-- 确认弹窗 -->
    <Dialog
      mode="comfirm"
      title="确认框"
      width="312px"
      :dialog-visible="modulVisible2"
      @close="comfirmCloseDialog"
    >
      <div class="m-p-sure">
        <p class="warning-icon"></p>
        <p class="warning-text">移除后，将无法获取项目最新数据权限</p>
      </div>
      <!-- <template v-slot:footer>
          <div class="e-dialog-footer">
              <el-button class="btn-w88"  @click="comfirmCloseDialog">取消</el-button>
              <el-button class="e-btn-theme btn-w88" @click="comfirmCloseDialog">提交</el-button>
          </div>
      </template> -->
    </Dialog>

    <!-- 提示弹窗 -->
    <Dialog
      mode="tips"
      title="提示框"
      width="312px"
      :dialog-visible="modulVisible3"
      @close="tipsCloseDialog"
    >
      <div class="m-p-sure">
        <p class="warning-icon"></p>
        <p class="warning-text">添加成功</p>
      </div>
      <!-- <template v-slot:footer>
          <div class="e-dialog-footer">
              <el-button class="btn-w88"  @click="tipsCloseDialog">取消</el-button>
              <el-button class="e-btn-theme btn-w88" @click="tipsCloseDialog">提交</el-button>
          </div>
      </template> -->
    </Dialog>

    <!-- 组件描述 -->
    <CodeBox>
      <template v-slot:codeIntro>
        <div class="description">
          <p>
            <code>mode</code>属性设置模态框的模型样式，值为'common', 'comfirm',
            'tips'，默认为'common'。<br />
            <code>title</code>属性设置Dialog 的标题，也可通过具名 slot 传入。<br />
            <code>width</code>属性设置Dialog 的宽度。<br />
            <code>dialog-visible</code>属性设置是否显示 Dialog。<br />
            <code>comfirmHandle</code>事件，当mode 为'common',
            'comfirm'，点击确认按钮的回调。<br />
            <code>close</code>事件，必须设置，Dialog 关闭的回调，无返回值。<br />
          </p>
        </div>
      </template>
      <template v-slot:code>
        <div class="highlight">
          <pre style="lineHeight:20px;">&lt;!-- 普通对话框 --&gt;</pre>
          <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
    <span class="hljs-attr">mode</span>=<span class="hljs-string">'common'</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">'普通对话框'</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">'588px'</span>
    <span class="hljs-attr">:dialog-visible</span>=<span class="hljs-string">"modulVisible1"</span>
    <span class="hljs-attr">@close</span>=<span class="currentPage">"handleCloseDialog"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span></code>
            </pre>
        </div>

        <div class="highlight">
          <pre>&lt;!-- 确认弹窗 --&gt;</pre>
          <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
    <span class="hljs-attr">mode</span>=<span class="hljs-string">'comfirm'</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">'确认框'</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">'312px'</span>
    <span class="hljs-attr">:dialog-visible</span>=<span class="hljs-string">"modulVisible2"</span>
    <span class="hljs-attr">@close</span>=<span class="currentPage">"comfirmCloseDialog"</span>&gt;</span>    
<span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span></code>
            </pre>
        </div>

        <div class="highlight">
          <pre>&lt;!-- 提示弹窗 --&gt;</pre>
          <pre>
              <code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
    <span class="hljs-attr">mode</span>=<span class="hljs-string">'tips'</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">'提示框'</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">'312px'</span>
    <span class="hljs-attr">:dialog-visible</span>=<span class="hljs-string">"modulVisible3"</span>
    <span class="hljs-attr">@close</span>=<span class="currentPage">"tipsCloseDialog"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span></code>
            </pre>
        </div>
      </template>
    </CodeBox>
  </div>
</template>

<script>
// @ is an alias to /src
import Dialog from "@/components/dialog.vue";
import CodeBox from "@/components/CodeBox.vue";
import Swiper from "swiper";

export default {
  name: "home",
  components: {
    Dialog,
    CodeBox
  },
  data() {
    return {
      modulVisible1: false,
      modulVisible2: false,
      modulVisible3: false
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      loop: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  methods: {
    handleCloseDialog() {
      this.modulVisible1 = false;
    },
    comfirmCloseDialog() {
      this.modulVisible2 = false;
    },
    tipsCloseDialog() {
      this.modulVisible3 = false;
    },
    openDialog(number) {
      this[`modulVisible${number}`] = true;
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../assets/less/common.less";
.swiper-container {
  width: 90%;
  height: 300px;
  text-align: center;
  margin: 20px auto;
  .swiper-slide {
    font-size: 30px;
    font-weight: 700;
    line-height: 300px;
    color: rgb(55, 1, 251);
    background-color: rgba(0, 251, 251, 0.5);
    border-radius: 5px;
  }
}

.m-p-sure {
  .warning-icon {
    margin: 0 auto;
    height: 32px;
    width: 32px;
    background: url("./../assets/img/status.png") no-repeat;
    background-position: 0px;
    margin: 0 auto;
  }
  .warning-text {
    height: 32px;
    font-size: 16px;
    font-weight: 400;
    color: #0ad288;
    line-height: 32px;
    text-align: center;
  }
}
</style>
