<template>
  <div class="hello-world">
    <div class="pick-type-button">
      <div>所有工作地</div>
      <div @click="showPickList('workType')">所有工作类型</div>
      <div @click="showPickList('issueDate')">所有发布时间</div>
    </div>
    <div class="picker">
      <div class="work-type">
        <ul class="pick-list" ref="workType">
          <li @click="workTypePickHandle('不限')">
            不限<span v-show="workType == '不限'">√</span>
          </li>
          <li @click="workTypePickHandle('实习')">
            实习<span v-show="workType == '实习'">√</span>
          </li>
          <li @click="workTypePickHandle('兼职')">
            兼职<span v-show="workType == '兼职'">√</span>
          </li>
          <li @click="workTypePickHandle('全职')">
            全职<span v-show="workType == '全职'">√</span>
          </li>
        </ul>
      </div>
      <div class="issue-date">
        <ul class="pick-list" ref="issueDate">
          <li @click="issueDatePickHandle('不限')">
            不限<span v-show="issueDate == '不限'">√</span>
          </li>
          <li @click="issueDatePickHandle('3天')">
            3天<span v-show="issueDate == '3天'">√</span>
          </li>
          <li @click="issueDatePickHandle('7天')">
            7天<span v-show="issueDate == '7天'">√</span>
          </li>
          <li @click="issueDatePickHandle('14天')">
            14天<span v-show="issueDate == '14天'">√</span>
          </li>
          <li @click="issueDatePickHandle('30天')">
            30天<span v-show="issueDate == '30天'">√</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      currentPicker: "workType",
      workType: "不限",
      issueDate: "不限"
    };
  },
  methods: {
    showPickList(pickType) {
      this.$refs[this.currentPicker].style.display = "none";
      this.$refs[pickType].style.animationName = "wrapper-gradient";
      this.$refs[pickType].style.display = "block";
      this.currentPicker = pickType;
    },
    workTypePickHandle(value) {
      this.workType = value;
      this.$refs.workType.style.animationName = "wrapper-gradient-hide";
    },
    issueDatePickHandle(value) {
      this.issueDate = value;
      this.$refs.issueDate.style.animationName = "wrapper-gradient-hide";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "./../assets/css/common.css";
// reset css
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}

// less css
.pick-type-button {
  height: 48px;
  background: rgba(255, 255, 255, 1);
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.work-type,
.issue-date {
  position: absolute;
  overflow: hidden;
  width: 100%;
  .pick-list {
    animation-name: initialize-wrapper;
    animation-duration: 0.6s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    overflow: hidden;
  }
}
.picker {
  position: relative;
  .pick-list {
    width: 100%;
    font-size: 14px;
    line-height: 40px;
    text-align: left;
    box-sizing: border-box;
    border-radius: 0 0 3px 3px;
    box-sizing: border-box;
    background-color: #fff;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      border-bottom: 1px solid #dddddd;
    }
  }
}
</style>
