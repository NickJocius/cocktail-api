<template>
  <Card class="p-d-inline-block p-shadow-16">
    <template #content>
      <h1 class="p-text-center p-text-bold">Welcome to the Cocktail Lounge.</h1>
      <p class="p-text-center p-text-bold">
        Discover all your favorite cocktails in one easy to use application.
      </p>
    </template>
  </Card>
</template>
<script>
import Card from "primevue/card";
export default {
  name: "Section1",
  components: {
    Card,
  },
};
</script>

<style scoped>
.p-card {
  padding: 4rem 8rem;
  background-color: rgba(7, 95, 47, 0.5);
  max-height: 100%;
  max-width: 100%;
  font-family: var(--Stoot);
}
.p-card-content p {
  color: #c7b52e;
  font-size: 1.8rem;
  letter-spacing: 0.4rem;
}
.p-card-content h1 {
  color: #20bdec;
  font-size: 2.6rem;
  letter-spacing: 0.2rem;
}

/* Media Query */
@media screen and (max-width: 576px) {
  .p-card {
    padding: 0;
  }
}
</style>