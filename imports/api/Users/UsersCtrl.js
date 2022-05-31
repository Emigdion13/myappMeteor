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
        console.error('user.save: ', Exception);
        throw new Meteor.Error('403', 'The Information Provided is not Valid');
    }
  },
  run(user) {
      console.log('user: ', user);
      Accounts.createUser(); //Accounts es global
  },
});
