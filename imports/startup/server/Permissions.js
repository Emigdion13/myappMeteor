const Permissions = {
  USERS: {
    READ: { VALUE: "users-read", TEXT: "Read users" },
    CREATE: { VALUE: "users-create", TEXT: "Create Users" },
    UPDATE: { VALUE: "users-update", TEXT: "Update Users" },
    REMOVE: { VALUE: "users-remove", TEXT: "Remove Users" },
  },
};

export const permissionArray = Object.keys(Permissions).reduce((accumulator, systemModuleName) => {
  const systemModuleObject = Permissions[systemModuleName];
  const modulePermissions = Object.keys(systemModuleObject).map((permission) => systemModuleObject[permission]);
  return accumulator.concat(modulePermissions);
}, []);

if (Meteor.isDevelopment) {
  if (Meteor.settings.private && Meteor.settings.private.REFRESH_PERMISSIONS) {
    console.log("Updating permissions...");
    const currentRoles = Roles.getAllRoles().fetch();
    for (let permission of permissionArray) {
      if (!currentRoles.find((_role) => _role._id === permission.VALUE)) {
        Roles.createRole(permission.VALUE);
      }
      Meteor.roles.update(permission.VALUE, {
        $set: {
          publicName: permission.TEXT,
        },
      });
    }
  }
}

export default Permissions;