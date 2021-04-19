function admin(user, cb) {
  if (user.hasPermission('ADMINISTRATOR')) return cb(true);
  cb(false);
}

module.exports = { admin };
