<template>
    <v-app>
        <router-view name="allPageView"></router-view>
        <alert-message></alert-message>
        <loader/>
    </v-app>
</template>

<script>
import Testing from './testing.vue';
import AlertMessage from "./components/utilities/alerts/AlertMessage.vue"
import Loader from "./components/utilities/loaders/Loader.vue";

export default {
    components: { AlertMessage, Loader },
    name: "App",
    methods: {}
}
</script>

<style scoped>

</style>