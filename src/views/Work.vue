<template>
  <keep-alive>
    <div id="work" class="row">
      <Sidebar sideBarColor="#8C14FC" introText="On this page you will find " :strongText="getInfo[0].title"/>
      <b-col lg="8" sm="12">
        <b-col lg="8" sm="12" class="mx-auto">
          <div id="about">
            <carousel id="carousel" :perPage=1>
              <slide v-for="picture in getInfo[0].pictures" :key="picture.key">
                 <img :src="picture" alt="">
              </slide>
            </carousel> 
            <div>
              <h3><strong> {{getInfo[0].title}}</strong></h3>
              {{getInfo[0].text}}
              <Button text="Bekijk api op github" :link="getInfo[0].link" btnColor="#8C14FC"/>
            </div>
          </div>
        </b-col>
      </b-col>
    </div>
  </keep-alive>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar'
import Button from '@/components/Button'

import { Carousel, Slide } from 'vue-carousel'

import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
      return{
        projectName : "",
      }
    },
    props:[
        "name",
        "sideBarText"
    ],
    name: 'myWork',
    components: {
      Sidebar,
      Carousel,
      Slide,
      Button
    },
    computed:{
      getInfo(){
        return this.$store.getters.getSpecificItem(this.projectName)
      }
    },
    created(){
      this.projectName = this.name;
    }

}
</script>

<style lang="scss" scoped>
  #work{
    .intro-text{
      position: relative;
      top: 38vh;
      color: #F0F0F0;
      line-height: 35px;
      font-size: 25px;
    }
    .profile-picture{
      display: block;
      margin: 80px auto;
      border-radius: 50%;
      width: 350px;
    }
    #about{
      position: relative;
      top: 80px;
    }

    #carousel{
      img{
        width: 100%;
        height: 500px;
        object-fit: cover;
      }
    }
  }

</style>

