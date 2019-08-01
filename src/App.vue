<template>
  <div id="app">
    <Navbar />
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  .container-fluid {
    padding: 0;
  }
  .row {
    margin: 0 !important;
  }
  hr {
    width: 60px;
    height: 2px;
    background-color: #000;
  }
}
</style>
