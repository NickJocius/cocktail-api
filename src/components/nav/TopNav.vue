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
}
</style>