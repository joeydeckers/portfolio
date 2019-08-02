<template>
  <div class="home row">
    <!-- <div class="col-md-4 color-half">
      <div class="col-md-9 mx-auto">
        <p class="intro-text"><strong>Welcome</strong> on my portfolio! Here I will show you work which I'm most proud of. You will also get to know me! </p>
      </div>
    </div> -->
    <Sidebar sideBarColor="#F00F39" strongText="fullstack webdeveloper." introText="Hi there my name is Joey Deckers and I'm a"/>
    <div class="col-md-8">
      <img class="profile-picture" src="./../assets/joey.jpg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar'

export default {
  name: 'home',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
  .intro-text{
    position: relative;
    top: 38vh;
    color: #F0F0F0;
    line-height: 35px;
    font-size: 25px;
  }
  .color-half{
    position: relative;
    height: 100vh;
    // background: #F00F39;
  }
  .profile-picture{
    display: block;
    margin: 220px auto;
    border-radius: 50%;
    width: 350px;
  }
</style>

