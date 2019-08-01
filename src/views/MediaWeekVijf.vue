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
        <h3><strong>Media week 5</strong></h3>
        <p>Voor week 5 heb ik kennis gemaakt met het programma van Google wat DialogFlow heet, hier kan je als gebruiker een chat maken. Hiermee kan je een chat maken waar het lijkt alsof je als het ware praat met een persoon. Wat bedrijven hier vaak meedoen is dat ze hier in kunnen spelen op de wensen die jij hebt. Het is tevens ook een manier van klantenwerving.</p>
        <p>Voor de opdracht zelf heb ik een chatbot gemaakt die gebasseerd is op het fictieve personage van Game of Thrones. Het personage is Jon Snow. Ik heb het gemaakt dat je met Jon kan praten over verschillende dingen die actueel zijn in zijn wereld. Daarnaast heb ik de chat weergeven op een website</p>
        <a href="http://joeydeckers.com/chat_website/" target="blank">Klik hier</a>
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

