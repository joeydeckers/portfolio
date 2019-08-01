<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <div>
      <b-navbar id="nav" toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Joey Deckers | Portfolio</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <!-- <b-nav-item to="/reflectie">Reflectie</b-nav-item> -->
            <b-nav-item to="/mijn_werk">Mijn werk</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  .container-fluid{
    padding: 0;
  }
  .row{
    margin: 0 !important;
  }
}
#nav {
  max-width: 1300px;
  margin: 0 auto;
  background: transparent !important;
  z-index: 10;
  .nav-link{
    color: #272A2C;
  }
  .navbar-brand{
    color: #F0F0F0;
  }
}
</style>
