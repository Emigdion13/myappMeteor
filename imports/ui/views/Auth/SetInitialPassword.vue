<template>
  <div>
    <div class="title">Set Password</div>
    <v-form @submit.prevent="setPassword">
      <v-text-field
        v-model="user.password"
        id="inputPassword"
        :append-icon="showPass.new ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPass.new ? 'text' : 'password'"
        name="Password"
        autocomplete="new-password"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="showPass.new = !showPass.new"
      ></v-text-field>
      <v-text-field
        v-model="user.confirmPassword"
        id="inputConfirmPassword"
        :append-icon="showPass.confirm ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPass.confirm ? 'text' : 'password'"
        name="PasswordConfirmation"
        autocomplete="new-password"
        label="Confirm Password"
        hint="At least 8 characters"
        counter
        @click:append="showPass.confirm = !showPass.confirm"
      ></v-text-field>
      <div class="dflex justify-start mt-2">
        <v-btn type="submit" color="primary" rounded>Reset</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "SetInitialPassword",
  data() {
    return {
      user: {
        password: null,
        confirmPassword: null,
      },
      showPass: {
        new: false,
        confirm: false,
      },
    };
  },
  methods: {
    resetPassword() {
      console.log("Token:", this.$route.params.token);
      console.log("Contrasenias", this.user);
    },
  },
};
</script>

<style>
</style>