<template>
  <v-container fluid>
    <header-view></header-view>
    <v-main>
      <router-view name="sectionView"></router-view>
    </v-main>
    <footer-view></footer-view>
  </v-container>
</template>


<script>
import HeaderView from "./shared/HeaderView.vue";
import FooterView from "./shared/FooterView.vue";
export default {
  name: "LytSPA",
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style>
</style>