<template>
  <div class="home row">
    <Sidebar sideBarColor="#8C14FC" introText="On this page you will find " strongText="my work."/>
    <div class="col-md-7">
      <div id="about" class="col-md-10 mx-auto">
        <h3><strong>Mijn werk</strong></h3>
        <p>Hier kan je mijn werk vinden.</p>
        <div class="row ">
            <div class="col-md-6" v-for="myWork in myWorks" :key = myWork.id>
                 <router-link :to="{ name: 'work', params: { name: myWork.name.toLowerCase()} }">
                     {{myWork.name}} 
                 </router-link>
            </div>
        </div>
      </div>
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
  },
  data() {                                
      return {
        myWorks:[
          {
            id: 1,
            name: 'FitFood',
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

