<template>
  <TopNav />
  <div class="RouteDiv p-py-4">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn animate_slow"
      leave-active-class="animated fadeOut"
    >
      <router-view :key="$route.fullPath"> </router-view>
    </transition>
  </div>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn animate_slow"
    leave-active-class="animated fadeOut "
  >
    <Footer />
  </transition>
</template>

<script>
import TopNav from "./components/nav/TopNav.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: "App",

  components: {
    TopNav,
    Footer,
  },
};
</script>

<style>
/* Global-General*/
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Staatliches&display=swap");
:root {
  --PermMarker: "Permanent Marker", cursive;
  --Stoot: "Staatliches", cursive;
}
html {
  width: 100vw;
  min-width: 100vw;
}
body {
  margin: 0;
  min-width: 100%;
  height: 100vh;
  background: black;
}
.RouteDiv {
  min-width: 100%;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  min-width: 100%;
  min-height: 100vh;
}

/* TopNav base styles */
.p-menubar
  .p-menubar-root-list
  > .p-menuitem
  > .p-menuitem-link
  .p-menuitem-text {
  color: yellow !important;
  font-family: var(--Stoot);
  letter-spacing: 0.1rem;
}

.p-menubar
  .p-menubar-root-list
  > .p-menuitem
  > .p-menuitem-link
  .p-menuitem-text:hover {
  color: rgb(159, 71, 231) !important;
}
.p-overlaypanel {
  background: #2e5bfd75 !important;
}
.p-menubar
  .p-menubar-root-list
  > .p-menuitem
  > .p-menuitem-link
  .p-menuitem-icon {
  color: rgb(159, 71, 231) !important;
}

.p-dataview .p-dataview-header {
  background: rgb(159, 71, 231) !important;
}

.p-submenu-list {
  font-family: var(--PermMarker);
}
</style>
