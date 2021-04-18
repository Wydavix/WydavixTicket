/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    redirect file for all config file in javascript

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const token = require('./src/token');
const message_status = require('./src/message.status');
const color = require('./src/color');

module.exports = {
  url: 'https://wydavix.fr',
  token: token,
  prefix: 'w!',
  cmd_principal: `help`,
  color: color,
  message_status: message_status,
};
