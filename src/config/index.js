/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    redirect file for all config file in javascript

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const token = require('./src/token');
const message_status = require('./src/message.status');

module.exports = {
  url: 'https://wydavix.fr',
  token: token,
  prefix: 'w!',
  cmd_principal: `help`,
  message_status: message_status,
};
