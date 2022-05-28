<template>
  <div>
    <div class="title">Reset Password</div>
    <v-form @submit.prevent="resetPassword">
      <v-text-field
        v-model="user.password"
        id="inputPassword"
        name="password"
        autocomplete="new-password"
        :append-icon="showPass.new?'text':'password'"
        :type="showPass.new ? 'text':'password'"
        @click:append="showPass.new = !showPass.new"
      >
      </v-text-field>
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