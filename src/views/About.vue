<template>
  <div class="home row">
    <b-col lg="4">
      <div class="affix color-half">
        <b-col lg="9" sm="12" class="mx-auto">
          <p class="intro-text">
            Op deze pagina vindt je
            <strong>mijn reflectie verslag.</strong>
          </p>
        </b-col>
      </div>
    </b-col>
    <b-col lg="8">
      <b-col id="about" lg="8" sm="12" class="mx-auto">
        <h3 class="introduction">
          <strong>About me</strong>
        </h3>
        <hr align="left" />
        <div class="paragraph">
          <h5>
            <strong>Introduction</strong>
          </h5>
          <p>
            Hi there! I'm Joey Deckers I'm a
            <strong>fullstack developer</strong>
            based in the Netherlands. I started programming when I was 15 years old, it started with creating simple games but later I decided to shift my focus towards webdevelopment. When I'm not busy with coding I'm mostly busy with designing my applications. I am currently studying Software Engineering at Fontys University of Applied Sciences in the Netherlands.
          </p>
        </div>

        <div class="paragraph">
          <h5>
            <strong>My experience</strong>
          </h5>
          <hr align="left" />
          <p>
            I worked for established companies in the dutch tech industry but also for small startup companies. In 2019 I decided to start my own company called
            <a
              target="blank"
              href="https://pivoxa.com"
            >Pivoxa.</a> My company focusses on creating websites, webapps and apps.
          </p>
        </div>

        <div class="paragraph">
          <h5>
            <strong>My skillset</strong>
          </h5>
          <hr align="left" />
          <p>
            I mostly work with
            <strong>VueJS and Laravel</strong> to build my fullstack applications. When I'm designing I use
            <strong>Adobe XD</strong> or
            <strong>Sketch</strong>, I love building good looking webapps and apps.
          </p>
        </div>

        <div class="paragraph">
          <h5>
            <strong>My resume</strong>
          </h5>
          <hr align="left" />
          <button>Resume</button>
        </div>
      </b-col>
    </b-col>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "myWork",
  components: {}
};
</script>

<style lang="scss" scoped>
.intro-text {
  position: relative;
  top: 38vh;
  color: #f0f0f0;
  line-height: 35px;
  font-size: 25px;
}
.color-half {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100vh;
  background: #136cf4;
  @media screen and(max-width: 425px) {
    position: static;
  }
}
.profile-picture {
  display: block;
  margin: 130px auto;
  border-radius: 50%;
  width: 350px;
}
#about {
  position: relative;
  top: 190px;
  .introduction {
    margin-bottom: 20px;
  }
  .paragraph{
    margin: 25px 0 25px 0;
  }
}
</style>

