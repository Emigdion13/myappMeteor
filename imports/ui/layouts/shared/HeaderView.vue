<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <user-logged></user-logged>

    <template v-slot:extension>
      <v-tabs align-with-title model="optionSelected">
        <v-tab
          v-for="option in options"
          :key="option.title"
          v-text="option.title"
        ></v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import UserLogged from "../../components/UserLogged/UserLogged.vue";
export default {
  components: { UserLogged },
  name: "HeaderView",
  data() {
    return {
      optionSelected: 0,
      options: [
        {
          icon: "person",
          title: "Usuarios",
        },
        {
          icon: "user",
          title: "Perfiles",
        },
      ],
    };
  },
};
</script>

<style>
</style>