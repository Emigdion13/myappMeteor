<template>
    <div>
    
        <div class="title">Reset Password</div>
    
        <v-form @submit.prevent="resetPassword">
    
            <v-text-field v-model="user.password" id="inputPassword" :append-icon="showPass.new ? 'mdi-eye' : 'mdi-eye-off'" :type="showPass.new ? 'text' : 'password'" name="Password" autocomplete="new-password" label="Password" hint="At least 8 characters" counter
    
                @click:append="showPass.new = !showPass.new"></v-text-field>
    
            <v-text-field v-model="user.confirmPassword" id="inputConfirmPassword" :append-icon="showPass.confirm ? 'mdi-eye' : 'mdi-eye-off'" :type="showPass.confirm ? 'text' : 'password'" name="PasswordConfirmation" autocomplete="new-password" label="Confirm Password"
    
                hint="At least 8 characters" counter @click:append="showPass.confirm = !showPass.confirm"></v-text-field>
    
            <div class="dflex start">
    
                <v-btn type="submit" color="primary" rounded>Reset</v-btn>
    
            </div>
    
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
            console.log("Contrasenias", this.user);
            console.log("Token:", this.$route.params.token);
        },
    },
};
</script>

<style>

</style>