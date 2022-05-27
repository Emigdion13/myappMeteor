import LytAuth from "../layouts/LytAuth";
import Login from "../views/Auth/Login";
import ForgotPassword from "../views/Auth/ForgotPassword";
import ResetPassword from "../views/Auth/ResetPassword";

export default {
  path: "/login",
  components: {
    allPageView: LytAuth,
  },
  children: [
    {
      name: "login",
      path: "",
      components: {
        sectionView: Login,
      },
    },
    {
      name: "forgotPassword",
      path: "/forgot-password",
      components: {
        sectionView: ForgotPassword,
      },
    },
    {
      name: "resetPassword",
      path: "/reset-password/:token",
      components: {
        sectionView: ResetPassword,
      },
    },
  ]
};
