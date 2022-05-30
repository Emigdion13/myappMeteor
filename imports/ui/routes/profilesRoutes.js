import ListProfiles from "../views/Profiles/ListProfiles.vue";
import SaveProfile from "../views/Profiles/SaveProfile.vue";

export default {
  path: "profiles",
  components: {
    sectionView: {
      render: (c) => c("router-view"),
    },
  },
  children: [
    {
      name: "home.profiles",
      path: "",
      component: ListProfiles
    },
    {
      name: "home.profiles.create",
      path: "create",
      component: SaveProfile
    },
    {
      name: "home.profiles.edit",
      path: "edit",
      component: SaveProfile
    },
  ],
};
