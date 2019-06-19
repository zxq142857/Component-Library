<template>
  <div id="about">
    <iframe ref="audio" allow="autoplay" style="display:none" src="./../assets/audio/silent.MP3"></iframe>
    <video controls id="home-video" webkit-playsinline="true" playsinline="true" ></video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // hasClick: true
    }
  },
  created() {
    // this.FullScreen()
    this.$nextTick(()=>{
      this.$refs.audio.onload = ($event)=>{
        document.getElementById('home-video').src = '/media/movie.62a4fde8.mp4';

        document.getElementById('home-video').addEventListener("canplay",()=>{
            document.getElementById('home-video').play();
          })
      }
    })
  },
  methods: {
    //进入全屏
    FullScreen() {
      var ele = document.documentElement;
      if (ele .requestFullscreen) {
          ele .requestFullscreen();
      } else if (ele .mozRequestFullScreen) {
          ele .mozRequestFullScreen();
      } else if (ele .webkitRequestFullScreen) {
          ele .webkitRequestFullScreen();
      }
    },
    //退出全屏
    exitFullscreen() {
      var de = document;
      if (de.exitFullscreen) {
          de.exitFullscreen();
      } else if (de.mozCancelFullScreen) {
          de.mozCancelFullScreen();
      } else if (de.webkitCancelFullScreen) {
          de.webkitCancelFullScreen();
      }
    }
  }
}
</script>
<style lang="less" scoped>
  #home-video {
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    object-fit: fill;/*这里是关键*/
    width: auto;
    height: auto;
    -ms-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-color: #000;
    background-size: cover;
  }
  #about {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
</style>
 
