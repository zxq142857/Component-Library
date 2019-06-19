<template>
  <div class="dialog-model">
     <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" @click="modulVisible1 = true">Dialog Model 1</div>
            <div class="swiper-slide">Dialog Model 2</div>
            <div class="swiper-slide">Dialog Model 3</div>
        </div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-pagination"></div>
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    <!-- 标准弹窗 -->
    <Dialog 
        title = '模型一'
        width = '708px'
        :dialog-visible="modulVisible1" 
        @close="handleCloseDialog" >
    </Dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import Dialog from "@/components/dialog.vue";
import Swiper from 'swiper';

export default {
  name: "home",
  components: {
    Dialog
  },
  data() {
    return {
        modulVisible1: false
    }
  },
  mounted() {
    new Swiper ('.swiper-container', {
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        loop: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable :true
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
  },
  methods:{
     handleCloseDialog() {
         this.modulVisible1 = false
     }
  }    
};
</script>

<style lang="less" scoped>
    // @import "./../assets/less/common.less"
     .swiper-container {
        width: 500px;
        height: 300px;
        text-align: center;
        margin: 20px auto;
        .swiper-slide {
            font-size: 30px;
            font-weight: 700;
            line-height: 300px;
            color: rgb(55, 1, 251);
            background-color: rgba(0,251,251,.5);
            border-radius: 5px;
        } 
    }
</style>
