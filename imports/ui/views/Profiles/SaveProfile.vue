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
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>This profile permissions</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="searchSelfPermission"
              placeholder="Search..."
              id="inputSearchSelfPermission"
              name="profileName"
            >
            </v-text-field>
          </v-card-text>
          <v-sheet
            id="scrolling-techniques-2"
            class="overflow-y-auto"
            max-height="500"
          >
            <v-list style="height: 400px">
              <v-list-item-group>
                <draggable :list="selfPermissions" group="permissions">
                  <v-list-item
                    v-for="permission in filteredSelfPermissions"
                    v-text="permission._id"
                    :key="permission._id"
                  >
                  </v-list-item>
                </draggable>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>All profile permissions</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="searchPermission"
              placeholder="Search..."
              id="inputSearchPermission"
              name="profileName2"
            >
            </v-text-field>
          </v-card-text>
          <v-sheet
            id="scrolling-techniques-3"
            class="overflow-y-auto"
            max-height="500"
          >
            <v-list style="height: 400px">
              <v-list-item-group>
                <draggable :list="allPermissions" group="permissions">
                  <v-list-item
                    v-for="permission in filteredAllPermissions"
                    v-text="permission._id"
                    :key="permission._id"
                  >
                  </v-list-item>
                </draggable>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "SaveProfile",
  components: {
    draggable,
  },
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
      searchSelfPermission: "",
      searchPermission: "",
      selfPermissions: [],
      allPermissions: [
        { _id: "users-view" },
        { _id: "users-create" },
        { _id: "users-edit" },
        { _id: "users-delete" },
      ],
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

  computed: {
    filteredSelfPermissions() {
      return this.selfPermissions.filter((permission) => {
        return permission._id
          .toLowerCase()
          .includes(this.searchSelfPermission.toLowerCase());
      });
    },

    filteredAllPermissions() {
      return this.allPermissions.filter((permission) => {
        return permission._id
          .toLowerCase()
          .includes(this.searchPermission.toLowerCase());
      });
    },
  },
};
</script>

<style>
</style>