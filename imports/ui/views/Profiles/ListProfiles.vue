<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" lg="5" xl="5">
        <div class="d-flex flex-row-reverse mb-5">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="success"
                v-on="on"
                fab
                dark
                :to="{ name: 'home.profiles.create' }"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add Profile</span>
          </v-tooltip>
        </div>
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
                  class="mr-2"
                  @click="openEditProfile(item)"
                >
                  mdi-pencil
                </v-icon>
              </template>
              <span>Edit</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  color="error"
                  v-on="on"
                  small
                  class="mr-2"
                  @click="openEditProfile(item)"
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
    <modal-remove
      ref="refModalRemove"
      v-bind:modalData="userTemp"
      @id_element="deleteUser"
    ></modal-remove>
  </v-container>
</template>

<script>
import ModalRemove from "../../components/utilities/Modals/ModalRemove.vue";
export default {
  name: "ListProfiles",
  components: {
    ModalRemove,
  },
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
      ],
      profileTemp: {
        preposition: "the",
        typeElement: "profile",
        mainNameElement: "",
        _id: null,
        element: {},
      },
    };
  },
  methods: {
    openEditProfile(item) {
      //TODO: USE VUEX
      console.log("profile: ", item);
      this.$router.push({ name: "home.profiles.edit" });
    },
    openRemoveModal(profile) {
      console.log("Profile:", profile);
      this.profileTemp.element = profile;
      this.profileTemp._id = profile._id;
      this.profileTemp.mainNameElement = profile.description;
      this.$refs.refModalRemove.dialog = true;
    },
    deleteProfile(idProfile) {
      console.log("User to Delete", idProfile);
    },
  },
};
</script>

<style>
</style>