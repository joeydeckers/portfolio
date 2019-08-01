<template>
  <div class="home row">
    <div class="col-md-5 color-half">
      <div class="col-md-9 mx-auto">
        <p class="intro-text">Op deze pagina vindt je  <strong> mijn werk van Media.</strong></p>
      </div>
    </div>
    <div class="col-md-7">
      <div id="about" class="col-md-10 mx-auto">
        <h3><strong>Mijn werk</strong></h3>
        <p>Hier kan je mijn werk vinden.</p>
        <div class="row ">
            <!-- <div class="col-md-6" v-for="myWork in myWorks" :key = myWork.id>
                 <router-link :to="{ name: 'work', params: { text: myWork.text, name: myWork.name } }">
                     {{myWork.name}}
                 </router-link>
                 <a href="">Mijn formatieve indicatie van Media</a>
                 <a href="">Mijn feedpulse</a>
                  <router-link :to = myWork.url>
                     {{myWork.name}}
                 </router-link>
            </div> -->
            <div class="col-md-6">
                 <!-- <router-link :to="{ name: 'work', params: { text: myWork.text, name: myWork.name } }">
                     {{myWork.name}}
                 </router-link> -->
                 <div>
                    <a target="blank" href="http://joeydeckers.com/Formatieve_indicatie_Joey_Deckers.pdf">Mijn formatieve indicatie van Media</a>
                 </div>
                 <div>
                     <a  target="blank" href="http://joeydeckers.com/FeedPulse.pdf">Mijn feedpulse</a>
                 </div>
                  <!-- <router-link :to = myWork.url>
                     {{myWork.name}}
                 </router-link> -->
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {                                
      return {
        myWorks:[
          {
            name: 'Media week 1',
            url: '/mijn_werk/week1',
            //text: 'Als eerste opdracht heb ik een digital footprint gemaakt van een klasgenoot. Ook heeft iemand anders over mij een beeld proberen te krijgen door mijn digital footprint. Het kwam niet helemaal overeen met de persoon wie ik was, het vertelde meer over mijn loopbaan. Wat je vaak op internet ziet van mensen is een fractie van hoe ze echt zijn. Dat is de indruk die ik van deze opdracht heb gekegen. Privacy is het recht om bepaalde elementen van je leven voor jezelf te houden.'
          },
          {
            name: 'Media week 2',
            url: '/mijn_werk/week2',
          },
          {
            name: 'Media week 3',
            url: '/mijn_werk/week3',
          },
          {
            name: 'Media week 4',
            url: '/mijn_werk/week4',
          },
          {
            name: 'Media week 5',
            url: '/mijn_werk/week5',
          },
          {
            name: 'Media week 6',
            url: '/mijn_werk/week6',
          },
          {
            name: 'Media week 7 & 8',
            url: '/mijn_werk/werk7_8'
          }
        ]
      }
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
  }
</style>

