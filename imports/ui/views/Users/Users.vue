<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="12" md="10" lg="8" xl="5">
        <v-data-table
          :headers="headers"
          :items="users"
          sort-by="name"
          class="elevation-1"
        >
        <template v-slot:body.append>
            <tr>
                <td>
                    <v-text-field v-model="headersFilter.name" type="text" label="Name"></v-text-field>
                </td>
                <td>
                    <v-text-field v-model="headersFilter.username" type="text" label="UserName"></v-text-field>
                </td>
                <td>
                    <v-text-field v-model="headersFilter.email" type="email" label="Email"></v-text-field>
                </td>
            </tr>

        </template>
        
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      headersFilter: {
        name: "",
        username: "",
        email: ""
      },
      users: [
        {
          name: "Peter Parker",
          username: "spider-Man",
          email: "spidy@correo.com"
        },
        { name: "Tony Stark", username: "Iron Man", email: "iron@correo.com" },
        {
          name: "Steve Rogers",
          username: "Captain Americana",
          email: "captain@correo.com"
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          value: "name",
          text: "Name",
          sortable: true,
          filter: (value) => { return value != null && typeof value === "string" && value.toString().toLowerCase().indexOf(this.headersFilter.name.toLocaleLowerCase()) !== -1 }
        },
        {
          value: "username",
          text: "UserName",
          sortable: true,
          filter: (value) => { return value != null && typeof value === "string" && value.toString().toLowerCase().indexOf(this.headersFilter.name.toLocaleLowerCase()) !== -1 }
        },
        {
          value: "email",
          text: "Email",
          sortable: true,
          filter: (value) => { return value != null && typeof value === "string" && value.toString().toLowerCase().indexOf(this.headersFilter.name.toLocaleLowerCase()) !== -1 }
        },
      ];
    },
  },
};
</script>

<style scoped>
</style>