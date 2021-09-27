<template>
  <div class="RouteDiv p-py-2">
    <TopNav />
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn animate_slow"
      leave-active-class="animated fadeOut"
    >
      <router-view :key="$route.fullPath"> </router-view>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn animate_slow"
      leave-active-class="animated fadeOut "
    >
    </transition>
  </div>
  <Footer />
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
  width: 100%;
  height: 100vh;
  margin: 0;
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
  margin: 0;
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

.p-menubar {
  padding-right: 0;
  padding-left: 0;
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
  background: rgb(156, 71, 231) !important;
  background: -moz-linear-gradient(
    140deg,
    rgba(156, 71, 231, 0.9248074229691877) 22%,
    rgba(218, 45, 150, 0.9780287114845938) 59%,
    rgba(223, 1, 1, 0.7959558823529411) 87%
  );
  background: -webkit-linear-gradient(
    140deg,
    rgba(156, 71, 231, 0.9248074229691877) 22%,
    rgba(218, 45, 150, 0.9780287114845938) 59%,
    rgba(223, 1, 1, 0.7959558823529411) 87%
  ) !important;
  background: linear-gradient(
    140deg,
    rgba(156, 71, 231, 0.9248074229691877) 22%,
    rgba(218, 45, 150, 0.9780287114845938) 59%,
    rgba(223, 1, 1, 0.7959558823529411) 87%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9c47e7",endColorstr="#df0101",GradientType=1);
}

.p-button:enabled:active {
  background: rgb(156, 71, 231) !important;
  border-color: black !important;
}

.p-selectbutton .p-button.p-highlight:active {
  border-color: black !important;
}

.p-selectbutton .p-button.p-highlight {
  background: black !important;
  border-color: black !important;
}

.p-submenu-list {
  font-family: var(--PermMarker);
}

/**** Media queries */
@media screen and (max-width: 960px) {
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-text {
    color: black !important;
    font-family: var(--Stoot);
    letter-spacing: 0.1rem;
  }
}
@media screen and (min-width: 960px) {
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-text {
    color: yellow !important;
  }
}
</style>
