<template>
  <div id="about">
    <iframe ref="audio" allow="autoplay" style="display:none" src="./../assets/audio/silent.MP3"></iframe>
    <video 
      controls id="home-video" 
      webkit-playsinline="true" 
      playsinline="true" 
      loop
      src="./../assets/video/movie.mp4"
    >
    </video>
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
    width: 100%;
  }
  #about {
    width: 100%;
    padding: 50px 99px;
    box-sizing: border-box;
    position: relative;
  }
</style>
 
