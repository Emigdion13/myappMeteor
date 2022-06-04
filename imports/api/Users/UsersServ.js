export default {
  validateEmail(newEmail, idUser) {
    const existsEmail = Accounts.findUserByEmail(newEmail);
    if (idUser) {
      const oldUser = Meteor.users.findOne(idUser);

      if (oldUser.emails[0].address !== newEmail && existsEmail) {
        throw new Meteor.Error("403", "The new email is already taken");
      }
    } else if (existsEmail) {
      throw new Meteor.Error("403", "The new email is already taken");  
    }
  },
  validateUsername(newUsername, idUser) {
    const existsUsername = Accounts.findUserByUsername(newUsername);
    if(idUser){
        const oldUser= Meteor.users.findOne(idUser);
        if (oldUser.username!==newUsername && existsUsername){
            throw new Meteor.Error('403', "The Username already exists");
        }
    }else if(existsUsername){
        throw new Meteor.Error('403', "The Username already exists");
    }
  },
  createUser(user){
    Accounts.createUser({
      username: user.username,
      email: user.emails[0].address,
      profile: user.profile,
    }); //Accounts es global
  },
  update(user){
    const currentUser =  Meteor.users.findOne(user._id);

        if (currentUser.emails[0].address !== user.emails[0].address) {
          Accounts.removeEmail(currentUser._id, currentUser.emails[0].address);
          Accounts.addEmail(currentUser._id, user.emails[0].address);
        }

        if (currentUser.username !== user.username) {
          Accounts.setUsername(currentUser._id, currentUser.username);
        }

        Meteor.users.update(user._id, {
          $set: {
            profile: {
              profile: user.profile.profile,
              name: user.profile.name,
              path: user.profile.path,
            },
          },
        });
  }
};
