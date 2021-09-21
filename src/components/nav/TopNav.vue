<template>
  <div id="TopNav">
    <MenuBar :model="items"> </MenuBar>
  </div>
</template>

<script>
import MenuBar from "primevue/menubar";
import { ref } from "vue";

export default {
  name: "TopNav",
  components: {
    MenuBar,
  },
  setup() {
    const items = ref([
      {
        label: "Home",
        to: { name: "Home" },
        icon: "pi pi-home",
      },
      {
        label: "Cocktails",
        to: { name: "Cocktails" },
        icon: "pi pi-arrow-circle-down",
      },
    ]);
    return { items };
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#TopNav {
  position: fixed;
  min-width: 100%;
  z-index: 9999;
}
</style>