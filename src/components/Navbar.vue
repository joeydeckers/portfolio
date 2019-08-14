<template>
  <b-navbar id="nav" class="fixed-top" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Joey Deckers | Portfolio</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About me</b-nav-item>
        <b-nav-item to="/mijn-werk">My work</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss" scoped>
#nav {
//   max-width: 1300px;

  margin: 0 auto;
  background: transparent !important;
  z-index: 10;
  .nav-link {
    color: #272a2c;
  }
  .navbar-brand {
    color: #f0f0f0;
  }
}
</style>
