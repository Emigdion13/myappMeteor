<template>
  <v-container>
      <v-row justify="center">
          <v-col xs="12" sm="12" md="10" lg="8" xl="5">
              <v-data-table :headers="headers" :items="users" sort-by="name" class="elevation-1"></v-data-table>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name:"Users",
    data(){
        return {
            headers:[
                {value:'name', text:'Name', sortable:true},
                {value:'username', text:'UserName', sortable:true},
                {value:'email', text:'Email', sortable:true}
            ],
            users:[
                {name:'Peter Parker', username: 'spider-Man', email: 'spidy@correo.com'},
                {name:'Tony Stark', username: 'Iron Man', email: 'iron@correo.com'},
                {name:'Steve Rogers', username: 'Captain Americana', email: 'captain@correo.com'}
            ]
        }
    }
}
</script>

<style scoped>

</style>