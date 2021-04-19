const mariadb = require('mariadb');
const data = require('../../config').bdd;

function bdd(cb) {
  mariadb
    .createConnection({
      host: data.host,
      user: data.user,
      password: data.password,
      database: data.database,
    })
    .then((con) => {
      cb(con);
    });
}

module.exports = bdd;
