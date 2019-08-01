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
        <h3><strong>Media week 4</strong></h3>
        <p>Voor media in week 4 zijn we begonnen met het thema big data we moeten data verzamelen an ons zelf en dan gaan verwerken in een visualisatie. Ik heb hiervoor een visualisatie gemaakt met behulp van javascript. Deze is ingeleverd op Canvas.</p>
        <p>Ik heb gebruik gemaakt van chart.js om de visualisatie van mijn fitness progressie weer te geven, ook heb ik de data van een vriend van mij gepakt om te vergelijken en daar een conclussie uit te trekken.</p>
        <a target="blank" href="http://joeydeckers.com/datavisualisatie/">Klik hier</a>
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

