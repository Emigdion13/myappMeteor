<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" lg="5" xl="5">
        <v-data-table
          :headers="headers"
          :items="profiles"
          sort-by="name"
          class="elevation-1"
        >
          <template v-slot:item.action="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  color="info"
                  v-on="on"
                  small
                  clas="mr-2"
    
                >
                  mdi-pencil
                </v-icon>
              </template>
              <span>edit</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  color="error"
                  v-on="on"
                  small
                  clas="mr-2"
                >
                  mdi-delete
                </v-icon>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ListProfiles",
  data() {
    return {
      headers: [
        { value: "description", text: "Profile Name", sortable: true },
        { value: "action", text: "Options", sortable: true },
      ],
      profiles: [
        {
          _id: 1,
          name: "admin",
          description: "Administrator",
        },
        { _id: 2, name: "Chat", description: "User chat" },
      ]
    };
  },
};
</script>

<style>
</style>