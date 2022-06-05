import {check, Match} from 'meteor/check';
import { Profile } from './Profile';
import { ResponseMessage } from "../../startup/server/utilities/ResponseMessage";

new ValidatedMethod({
    name:'profile.save',
    validate(profile){
        try{
            check(profile,{
                _id:Match.OneOf(String,null),
                name: String,
                description:String,
                permissions:[String]
            });

        }catch(Exception)
        {
            console.error('profile.save', Exception);
            throw new Meteor.Error('403', "The obtained information is not valid");
        }
    },
    run(profile){
        const responseMessage = new ResponseMessage();
        try{
            Profile.insert({
                name:profile.name,
                description: profile.description,
                permissions: profile.permissions
            });
            responseMessage.create("Profile was successfully created");
        }catch(Exception){
            console.error('profile.save', exception);
            throw new Meteor.Error('500', "An error has occurred while trying to create the new profile")
        }

        return responseMessage;
    }

});