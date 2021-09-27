<template>
  <div id="section1" class="p-d-flex p-jc-center p-ai-center">
    <Section1 />
  </div>
  <div id="section2" class="p-d-flex p-ai-center">
    <img :src="glasses" alt="Colored Glasses" />
  </div>
</template>

<script>
import Section1 from "../components/cards/home/Section1.vue";

import glasses from "../assets/images/glasses.jpg";
export default {
  components: {
    Section1,
  },
  data() {
    return {
      glasses: glasses,
    };
  },
};
</script>

<style scoped>
#section1 {
  min-height: 100vh;
  background: center no-repeat url("../assets/images/bar2.jpg") fixed;
}

#section2 {
  background: black;
  min-height: 100vh;
}

img {
  max-width: 100% !important;
}
</style>