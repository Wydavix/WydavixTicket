/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    file for event Ready

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
*/

const function_basic = require('../../function').basic;

module.exports = class Ready {
  static starting(client) {
    let nb = 0;
    setInterval(() => {
      require('../../config/src/message.status')(client);
      const message_status = require('../../config/src/message.status')(client);
      client.user.setActivity(message_status[nb]);
      nb = function_basic.autoIncrement(nb, message_status.length - 1, 1);
    }, 15000);
    client.user.setStatus('dnd');
  }
};
