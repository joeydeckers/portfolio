<template>
  <div id="app">
    <Navbar />
    <b-container fluid>
      <router-view></router-view>
    </b-container>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
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
