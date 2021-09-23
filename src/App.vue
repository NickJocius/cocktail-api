<template>
  <TopNav />
  <router-view></router-view>
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
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
/* TopNav base styles */
.p-menubar
  .p-menubar-root-list
  > .p-menuitem
  > .p-menuitem-link
  .p-menuitem-text {
  color: yellow !important;
}

.p-menubar
  .p-menubar-root-list
  > .p-menuitem
  > .p-menuitem-link
  .p-menuitem-text:hover {
  color: rgb(159, 71, 231) !important;
}

.p-menubar
  .p-menubar-root-list
  > .p-menuitem
  > .p-menuitem-link
  .p-menuitem-icon {
  color: rgb(159, 71, 231) !important;
}
</style>
