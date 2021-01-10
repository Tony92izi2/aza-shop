<template>
  <div class="home">
    <Caroussel></Caroussel>
    <Products></Products>
  </div>
</template>

<script>
import Caroussel from "../components/Caroussel.vue";
import Products from "../components/ListProductComponent.vue";
export default {
  name: "Home",
  components: {
    Caroussel,
    Products,
  },
};
</script>
