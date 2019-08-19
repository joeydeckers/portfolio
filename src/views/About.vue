<template>
  <div class="home row">
    <Sidebar sideBarColor="#005aff" introText="Op deze pagina" strongText="leer je mij kennen."/>
    <b-col lg="8">
      <b-col id="about" lg="8" sm="12" class="mx-auto">
        <h3 class="introduction">
          <strong>Over mij</strong>
        </h3>
        <hr align="left" /> 
        <div class="paragraph">
          <h5>
            <strong>Introductie</strong>
          </h5>
          <p>
            Hallo daar! Mijn naam is Joey Deckers en ik ben een
            <strong>fullstack developer</strong>
            Ik ben begonnen met programmeren toen ik 15 jaar was, het begon met simpele games wat is uitgegroeid naar passie voor programmeren. Momenteel volg ik die studie HBO-ICT met de specialisatie Software Engineering. Deze studie volg ik aan de Fontys in Eindhoven.
          </p>
        </div>

        <div class="paragraph">
          <h5>
            <strong>Mijn ervaring</strong>
          </h5>
          <hr align="left" />
          <p>
            Ik heb gewerkt voor verschillende bedrijven in de Nederlands ICT wereld, hier heb ik veel geleerd met betrekking tot het maken van Wordpress websites tot aan complexe webapplicaties. Hierdoor heb ik ruime werkervaring verkregen met betrekking tot programmeren.
          </p>
        </div>

        <div class="paragraph">
          <h5>
            <strong>Mijn skillset</strong>
          </h5>
          <hr align="left" />
          <p>
            Ik werk voornamelijk met
            <strong>VueJS en Laravel</strong> om mijn fullstack applicaties te realiseren. Om een betere structuur van mijn projecten te hebben gebruik ik <strong>Vuex</strong> wanneer dat nodig is. Wanneer ik niet aan het programmeren ben design ik ook graag mijn applicaties, hiervoor gebruik ik <strong>Sketch </strong> of <strong>Adobe XD</strong>.
          </p>
        </div>

        <div class="paragraph">
          <h5>
            <strong>Mijn CV</strong>
          </h5>
          <hr align="left" />
          <Button text="Klik hier voor mijn CV" link="/" btnColor="#005aff"/>
        </div>
      </b-col>
    </b-col>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar'
import Button from '@/components/Button'

export default {
  components: {
    Sidebar,
    Button
  }
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
  .paragraph {
    margin: 25px 0 25px 0;
  }
}
</style>

