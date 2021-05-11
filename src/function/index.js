/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    redirect file for all function

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const config = require("../config");

module.exports = {
  basic: require("./src/function.basic"),
  embed: require("./src/function.creator.embed"),
  bdd: require("./src/function.bdd"),
  permissions: require("./src/function.permission"),
  message: require("./src/function.message.others"),
};
