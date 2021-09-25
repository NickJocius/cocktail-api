<template>
  <div class="p-grid" id="Footer">
    <div class="p-col p-d-flex-column">
      <ul>
        <li>Home</li>
      </ul>
    </div>
    <Divider layout="vertical" />
    <div class="p-col">
      <ul>
        <li>Home</li>
      </ul>
    </div>
    <Divider layout="vertical" />
    <div class="p-col">
      <ul>
        <li>Home</li>
      </ul>
    </div>
  </div>
  <p class="p-text-center">&copy;Resonance Web Design</p>
</template>
<script>
import Divider from "primevue/divider";
export default {
  name: "Footer",
  components: {
    Divider,
  },
};
</script>
<style scoped>
#Footer {
  padding: 2rem 4rem;
}

#Footer ul {
  list-style: none;
}
</style>