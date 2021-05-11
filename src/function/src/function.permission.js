function admin(user, cb) {
  if (user.hasPermission("ADMINISTRATOR")) return cb(true);
  cb(false);
}

function ownerbot(id, cb) {
  if (id === "725404396342608017") return cb(true);
  cb(false);
}

module.exports = { admin, ownerbot };
