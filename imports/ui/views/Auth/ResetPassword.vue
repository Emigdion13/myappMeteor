<template>
  <div>
    <div class="title">Reset Password</div>
    <v-form @submit.prevent="resetPassword">
      <v-text-field
            v-model="user.password"
            id="password"
            :append-icon="showPass.new ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPass.new ? 'text' : 'password'"
            name="Password"
            autocomplete="new-password"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="showPass.new = !showPass.new"
          ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ResetPassword",
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
      console.log("asd");
    },
  },
};
</script>

<style>
</style>