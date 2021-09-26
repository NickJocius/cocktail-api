<template>
  <div>
    <Button
      type="button"
      @click="toggle"
      aria:haspopup="true"
      aria-controls="overlay_panel"
      :label="'Show Details'"
    />
    <OverlayPanel
      ref="op"
      :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
      :style="{ width: '450px' }"
      :showCloseIcon="true"
      id="overlay_panel"
    >
      <div id="Details">
        <h3 class="p-p-1">{{ details[0].strDrink }}</h3>

        <div class="p-grid" id="DGrid">
          <div class="p-col-12 p-md-6 p-lg-6">
            <h5 class="p-text-center">Ingredients</h5>
            <ul id="IngList">
              <li v-if="details[0].strIngredient1">
                {{ details[0].strIngredient1 }}
              </li>
              <li v-if="details[0].strIngredient2">
                {{ details[0].strIngredient2 }}
              </li>
              <li v-if="details[0].strIngredient3">
                {{ details[0].strIngredient3 }}
              </li>
              <li v-if="details[0].strIngredient4">
                {{ details[0].strIngredient4 }}
              </li>
              <li v-if="details[0].strIngredient5">
                {{ details[0].strIngredient5 }}
              </li>
              <li v-if="details[0].strIngredient6">
                {{ details[0].strIngredient6 }}
              </li>
              <li v-if="details[0].strIngredient7">
                {{ details[0].strIngredient7 }}
              </li>
              <li v-if="details[0].strIngredient8">
                {{ details[0].strIngredient8 }}
              </li>
              <li v-if="details[0].strIngredient9">
                {{ details[0].strIngredient9 }}
              </li>
              <li v-if="details[0].strIngredient10">
                {{ details[0].strIngredient10 }}
              </li>
            </ul>
          </div>
          <div class="p-col-12 p-md-6 p-lg-6" id="Info">
            <h5 class="p-text-center">Usefull Info</h5>
            <ul>
              <li v-if="details[0].strTags">Tag: {{ details[0].strTags }}</li>
              <li>Best Served: {{ details[0].strGlass }}</li>
            </ul>
          </div>
        </div>
        <div id="Instructions">
          <h5 class="p-text-center">Serving Instructions</h5>
          <p class="p-p-2 p-text-center">{{ details[0].strInstructions }}</p>
        </div>
      </div>
    </OverlayPanel>
  </div>
</template>

<script>
import OverlayPanel from "primevue/overlaypanel";
import CocktailService from "../../services/CocktailService";
import Button from "primevue/button";
import { ref, onMounted } from "@vue/runtime-core";

export default {
  props: {
    drinkId: String,
  },
  setup(props) {
    onMounted(() => {
      cocktailService.value
        .getDetails(props.drinkId)
        .then((data) => (details.value = data));
      console.log(details);
    });

    const op = ref();
    const details = ref([]);
    const cocktailService = ref(new CocktailService());
    const toggle = (event) => {
      op.value.toggle(event);
    };

    return { op, cocktailService, toggle, details };
  },
  components: {
    Button,
    OverlayPanel,
  },
  methods: {},
};
</script>

<style scoped>
#Details {
  background: black;
  color: white;
}

#Details > h3 {
  text-align: center;
  text-decoration: underline;
  background: rgb(159, 71, 231);
  font-family: var(--Stoot);
  letter-spacing: 0.2rem;
  font-size: 1.3rem;
}

div > h5 {
  font-family: var(--PermMarker);
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}

.p-button {
  background: #2e5bfd;
  margin-bottom: 2rem;
}
</style>