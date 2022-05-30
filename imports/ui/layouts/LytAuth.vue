<template>
  <v-row>
    <v-col
      xs="12"
      sm="8"
      md="4"
      class="d-flex flex-column justify-space-around pa-12"
    >
      <div class="text-center">
        <img
          src="./img/vuetify.svg"
          alt="Viutify"
          height="180px"
          width="auto"
        />
      </div>
     
     <router-view name="sectionView"> </router-view>

    </v-col>
    <v-col
      xs="12"
      sm="4"
      md="8"
      class="right-side d-flex flex-column justify-center"
    >

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LytAuth",
};
</script>

<style scoped>

.display-3 {
  z-index: 2;

}

.right-side {
  background-image: url("./img/meteor.jpg");
  background-size: cover;
  height: 100vh;
  position: relative;
}
</style>
