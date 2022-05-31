import { ValidatedMethod } from "meteor/mdg:validated-method";
import { check, Match } from "meteor/check";

new ValidatedMethod({
  name: "user.save",
  validate(user) {
    try {
      check(user, {
        _id: Match.OneOf(String, null),
        username: String,
        emails: [{ address: String, verified: Boolean }],
        profile: {
          profile: String,
          name: String,
          path: Match.OneOf(String, null),
        },
      });
    } catch (Exception) {
      console.error("user.save: ", Exception);
      throw new Meteor.Error("403", "The Information Provided is not Valid");
    }
  },
  run(user) {
    let responseMessage = "";
    try {
      Accounts.createUser({
        username: user.username,
        email: user.emails[0].address,
        profile: user.profile,
      }); //Accounts es global
      responseMessage = "User created Successfully";
    } catch (Exception) {
      console.error("user.save: ", Exception);
      throw new Meteor.Error("500", "Error while trying to create an user");
    }

    return responseMessage;
  },
});
