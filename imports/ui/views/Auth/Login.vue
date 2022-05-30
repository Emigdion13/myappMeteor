<template>
    <div class="login-wrapper">
    
        <div class="title secondary--text">Welcome!</div>
    
        <div class="display-1 mb-0 secondary--text">Log In</div>
    
        <v-form @submit.prevent="login" autocomplete="nope">
    
            <v-text-field id="inputUser" v-model="user.userOrEmail" label="User" name="email" prepend-icon="mdi-account" color="primary" type="text">
    
            </v-text-field>
    
            <v-text-field id="inputPassword" label="Password" name="password" prepend-icon="mdi-lock" v-model="user.pasword" type="password"></v-text-field>
    
            <div class="d-flex justify-end">
    
                <v-btn rounded color="primary" text :to="{ name: 'forgotPassword' }" small>Forgot my password</v-btn>
    
            </div>
    
            <div class="d-flex justify-start">
    
                <v-btn type="submit" rounded color="primary" transition="fade">Enter</v-btn>
    
            </div>
    
        </v-form>
    
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            user: {
                userOrEmail: null,
                password: null,
            },
        };
    },
    methods: {
        login() {
            console.log("usuario", this.user.userOrEmail);
            this.$loader.activate();
            setTimeout(() => {
                this.$loader.deactivate();
                this.$alert.showAlertSimple("error", "Login Failed", "Close");
            }, 2000);
        },
    },
};
</script>

<style scoped>

</style>
