<template>
  <div>
    <div class="d-flex flex-row justify-start">
      <v-btn color="primary" icon :to="{ name: 'login' }">
        <v-icon dark left> mdi-arrow-left </v-icon>
      </v-btn>
      <div class="title">FORGOT MY PASSWORD</div>
    </div>
    <v-form @submit.prevent="forgotPassword">
      <v-text-field
        v-model="user.email"
        id="inputEmail"
        name="email"
        type="email"
        label="Email"
      ></v-text-field>

    <v-btn type="submit" color="primary" rounded>Recover</v-btn>

    </v-form>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      user: {
        email: null,
      },
    };
  },
  methods: {
    forgotPassword() {
      console.log("forgotpassword was pressed", this.user);
    },
  },
};
</script>

<style scop>
</style>