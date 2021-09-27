<template>
  <div id="SectHead " class="p-p-6" :style="image">
    <h1 id="HeadTitle">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      image: {
        background:
          "center / cover no-repeat url('../../assets/images/martini.jpg') fixed",
      },
    };
  },
};
</script>

<style >
#HeadTitle {
  font-family: var(--Stoot);
  letter-spacing: 0.4rem;
  font-size: 4rem;
  color: white;
  text-shadow: 1px 1px 10px rgba(255, 112, 112, 0.344),
    4px 4px 20px rgba(255, 0, 0, 0.344), 8px 8px 40px rgba(255, 0, 0, 0.344);
}
</style>