<template>
    <div>
        <p>Hola</p>
        <v-btn color="primary" @click="openAlert()">Abrir</v-btn>
        <v-btn color="accent" @click="openLoader()">Loader</v-btn>
        <v-btn color="accent" @click="unload()">Unload</v-btn>

        <v-btn class="ma-2" text icon color="red lighten-2">
            <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
        <alert-message ref="refAlertMessageTest"></alert-message>
        <loader ref="refLoader"></loader>
    </div>

</template>

<script>
import AlertMessage from './components/utilities/alerts/AlertMessage.vue';
import Loader from './components/utilities/loaders/Loader.vue';

export default {
    components: { AlertMessage, Loader },
    name: "Testing",
    methods: {
        openAlert() {
            this.$refs.refAlertMessageTest.showAlertSimple("success", "Mi tituloasdsadsadsadasdadasdasdsadasdasd", "Cerrar");
        },
        openLoader() {
            this.$refs.refLoader.activate("Activating");
        },
        unload() {
            this.$refs.refLoader.deactivate();
        }
    }
}
</script>

<style scoped>
</style>