import Users from "../views/Users/Users.vue";
import SaveUser from "../views/Users/SaveUser.vue";

export default {
  path: "users",
  components: {
    sectionView: {
      render: (c) => c("router-view"),
    },
  },
  children: [
    {
      name: "home.users",
      path: "",
      component: Users,
    },
    {
      name: "home.users.create",
      path: "create",
      component: SaveUser,
    },
    {
      name: "home.users.edit",
      path: "edit",
      component: SaveUser,
    },
  ],
};
