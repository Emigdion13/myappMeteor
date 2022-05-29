<template>
   <v-container>
       <v-row>
           <v-col class="headline">Configure Account</v-col>
       </v-row>
       <v-row>
           <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="5">
               <general-data></general-data>
           </v-col>
           <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="5" offset-lg="1">
               <update-password></update-password>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
import GeneralData from "../../components/ConfigureAccount/GeneralData.vue";
import UpdatePassword from "../../components/ConfigureAccount/UpdatePassword.vue"
export default {
    name: "ConfigureAccount",
    components:{
        GeneralData,
        UpdatePassword
    }
}
</script>

<style>

</style>