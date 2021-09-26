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
        <li>Contact</li>
      </ul>
    </div>
    <Divider layout="vertical" />
    <div class="p-col">
      <ul>
        <li>About</li>
      </ul>
    </div>
  </div>
  <p class="p-text-center" id="p">&copy;Resonance Web Design</p>
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
  padding: 1rem 1rem;
  background: black;
  color: white;
}

#p {
  color: white;
  font-family: var(--PermMarker);
}

#Footer ul {
  list-style: none;
  font-family: var(--PermMarker);
  font-size: 1.1rem;
}
</style>