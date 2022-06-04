import { ValidatedMethod } from "meteor/mdg:validated-method";
import { check, Match } from "meteor/check";
import { ResponseMessage } from "/imports/startup/server/utilities/ResponseMessage";
import { Accounts } from "meteor/accounts-base";
import UsersServ from "./UsersServ";

new ValidatedMethod({
  name: "user.save",
  validate(user) {
    try {
      check(user, {
        _id: Match.OneOf(String, null),
        username: String,
        emails: [{ address: String, verified: Boolean }],
        services: Match.OneOf(null, Object),
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

    UsersServ.validateEmail(user.emails[0].address, user._id);
    UsersServ.validateUsername(user.username, user._id);

  },
  run(user) {
    const responseMessage = new ResponseMessage();

    if (user._id !== null) {
      try {

        UsersServ.updateUser(user);

        responseMessage.create("User successfully updated");
      } catch (Exception) {
        console.error('user.save ', Exception);
        throw new Meteor.Error('500', "Error ocurred when updating the user");
      }
    } else {
      try {
        UsersServ.createUser(user);
        responseMessage.create("User created Successfully");
      } catch (Exception) {
        console.error("user.save: ", Exception);
        throw new Meteor.Error("500", "Error while trying to create an user");
      }
    }

    return responseMessage;
  },
});

new ValidatedMethod({
  name: 'user.delete',
  validate({idUser}){
    try{
      check(idUser, String);
    }catch(Exception){
      console.error('user.delete', Exception);
      throw new Meteor.Error('403', 'The provided information is not valid');
    }
  },
  run({idUser}){
    const responseMessage = new ResponseMessage();
    try{
      Meteor.users.remove(idUser);
      responseMessage.create("User successfully removed");
    } catch(Exception){
      console.error('user.delete', Exception);
      throw new Meteor.Error('500', 'An error has ocurred while trying to delete user');
    }

    return responseMessage;
  }
});
