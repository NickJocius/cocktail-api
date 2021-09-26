<template>
  <div class="p-d-flex p-ai-center p-jc-center p-py-6" id="Category">
    <div class="card p-pt-4" id="dataCard">
      <DataView
        :value="drinks"
        :paginator="true"
        :rows="6"
        :layout="layout"
        :sortOrder="sortOrder"
        :sortField="sortField"
      >
        <template #header>
          <div class="p-grid p-nogutter">
            <div class="p-col-6" style="text-align: left">
              <Dropdown
                v-model="sortKey"
                :options="sortOptions"
                optionLabel="label"
                placeholder="Sort By Price"
                @change="onSortChange($event)"
              />
            </div>
            <div class="p-col-6" style="text-align: right">
              <DataViewLayoutOptions v-model="layout" />
            </div>
          </div>
        </template>
        <template #list="slotProps">
          <div class="p-col-12">
            <div class="product-list-item">
              <img
                :src="slotProps.data.strDrinkThumb + '/preview'"
                :alt="slotProps.data.strDrink"
              />
              <div class="product-list-detail">
                <div class="product-name">{{ slotProps.data.strDrink }}</div>
                <div class="product-description">
                  {{ slotProps.data.description }}
                </div>
                <Rating
                  :modelValue="Math.floor(Math.random() * 5) + 1"
                  :readonly="true"
                  :cancel="false"
                ></Rating>
                <i class="pi pi-tag product-category-icon"></i
                ><span class="product-category">{{ cat }}</span>
              </div>
              <div class="product-list-action">
                <DrinkDetails :drinkId="slotProps.data.idDrink" />
              </div>
            </div>
          </div>
        </template>
        <template #grid="slotProps">
          <div class="p-col-12 p-md-4">
            <div class="product-grid-item card">
              <div class="product-grid-item-top">
                <div>
                  <i class="pi pi-tag product-category-icon"></i>
                  <span class="product-category">{{ cat }}</span>
                </div>
              </div>
              <div class="product-grid-item-content">
                <img
                  :src="slotProps.data.strDrinkThumb + '/preview'"
                  :alt="slotProps.data.strDrink"
                />
                <div class="product-name">{{ slotProps.data.strDrink }}</div>
                <div class="product-description">
                  {{ slotProps.data.strDrink }}
                </div>
                <Rating
                  :modelValue="Math.floor(Math.random() * 5) + 1"
                  :readonly="true"
                  :cancel="false"
                ></Rating>
              </div>
              <div class="product-grid-item-bottom">
                <DrinkDetails :drinkId="slotProps.data.idDrink" />
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";

import CocktailService from "../services/CocktailService";
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Dropdown from "primevue/dropdown";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import DrinkDetails from "../components/category/DrinkDetails.vue";

export default {
  props: {
    cat: String,
  },

  setup(props) {
    onBeforeMount(() => {
      cocktailService.value
        .getCategory(props.cat)
        .then((data) => (drinks.value = data));
    });

    const drinks = ref([]);
    const cocktailService = ref(new CocktailService());
    const layout = ref("grid");
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: "A - Z", value: "!strDrink" },
      { label: "Z - A", value: "strDrink" },
    ]);
    const onSortChange = (event) => {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
      } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
      }
    };
    return {
      drinks,
      cocktailService,
      layout,
      sortKey,
      sortOrder,
      sortField,
      onSortChange,
      sortOptions,
    };
  },
  name: "Category",
  data() {
    return {
      rating: Math.floor(Math.random() * 5),
    };
  },
  components: {
    DataView,
    Rating,
    Dropdown,
    DataViewLayoutOptions,
    DrinkDetails,
  },
  methods: {},
};
</script>

<style scoped>
/****** Main Sections ******/
#Category {
  height: 100%;
  min-width: 100%;
}

#dataCard {
  background: #020202fa;
  padding: 6rem 2rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
  color: white;
  min-width: 100%;
}

/****** DataView ******/
.p-dataview {
  height: 100%;
}
.p-dataview .p-dataview-grid {
  background: rgba(97, 241, 68, 0.6) !important;
  min-height: 100vh;
}

.p-dropdown {
  width: 14rem;
  font-weight: normal;
  display: none;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

/****** List View ******/
.product-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  width: 100%;
}

/******  Grid View ******/
.p-dataview-content .product-grid-item .card {
  background: black;
}

.product-grid-item-top,
.product-grid-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-grid-item img {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 2rem 0;
}
.product-grid-item {
  margin: 0.5rem;
  border: 1px solid #dee2e6;
  box-shadow: 2px 2px 35px rgba(0, 0, 0, 0.12);
}

.product-grid-item-content {
  text-align: center;
}

.product-grid-item-content img {
  transform: scale(1.2);
}

.product-grid-item .product-price {
  font-size: 1.5rem;
  font-weight: 600;
}

.product-grid-item-content > img:hover {
  box-shadow: 4px 4px 20px rgba(249, 231, 133, 0.6),
    6px 6px 30px rgba(133, 249, 143, 0.453),
    8px 8px 40px rgba(249, 231, 133, 0.6);
}

.product-grid-item-bottom {
  justify-content: center;
  margin-top: 2rem;
}

/****** Media Queries ******/
@media screen and (max-width: 576px) {
  .card {
    padding: 2rem 0 !important;
  }
  .product-list-item {
    flex-direction: column;
    align-items: center;
  }
  img {
    margin: 2rem 0;
  }

  .product-list-detail {
    text-align: center;
  }

  .product-price {
    align-self: center;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
  }

  .product-list-action {
    margin-top: 2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>