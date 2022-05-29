<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="n in 24" :key="n" cols="4">
          <v-card height="200"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import UserLogged from "../../components/UserLogged/UserLogged.vue";
export default {
  components: { UserLogged },
  name: "Home",
};
</script>

<style>
</style>