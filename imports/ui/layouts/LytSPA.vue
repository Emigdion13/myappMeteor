<template>
  <v-container fluid>
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