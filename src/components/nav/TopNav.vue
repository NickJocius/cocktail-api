<template>
  <div id="TopNav">
    <MenuBar :model="items">
      <template #start>
        <img alt="logo" :src="neon" height="60" class="p-mr-2" />
      </template>
    </MenuBar>
  </div>
</template>

<script>
import MenuBar from "primevue/menubar";
import neon from "../../assets/images/neon.png";
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
        to: { name: "home" },
        icon: "pi pi-home",
      },
      {
        label: "Cocktails",

        icon: "pi pi-arrow-circle-down",
        items: [
          {
            label: "Categories",
            items: [
              {
                label: "Ordinary Drinks",
                to: { name: "category", params: { cat: "Ordinary Drink" } },
              },
              {
                label: "Cocktails",
                to: { name: "category", params: { cat: "Cocktail" } },
              },
              {
                label: "Milk/Floats/Shakes",
                to: {
                  name: "category",
                  params: { cat: "Milk / Float / Shake" },
                },
              },
              {
                label: "Cocoa",
                to: { name: "category", params: { cat: "Cocoa" } },
              },
              {
                label: "Shots",
                to: { name: "category", params: { cat: "Shot" } },
              },
              {
                label: "Coffee/Teas",
                to: { name: "category", params: { cat: "Coffee / Tea" } },
              },
              {
                label: "Homemade Liqueur",
                to: { name: "category", params: { cat: "Handmade Liqueur" } },
              },
              {
                label: "Punch/Party",
                to: {
                  name: "category",
                  params: { cat: "Punch / Party Drink" },
                },
              },
              {
                label: "Beer",
                to: { name: "category", params: { cat: "Beer" } },
              },
              {
                label: "Soda",
                to: {
                  name: "category",
                  params: { cat: "Soft Drink / Soda" },
                },
              },
            ],
          },
        ],
      },
    ]);
    return { items };
  },
  data() {
    return {
      neon,
    };
  },
};
</script>

<style scoped>
#TopNav {
  position: sticky;
  width: 100%;

  z-index: 9999;
  background: black;
  margin: 0;
}
.p-menubar-root-list {
  max-width: 100%;
}
.p-menubar {
  background: black;
  border: none;
  max-width: 100%;
  padding: 0 !important;
}

.p-menuitem-link:focus {
  outline: none;
}

.p-button:enabled:active {
  background: black !important;
  border-color: black;
}
</style>