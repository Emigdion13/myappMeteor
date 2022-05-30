<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">{{ dataView.title }}</div>
      </v-col>
      <v-col cols="2">
        <v-btn
          block
          type="submit"
          form="saveProfile"
          color="primary"
          v-text="dataView.targetButton"
        >
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form
          @submit.prevent="saveProfile"
          id="saveProfile"
          autocomplete="off"
        >
          <v-row>
            <v-col md="6">
              <v-text-field
                v-model="profile.name"
                id="inputName"
                name="name"
                label="Profile Name"
              >
              </v-text-field>
            </v-col>

            <v-col md="6">
              <v-text-field
                v-model="profile.description"
                id="inputDescription"
                name="name"
                label="Profile Description"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SaveProfile",
  data() {
    return {
      profile: {
        _id: null,
        name: null,
        username: null,
        description: null,
        permissions: [],
      },
      profiles: [
        { name: "admin", description: "Administrator" },
        { name: "chat", description: "Chat User" },
      ],
      dataView: {
        title: "",
        targetButton: "",
      },
    };
  },
  created() {
    if (this.$router.currentRoute.name.includes("create")) {
      this.dataView.title = "Create Profile";
      this.dataView.targetButton = "Create";
    } else if (this.$router.currentRoute.name.includes("edit")) {
      this.dataView.title = "Edit Profile";
      this.dataView.targetButton = "Update";
    }
  },
  methods: {
    saveProfile() {
      console.log("profile ", this.profile);
    },
  },
};
</script>

<style>
</style>