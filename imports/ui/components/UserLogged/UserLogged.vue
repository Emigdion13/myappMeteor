<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn color="default" dark text v-on="on" class="mr-5">
        Jose
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>

    <v-list
      ><v-list-item href="#" :to="{name:'home.account'}">Account</v-list-item>
      <v-list-item href="#">Log Out</v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "UserLogged",
};
</script>

<style>
</style>