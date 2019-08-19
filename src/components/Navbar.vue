<template>
  <b-navbar id="nav" class="fixed-top" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Joey Deckers | Portfolio</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/over-mij">Over mij</b-nav-item>
        <b-nav-item to="/mijn-werk">Mijn werk</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
#nav {
  margin: 0 auto;
  background: transparent !important;
  z-index: 10;
  .nav-link {
    color: #272a2c;
    @media screen and (max-width: 425px){
      color: #fff;
    }
  }
  .navbar-brand {
    color: #f0f0f0;
  }
  .navbar-toggler{
    border-color: transparent;
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
}
</style>
