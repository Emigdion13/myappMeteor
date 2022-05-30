<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="12" md="10" lg="8" xl="5">
        <div v-if="activeMainView">
          <div class="d-flex flex-row-reverse mb-5">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="success"
                  v-on="on"
                  fab
                  dark
                  :to="{ name: 'home.users.create' }"
                >
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <span>Add User</span>
            </v-tooltip>
          </div>
          <v-data-table
            :headers="headers"
            :items="users"
            sort-by="name"
            class="elevation-1"
          >
          <template v-slot:item.action="{item}">

              <v-tooltip bottom>
                  <template v-slot:activator="{on}">
                      <v-icon color="info" v-on="on" small clas="mr-2" @click="openEditUser(item)">
                          mdi-pencil
                      </v-icon>
                  </template>
                  <span>edit</span>
              </v-tooltip>

          </template>
            <template v-slot:body.append="{ isMobile }">
              <tr v-if="!isMobile">
                <td>
                  <v-text-field
                    v-model="headersFilter.name"
                    type="text"
                    label="Name"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="headersFilter.username"
                    type="text"
                    label="UserName"
                  ></v-text-field>
                </td>
                <td>
                  <v-text-field
                    v-model="headersFilter.email"
                    type="email"
                    label="Email"
                  ></v-text-field>
                </td>
              </tr>
            </template>
          </v-data-table>
        </div>

        <router-view name="usersOptionsView"></router-view>
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
        email: "",
      },
      users: [
        {
          name: "Peter Parker",
          username: "spider-Man",
          email: "spidy@correo.com",
        },
        { name: "Tony Stark", username: "Iron Man", email: "iron@correo.com" },
        {
          name: "Steve Rogers",
          username: "Captain Americana",
          email: "captain@correo.com",
        },
      ],
      activeMainView: true,
    };
  },
  computed: {
    headers() {
      return [
        {
          value: "name",
          text: "Name",
          sortable: true,
          filter: (value) => {
            return (
              value != null &&
              typeof value === "string" &&
              value
                .toString()
                .toLowerCase()
                .indexOf(this.headersFilter.name.toLocaleLowerCase()) !== -1
            );
          },
        },
        {
          value: "username",
          text: "UserName",
          sortable: true,
          filter: (value) => {
            return (
              value != null &&
              typeof value === "string" &&
              value
                .toString()
                .toLowerCase()
                .indexOf(this.headersFilter.username.toLocaleLowerCase()) !== -1
            );
          },
        },
        {
          value: "email",
          text: "Email",
          sortable: true,
          filter: (value) => {
            return (
              value != null &&
              typeof value === "string" &&
              value
                .toString()
                .toLowerCase()
                .indexOf(this.headersFilter.email.toLocaleLowerCase()) !== -1
            );
          },
        },
        {value:'action', text:'Opciones', sortable:false}
      ];
    },
  },
  watch: {
    $route() {
      this.updateMainView();
    },
  },
  mounted() {
    this.updateMainView();
  },
  methods: {
    updateMainView() {
      const currentRoute = this.$router.currentRoute.name.split(".").pop();
      this.activeMainView = currentRoute === "users";
    },
    openEditUser(userToEdit){
        //TODO save in vuex
        console.log("USer to edit:", userToEdit);
        this.$router.push({name:'home.users.edit'}); //Redireccionando
    }
  },
};
</script>

<style scoped>
</style>