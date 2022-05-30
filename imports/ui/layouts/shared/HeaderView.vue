<template>
  <v-app-bar
    app
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <user-logged></user-logged>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab
          v-for="option in options"
          :key="option.title"
          v-text="option.title"
          :to="{name:option.nameRoute}"
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
          title: "HOME",
          nameRoute: 'home'
        },
        {
          icon: "user",
          title: "USERS",
          nameRoute: 'home.users'
        },
        {
          icon: "user",
          title: "PROFILES",
          nameRoute: 'home.profiles'
        },
      ],
    };
  },
};
</script>

<style>
</style>