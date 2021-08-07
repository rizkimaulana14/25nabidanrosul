<template>
  <div id="app">
    <div class="container">
      <NavComponent />
      <router-view />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavComponent from "@/components/Nav.vue";
import FooterComponent from "@/components/Footer.vue";

export default {
  components: {
    NavComponent,
    FooterComponent,
  },
};
</script>
