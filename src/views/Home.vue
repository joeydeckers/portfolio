<template>
  <div class="home row">
    <div class="col-md-5 color-half">
      <div class="col-md-9 mx-auto">
        <p class="intro-text"><strong>Welkom</strong> op mijn portfolio hier staat het werk op waar ik trots op ben, neem gerust een kijkje.</p>
      </div>
    </div>
    <div class="col-md-7">
      <img class="profile-picture" src="./../assets/joey.jpg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
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
    top: -55px;
    height: 100vh;
    background: #F00F39;
  }
  .profile-picture{
    display: block;
    margin: 130px auto;
    border-radius: 50%;
    width: 350px;
  }
</style>

