<template>
    <div>
        <p>Hola</p>
        <v-btn color="primary" @click="openAlert()">Abrir</v-btn>
        <v-btn color="accent" @click="openLoader()">Loader</v-btn>
        <v-btn color="accent" @click="unload()">Unload</v-btn>
        <v-btn color="secondary" @click="openModalRemove()">modal Remove</v-btn>

        <v-btn class="ma-2" text icon color="red lighten-2">
            <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
        <alert-message ref="refAlertMessageTest"></alert-message>
        <loader ref="refLoader"></loader>
        <modal-remove ref="refModalRemove" v-bind:modalData="userTemp"></modal-remove>
    </div>

</template>

<script>
import AlertMessage from './components/utilities/alerts/AlertMessage.vue';
import Loader from './components/utilities/loaders/Loader.vue';
import ModalRemove from './components/utilities/Modals/ModalRemove.vue';

export default {
    components: { AlertMessage, Loader, ModalRemove },
    name: "Testing",
    data() {
        return {
            userTemp: {
                preposition: "al",
                typeElement: "usuario",
                mainNameElement: '',
                _id: null,
                element: {}
            }
        }
    },
    methods: {
        openAlert() {
            this.$refs.refAlertMessageTest.showAlertSimple("success", "Mi tituloasdsadsadsadasdadasdasdsadasdasd", "Cerrar");
        },
        openLoader() {
            this.$refs.refLoader.activate("Activating");
        },
        unload() {
            this.$refs.refLoader.deactivate();
        },
        openModalRemove() {
            const user = {
                _id: "151-151-151151515151",
                name: "Ivan",
                lastName: "Carera",
                age: 24,
                country: "Dominicana"
            };
            this.userTemp.element = user;
            this.userTemp._id = user._id;
            this.userTemp.mainNameElement = user.name;

            this.$refs.refModalRemove.dialog = true;
        }
    }
}
</script>

<style scoped>
</style>