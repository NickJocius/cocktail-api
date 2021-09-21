<template>
  <div class="" id="Category">
    <div class="card">
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
                :src="
                  slotProps.data.strDrinkThumb + '/preview (100x100 pixels)'
                "
                :alt="slotProps.data.strDrink"
              />
              <div class="product-list-detail">
                <div class="product-name">{{ slotProps.data.strDrink }}</div>
                <div class="product-description">
                  {{ slotProps.data.description }}
                </div>
                <Rating
                  :modelValue="slotProps.data.rating"
                  :readonly="true"
                  :cancel="false"
                ></Rating>
                <i class="pi pi-tag product-category-icon"></i
                ><span class="product-category">{{ name }}</span>
              </div>
              <div class="product-list-action">
                <span class="product-price">${{ slotProps.data.idDrink }}</span>
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
                  <span class="product-category">{{ name }}</span>
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
                  :modelValue="slotProps.data.rating"
                  :readonly="true"
                  :cancel="false"
                ></Rating>
              </div>
              <div class="product-grid-item-bottom">
                <span class="product-price">${{ slotProps.data.idDrink }}</span>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import CocktailService from "../services/CocktailService";
import DataView from "primevue/dataview";
import Rating from "primevue/rating";
import Dropdown from "primevue/dropdown";

export default {
  props: {
    name: String,
  },
  setup(props) {
    onMounted(() => {
      cocktailService.value
        .getCategory(props.name)
        .then((data) => (drinks.value = data));
    });

    const drinks = ref([]);
    const cocktailService = ref(new CocktailService());
    const layout = ref("grid");
    const sortKey = ref();
    const sortOrder = ref();
    const sortField = ref();
    const sortOptions = ref([
      { label: "A - Z", value: "!idDrink" },
      { label: "Z - A", value: "idDrink" },
    ]);
    const onSortChange = (event) => {
      const value = parseInt(event.value.value);
      const sortValue = parseInt(event.value);

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

  components: {
    DataView,
    Rating,
    Dropdown,
  },
};
</script>

<style scoped>
#Category {
  min-height: 100vh;
  min-width: 100%;
}
.card {
  background: #ffffff;
  padding: 2rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;

  min-height: 100vh;
}
.p-dropdown {
  width: 14rem;
  font-weight: normal;
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

.product-list-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
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
}

.product-grid-item-content {
  text-align: center;
}

.product-grid-item .product-price {
  font-size: 1.5rem;
  font-weight: 600;
}

@media screen and (max-width: 576px) {
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