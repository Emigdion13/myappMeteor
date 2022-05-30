import Users from "../views/Users/Users.vue";
import SaveUser from "../views/Users/SaveUser.vue";

export default {
  name: "home.users",
  path: "users",
  components: {
    sectionView: Users,
  },
  children: [
    {
      name: "home.users.create",
      path: "create",
      components:{
          usersOptionsView: SaveUser
      }
    },
    {
      name: "home.users.edit",
      path: "edit",
      components:{
          usersOptionsView: SaveUser
      }
    },
  ],
};
