import { Meteor } from "meteor/meteor";
import { PublishEndpoint } from "meteor/peerlibrary:middleware";

new PublishEndpoint("user.list", function () {
  return Meteor.users.find({});
});
