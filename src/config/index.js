/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    redirect file for all config file in javascript

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const token = require('./src/config.secret/token');
const message_status = require('./src/message/message.status');
const message_embed = require('./src/message/message.embed');
const color = require('./src/other/color');
const bdd = require('./src/config.secret/bdd');

module.exports = {
  url: 'https://wydavix.fr',
  token: token,
  prefix: 'w!',
  cmd_principal: `help`,
  color: color,
  message_status: message_status,
  message_embed: message_embed,
  bdd: bdd,
};
