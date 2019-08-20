<template>
  <b-col lg="4" sm="12" class="no-padding-mobile">
    <div class="affix color-half" :style="{background:sideBarColor}">
      <b-col lg="9"  class="mx-auto">
        <p class="intro-text">
          {{introText}}
          <strong>{{strongText}}</strong>
        </p>
      </b-col>
    </div>
  </b-col>
</template>

<style lang="scss" scoped>
.intro-text {
  position: relative;
  top: 38vh;
  color: #f0f0f0;
  line-height: 35px;
  font-size: 25px;
  @media screen and (max-width: 768px){
    text-align: center;
    font-size: 35px;
    top: 45vh;
  }
  @media screen and (max-width: 425px){
    line-height: 40px;
  }
}

.no-padding-mobile{
  @media screen and (max-width: 768px){
    padding: 0; 
  }
}

.color-half {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100vh;
  width: 660px;
  @media screen and (max-width: 1440px){
    width: 450px;
  }
  @media screen and(max-width: 768px) {
    position: static;
    width: 100%;
  }
}
</style>

<script>
export default {
  props: {
    sideBarColor: {
      type: String,
      required: true
    },
    strongText: {
      type: String,
      required: true
    },
    introText: {
      type: String,
      required: true
    }
  }
};
</script>
