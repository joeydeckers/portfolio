<template>
  <div class="home row">
    <Sidebar sideBarColor="#8C14FC" introText="Op deze pagina vind je " strongText="mijn werk."/>
    <b-col lg="8" sm="12">
      <b-col  lg="8" sm="12" class="mx-auto">
        <div id="work">
          <h3><strong>Mijn werk</strong></h3>
          <p>Hier kan je mijn werk vinden.</p>
          <div class="row ">
            <div class="col-md-6" v-for="myWork in myWorks" :key = myWork.id>
              <router-link :to="{ name: 'work', params: { name: myWork.name.toLowerCase()} }">
                  {{myWork.name}}  
              </router-link>
            </div>
            <div v-for="item in getAllProjects" :key="item.id">
             {{item.name}}
            </div>
          </div>
        </div>
      </b-col>
    </b-col>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar'
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'home',
  components: {
    Sidebar
  },
  data() {                                
      return {
        myWorks:[
          {
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
    },
    computed:{
      getAllProjects(){
        return this.$store.getters.getAllProjects;
      } 
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
  #work{
    position: relative;
    top: 190px;
    .col-md-6{
        padding: 0;
    }
  }
</style>

