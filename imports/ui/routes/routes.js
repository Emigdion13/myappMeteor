import loginRoutes from "./loginRoutes";
import LytSPA from "../layouts/LytSPA";
import Home from "../views/Home/Home";

export default [
  {
    path: "*",
    redirect: "/login",
  },
  loginRoutes,
  {
    path: "/",
    components: {
      allPageView: LytSPA,
    },
    children: [
      {
        name: "home",
        path: "",
        components: {
          sectionView: Home,
        },
      },
    ],
  },
];
