<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">{{dataView.title}}</div>
      </v-col>
      <v-col cols="2">
        <v-btn block type="submit" form="saveUser" color="primary" v-text="dataView.targetButon">
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          ><v-card-text>
            <v-form @submit.prevent="saveUser" id="saveUser" autocomplete="off">
                <v-form>
                    <v-col xs="12" sm="12" md="4">
                        <img src="./img/vue-meteor.png" alt="Upload Image" width="150px" />
                    </v-col>
                    <v-col xs="12" sm="12" md="8">
                        <v-text-field v-model="user.name" id="inputName" name="name" label="Name">

                        </v-text-field>
                        <v-select v-model="user.profile" id="selectProfile" name="profile" label="Profile" item-text="description" item-value="name"
                        :items="profiles">

                        </v-select>
                        <v-text-field v-model="user.username" id="inputUserName" name="username" label="UserName">

                        </v-text-field>
                        <v-text-field v-model="user.email" id="inputEmail" name="email" label="Email">

                        </v-text-field>
                    </v-col>
                </v-form>
            </v-form></v-card-text
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SaveUser",
  data() {
    return {
      user: {
        _id: null,
        name: null,
        username: null,
        email: null,
        profile: null,
      },
      profiles: [
        { name: "admin", description: "Administrator" },
        { name: "chat", description: "Chat User" },
      ],
      dataView:{
          title: '',
          targetButon: ''
      }
    };
  },
  created(){
      if(this.$router.currentRoute.name.includes("create")){
          this.dataView.title="Create User";
          this.dataView.targetButon="Create";
      }else if(this.$router.currentRoute.name.includes("edit")){
          this.dataView.title="Edit User";
          this.dataView.targetButon="Update";
      }
  },
  methods: {
    saveUser() {
      console.log("User ", this.user);
    },
  },
};
</script>

<style>
</style>