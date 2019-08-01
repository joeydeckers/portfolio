<template>
  <div class="home row">
    <div class="col-md-5 color-half">
      <div class="col-md-9 mx-auto">
        <p class="intro-text">Op deze pagina vindt je  <strong> mijn reflectie verslag.</strong></p>
      </div>
    </div>
    <div class="col-md-7">
      <div id="about" class="col-md-10 mx-auto">
        <h3><strong>{{name}}</strong></h3>
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    props:[
        "text",
        "name"
    ],
    name: 'myWork',
    components: {
  },

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
    background: #8C14FC;
  }
  .profile-picture{
    display: block;
    margin: 130px auto;
    border-radius: 50%;
    width: 350px;
  }
  #about{
    position: relative;
    top: 190px;
  }
</style>

