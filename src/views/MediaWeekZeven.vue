<template>
  <div class="home row">
    <div class="col-md-5 ">
        <div class="affix color-half">
            <div class="col-md-9 mx-auto">
        <p class="intro-text">Op deze pagina vindt je  <strong> mijn werk van Media.</strong></p>
      </div>
    </div>
    </div>
    <div class="col-md-7">
      <div id="about" class="col-md-10 mx-auto">
        <h3><strong>Media week 7 & 8</strong></h3>
        <p>In week 7 en 8 van de cursus ben ik begonnen aan een nieuwe portfolio opdracht omdat dit een opdracht was van het vak Media. Ik ben als eerste begonnen om een design te maken, als eerste heb ik gekeken naar verschillende portfolio's een daar heb ik uiteindelijk een keuze uitgemaakt. Ik heb alle andere kwaliteiten van de verschillende designs combineert in een design.</p>
        <img src="./../assets/home_design.jpg">
        <p>Daarnaast heb ik mijn portfolio geschreven in het JavaScript framework Vue.JS, dit heb ik gedaan omdat ik wat extra uitdaging wou hebben. Ook heb ik SCSS gebruikt om wat betere stijlcode te schrijven.</p>
        <p>De rest van mijn portfolio heb ik zo dynamisch mogelijk opgebouwd omdat ik dan deze later kan gaan hergebruiken.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .intro-text{
    position: relative;
    top: 38vh;
    color: #F0F0F0;
    line-height: 35px;
    font-size: 25px;
  }
  .color-half{
    position: fixed;
    top: 0px;
    left: 0;
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
    .col-md-6{
        padding: 0;
    }
    img{
        width: 700px;
        margin-bottom: 10px;
    }
    video{
      width: 400px;
    }
    a{
      display: block;
      margin-bottom: 10px;
    }
  }
</style>

