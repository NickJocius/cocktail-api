<template>
  <div id="Footer">
    <div class="p-grid">
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
  </div>
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
  padding: 1rem 0;
  background: black;
  color: white;
  max-width: 100%;
  margin: 0;
}

#p {
  color: white;
  font-family: var(--PermMarker);
}

#Footer .p-grid {
  margin-left: 0;
  margin-right: 0;
}

#Footer ul {
  list-style: none;
  font-family: var(--PermMarker);
  font-size: 1.1rem;
}
</style>