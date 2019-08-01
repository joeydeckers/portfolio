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
        <h3><strong>Media week 6</strong></h3>
        <p>Voor Media week 6 hebben we voor het eerst kennis gemaakt met het concept van UX. We moesten een scenario schrijven en die uitwerken naar storyboard, tevens moesten wij ook een uitwerking met van een deel van ons prototype.</p>
        <p><strong>Scenario</strong></p>
        <p>De medewerker komt aan op het kantoor, hij logt in het systeem. Op zijn mail ziet hij dat hij verschillende orders moet gaan verwerken. Hij selecteert een willkeurige robot die beschikbaar is en vervolgens plant hij de route van de robot uit. De robot geeft terug aan dat hij in gebruik is. Wanneer de robot klaar is vinkt de medewerker zijn taak af en gaat hij verder met de volgende.</p>
        <img src="./../assets/screenshot_week_6.png" alt="">
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

