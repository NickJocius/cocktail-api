<template>
  <div id="CocktailsMain" class="p-d-flex p-flex-row p-jc-center p-ai-center">
    <div class="card">
      <h1>Categories</h1>
      <div
        class="p-d-flex p-js-between p-flex-column p-flex-md-row"
        id="CategoryBox"
      >
        <span
          v-for="c in categories"
          :key="c.strCategory"
          class="p-mx-2 p-px-1 p-py-2"
        >
          {{ c.strCategory }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CocktailService from "../services/CocktailService";
import { ref, onMounted } from "vue";

export default {
  name: "Cocktails",
  setup() {
    onMounted(() => {
      cocktailService.value.getCategories().then((data) => {
        categories.value = data;
        loading.value = false;
      });
    });
    const categories = ref([]);
    const cocktailService = ref(new CocktailService());
    const loading = ref(true);
    return {
      categories,
      cocktailService,
    };
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
#CocktailsMain {
  min-height: 100vh;
  min-width: 100%;
  background: center / 100% 100% url("../assets/images/bar1.jpg") fixed;
}
.card {
  min-width: 60%;
  max-width: 100%;
}
.card h1 {
  color: #c7b52e;
  font-size: 3rem;
  text-shadow: 1px 1px 1px #eefa9e85, 2px 2px 6px #c7b52e;
}
#CategoryBox {
  background: white;
  padding: 2rem 4rem;
}

#CategoryBox span {
  color: #20bdec;
}

#CategoryBox span:hover {
  cursor: pointer;
  color: #2397f0;
}

#CategoryBox span:active {
  color: #c7b52e;
}
</style>